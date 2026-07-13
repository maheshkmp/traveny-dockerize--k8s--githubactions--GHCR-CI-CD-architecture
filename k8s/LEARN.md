# Traveny Local Kubernetes Architecture & Administration

This guide explains the architecture of the Traveny application deployed in Kubernetes (Minikube), how to manage the cluster resources, how to run migrations, and how to promote any user (e.g., `admin@gmail.com`) to the **Admin** role.

---

## 1. Architectural Design & Fixes

Traveny is built as a monorepo containing three core components:
1. **Frontend (`web`):** Next.js App Router running on port `3000`.
2. **Backend (`api`):** Hono server running on port `4000`.
3. **Database (`db`):** PostgreSQL database running on port `5432`.

### Dynamic Runtime Routing (Next.js Build-Time Inlining Fix)
Next.js statically compiles and inlines all environment variables prefixed with `NEXT_PUBLIC_` at build time. When building inside a Docker image, this causes dynamic configuration to lock into static fallback strings (e.g., `localhost:4000`).
*   **Solution:** We use non-prefixed `process.env.BACKEND_URL` on the server-side, which Next.js resolves dynamically at runtime from the pod variables inside the Kubernetes container.

### Better-Auth Proxy Loopback Guard
Better-Auth uses dynamic JavaScript `Proxy` objects targeting `function(){}` for route path resolving. Standard property lookups (like `fetchOptions`, `options`, `bind`, `call`, or `apply`) made internally by React hook closures fell through to the path builder, causing the browser to send unwanted requests like `/api/auth/options/to-j-s-o-n` or `/api/auth/sign-up/bind`.
*   **Solution:** In `auth-client.ts`, the global `Proxy` constructor is temporarily wrapped during initialization to intercept these lookup keys and return native prototype bindings safely, preventing dynamic route generation.

### Local HTTP Cookie Savior
When running in production mode (`NODE_ENV=production`), Better-Auth sets session cookies with `Secure` and `SameSite=None` attributes. Because `traveny.local` runs over unsecured HTTP locally, the browser will silently reject these cookies, preventing users from logging in.
*   **Solution:** We automatically detect local domains (`.local` or `localhost`) at backend startup and override cookies to use `Secure=false` and `SameSite=Lax`.

---

## 2. Administrative Guide: Promoting a User to Admin

To gain administrative access (e.g. for `admin@gmail.com`), you need to update the `role` column in the `users` table to `'admin'`.

### Option A: Direct Kubernetes Exec (Recommended)
You can execute the SQL query directly inside the database pod using `kubectl`:

1. **Find the DB Pod Name:**
   ```bash
   kubectl get pods -n traveny -l app=db
   ```
2. **Run the Update Query:**
   Replace `<db-pod-name>` with the output from step 1:
   ```bash
   kubectl exec -it <db-pod-name> -n traveny -- psql -U postgres -d traveny -c "UPDATE users SET role = 'admin' WHERE email = 'admin@gmail.com';"
   ```

### Option B: Local SQL client (via Port Forwarding)
1. **Port-forward the DB Service:**
   ```bash
   kubectl port-forward svc/db-service 5433:5432 -n traveny
   ```
2. **Connect using any SQL Client:**
   *   **Host:** `127.0.0.1`
   *   **Port:** `5433`
   *   **User:** `postgres`
   *   **Password:** `postgrespassword`
   *   **Database:** `traveny`
3. **Execute SQL:**
   ```sql
   UPDATE users SET role = 'admin' WHERE email = 'admin@gmail.com';
   ```

---

## 3. Managing the Kubernetes Cluster in Minikube

All commands should be executed from the root of the project.

### Monitoring Pods, Services, and Logs
*   **Check Pod Status:**
    ```bash
    kubectl get pods -n traveny
    ```
*   **Check Services:**
    ```bash
    kubectl get svc -n traveny
    ```
*   **Check Ingress Routes:**
    ```bash
    kubectl get ingress -n traveny
    ```
*   **Tail API (Backend) Logs:**
    ```bash
    kubectl logs -n traveny deployment/api --tail=50 -f
    ```
*   **Tail Web (Frontend) Logs:**
    ```bash
    kubectl logs -n traveny deployment/web --tail=50 -f
    ```

### Building & Rollout-Restarting Code Changes
If you make code changes and want to update the running pods in Minikube:

1. **Link your terminal shell to Minikube's Docker daemon:**
   ```bash
   eval $(minikube docker-env)
   ```
2. **Rebuild the corresponding image:**
   *   For Frontend (`web`):
       ```bash
       docker build -t traveny-web:latest -f apps/web/Dockerfile .
       ```
   *   For Backend (`api`):
       ```bash
       docker build -t traveny-api:latest -f apps/api/Dockerfile .
       ```
3. **Trigger a Rolling Restart:**
   *   For Frontend:
       ```bash
       kubectl rollout restart deployment web -n traveny
       kubectl rollout status deployment web -n traveny
       ```
   *   For Backend:
       ```bash
       kubectl rollout restart deployment api -n traveny
       kubectl rollout status deployment api -n traveny
       ```

### Running Database Migrations
If database schemas are updated, apply new migrations to the Postgres pod:

1. **Start Port Forwarding:**
   ```bash
   kubectl port-forward svc/db-service 5433:5432 -n traveny &
   ```
2. **Run Drizzle Migration:**
   ```bash
   DATABASE_URL="postgresql://postgres:postgrespassword@127.0.0.1:5433/traveny" bun run db:migrate
   ```
3. **Stop Port Forwarding:**
   Bring the port-forward task to the foreground and terminate it:
   ```bash
   fg
   # Then press Ctrl + C
   ```
