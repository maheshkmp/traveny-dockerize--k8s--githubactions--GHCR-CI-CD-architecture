#!/bin/bash
set -e

# Logging output
exec > >(tee /var/log/user-data.log|logger -t user-data -s 2>/dev/console) 2>&1

echo "🚀 Starting Full Automated Kubernetes Control Plane & Traveny Provisioner..."

# 1. Update system packages
apt-get update -y
apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release iptables software-properties-common git

# 2. Configure Swap Memory (2GB Safety Buffer)
if ! grep -q '/swapfile' /etc/fstab; then
    echo "📦 Configuring 2GB Swap space..."
    fallocate -l 2G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap defaults 0 0' >> /etc/fstab
fi

# 3. Enable Kernel Modules required by Containerd & Kubernetes
cat <<EOF | tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

modprobe overlay
modprobe br_netfilter

# 4. Configure Sysctl parameters for Kubernetes Networking
cat <<EOF | tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

sysctl --system

# 5. Install and Configure Containerd Runtime
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install -y containerd.io

mkdir -p /etc/containerd
containerd config default | tee /etc/containerd/config.toml > /dev/null

# Enable SystemdCgroup in containerd config (required for Kubelet)
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml
systemctl restart containerd
systemctl enable containerd

# 6. Install kubeadm, kubelet, and kubectl (Kubernetes v1.30)
K8S_VERSION="v1.30"
mkdir -p /etc/apt/keyrings
curl -fsSL https://pkgs.k8s.io/core:/stable:/${K8S_VERSION}/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/${K8S_VERSION}/deb/ /" | tee /etc/apt/sources.list.d/kubernetes.list

apt-get update -y
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

systemctl enable --now kubelet

# 7. Automated Kubeadm Control Plane Initialization
echo "☸️ Initializing Kubernetes Control Plane..."
swapoff -a
PUBLIC_IP=$(curl -s https://checkip.amazonaws.com || hostname -I | awk '{print $1}')

kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-cert-extra-sans="${PUBLIC_IP}"

# Configure kubeconfig for root and ubuntu user
mkdir -p /root/.kube /home/ubuntu/.kube
cp -i /etc/kubernetes/admin.conf /root/.kube/config
cp -i /etc/kubernetes/admin.conf /home/ubuntu/.kube/config
chown -R ubuntu:ubuntu /home/ubuntu/.kube

export KUBECONFIG=/etc/kubernetes/admin.conf

# 8. Untaint Control Plane Node for Single-Node Workloads
kubectl taint nodes --all node-role.kubernetes.io/control-plane- || true

# 9. Install CNI (Flannel) & Storage Provisioner (Rancher)
echo "🌐 Installing Flannel CNI & Local Storage Class..."
kubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml
kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/v0.0.30/deploy/local-path-storage.yaml
kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}' || true

# 10. Install NGINX Ingress Controller & Enable hostNetwork
echo "🚪 Installing NGINX Ingress Controller..."
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/baremetal/deploy.yaml
kubectl patch deployment ingress-nginx-controller -n ingress-nginx -p '{"spec":{"template":{"spec":{"hostNetwork":true}}}}' || true

# 11. Clone Traveny Repo & Apply Application Manifests
echo "📦 Deploying Traveny Application Manifests..."
git clone https://github.com/maheshkmp/traveny.git /home/ubuntu/traveny || true
chown -R ubuntu:ubuntu /home/ubuntu/traveny

kubectl create namespace traveny || true

# Create default secrets if not present
kubectl create secret generic traveny-secrets \
  --from-literal=postgres-user=postgres \
  --from-literal=postgres-password=postgrespassword \
  --from-literal=postgres-db=traveny \
  --from-literal=better-auth-secret="your-secret-key-change-this-in-production" \
  --from-literal=resend-api-key="re_dummy_key" \
  --from-literal=database-url="postgresql://postgres:postgrespassword@db-service:5432/traveny" \
  -n traveny || true

kubectl apply -f /home/ubuntu/traveny/k8s/db.yaml || true
kubectl apply -f /home/ubuntu/traveny/k8s/api.yaml || true
kubectl apply -f /home/ubuntu/traveny/k8s/web.yaml || true
kubectl apply -f /home/ubuntu/traveny/k8s/ingress.yaml || true

echo "✅ Full Automated Kubernetes Cluster & Traveny Application Launch Complete!"
