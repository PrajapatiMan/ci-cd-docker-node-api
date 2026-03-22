# 🚀 CI/CD with Docker + GitHub Actions (Node.js API)

This project demonstrates a **CI/CD pipeline** using:

* 🟢 Node.js (Express API)
* 🐳 Docker
* ⚙️ GitHub Actions
* 📦 Docker Hub (for image storage)

---

# 📌 Project Overview

This is a simple Node.js API that is:

* Dockerized using a `Dockerfile`
* Automatically built using GitHub Actions
* Pushed to Docker Hub on every code update

---

# ⚙️ CI/CD Workflow

Whenever code is pushed to the `main` branch:

1. GitHub Actions is triggered
2. The project is built into a Docker image
3. GitHub logs into Docker Hub using secrets
4. The Docker image is pushed to Docker Hub

---

# 🐳 Docker Hub Repository

👉 Your Docker image is available here:

```
https://hub.docker.com/r/YOUR_USERNAME/node-api
```

Replace `PrajapatiMan` with your Docker Hub username.

---

# 🔐 GitHub Secrets Used

The project uses GitHub Secrets for secure login:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`

These are configured in:

```
GitHub → Settings → Secrets → Actions
```

---

# 📁 Project Structure

```
ci-cd-docker-node-api
│
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── .github/workflows/ci-cd.yml
```

---

# 🛠️ How to Run Locally

### 1. Build Docker Image

```
docker build -t node-api .
```

### 2. Run Container

```
docker run -p 3000:3000 node-api
```

### 3. Open in Browser

```
http://localhost:3000
http://localhost:3000/api
```

---

# 📡 API Endpoints

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | /        | Home route          |
| GET    | /api     | Sample API response |

---

# 🎯 Key Features

* ✅ Dockerized Node.js application
* ✅ Automated CI/CD pipeline
* ✅ Secure authentication using GitHub Secrets
* ✅ Automatic Docker image push to Docker Hub

---

# 💡 Learning Outcome

* Learned how to integrate Docker with GitHub Actions
* Understood CI/CD pipeline automation
* Learned secure credential handling using secrets

---

# 👨‍💻 Author

Man Prajapati

---

# ⭐ Conclusion

This project shows how modern applications are built, containerized, and deployed automatically using CI/CD pipelines.

---
