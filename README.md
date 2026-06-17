# 📋 Task Manager Application
A robust, full-stack Task Management platform built using the **MERN** stack. This application enables users to securely register, authenticate, and manage daily workflows with an optimized relational data workflow, real‑time status updates, and a sleek, fully fluid responsive interface.

---
## ✨ Key Features
* **User Authentication & Authorization:** Secure user registration, sign-in, and persistence using JSON Web Tokens (JWT) and bcrypt password encryption algorithms.
* **Full CRUD Operations:** Comprehensive system architecture allowing users to Create, Read, Update, and Delete personalized tasks effortlessly.
* **Real-Time Status Tracking:** Dynamic progression handling across task development phases (e.g., *To Do*, *In Progress*, *Completed*).
* **Modern UI/UX Responsive Design:** Fluid, mobile-first design system structured using React components and styled elegantly with Tailwind CSS utility classes.
* **Data Persistence:** Optimized architectural design implementing Mongoose schemas for structured relational tracking inside a cloud MongoDB database.
---
## 🛠️ Tech Stack & Architecture
### Frontend (Client-Side)
* **React.js** (Functional architecture, custom hooks, dynamic state updates)
* **Tailwind CSS** (Utility-first framework for responsive user interfaces)
* **Axios** (Promise-based asynchronous HTTP clients for REST API communication)
### Backend (Server-Side)
* **Node.js** (Cross-platform JavaScript runtime environment)
* **Express.js** (Robust framework for exposing RESTful API endpoints and routing)
* **MongoDB & Mongoose** (NoSQL document database utilized for data persistence)
* **JWT & Bcrypt.js** (Secure token-based user authorization and cryptographic credential hashing)
---
## 🛣️ Core REST API Endpoints

| HTTP Method | API Endpoint | Description | Authentication |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Registers a new user account profile | Public |
| **POST** | `/api/auth/login` | Validates credentials and generates a session JWT | Public |
| **GET** | `/api/tasks` | Fetches all operational tasks assigned to the user | **Required (JWT)** |
| **POST** | `/api/tasks` | Generates a new task record inside the database | **Required (JWT)** |
| **PUT** | `/api/tasks/:id` | Modifies text properties or triggers real-time state changes | **Required (JWT)** |
| **DELETE** | `/api/tasks/:id` | Purges an explicit task record from the database system | **Required (JWT)** |

---
## ⚙️ Installation & Local Environment Setup
Follow these directions to configure a local instance of the application on your machine:
### 1. Project Initialization
```bash
git clone [https://github.com/vibhayadav2004/Task-Manager-Application.git](https://github.com/vibhayadav2004/Task-Manager-Application.git)
cd Task-Manager-Application
