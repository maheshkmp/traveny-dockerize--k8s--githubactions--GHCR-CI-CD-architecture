# Local Kubernetes Setup for Traveny

This directory contains the Kubernetes manifests to run Traveny locally using a cluster like **Minikube**, **Kind**, or **Docker Desktop**.

## Prerequisites

1. A local Kubernetes cluster (e.g., [Minikube](https://minikube.sigs.k8s.io/docs/start/) or [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/)).
2. `kubectl` installed.
3. An Ingress controller enabled (e.g., `minikube addons enable ingress`).

## Steps to Deploy

### 1. Build Docker Images

You need to build the images and make them available to your cluster.

**For Minikube:**
```bash
eval $(minikube docker-env)
docker build -t traveny-api:latest -f apps/api/Dockerfile .
docker build -t traveny-web:latest -f apps/web/Dockerfile .
```

**For Kind:**
```bash
docker build -t traveny-api:latest -f apps/api/Dockerfile .
docker build -t traveny-web:latest -f apps/web/Dockerfile .
kind load docker-image traveny-api:latest
kind load docker-image traveny-web:latest
```

### 2. Apply Manifests

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/db.yaml
kubectl apply -f k8s/api.yaml
kubectl apply -f k8s/web.yaml
kubectl apply -f k8s/ingress.yaml
```

### 3. Update Hosts File

Add the following to your `/etc/hosts` (Linux/macOS) or `C:\Windows\System32\drivers\etc\hosts` (Windows):

```text
127.0.0.1 traveny.local
127.0.0.1 api.traveny.local
```
*(Note: If using Minikube on macOS/Windows, use `minikube ip` instead of `127.0.0.1` or run `minikube tunnel`.)*

## Services

- **Web UI:** [http://traveny.local](http://traveny.local)
- **API:** [http://api.traveny.local](http://api.traveny.local)
- **Database:** Internal service `db-service:5432`
