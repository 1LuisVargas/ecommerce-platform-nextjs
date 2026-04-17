# 🛒 [Ecommerce Platform](https://m4-fe.vercel.app/)

> A full-stack e-commerce platform built with **Next.js**, **React**, **TypeScript**, **PostgreSQL**, and **Yup**. Browse products, manage your cart, place orders, and track your order history — with a clean separation between a Next.js frontend and a TypeScript REST API backend.

---

<!-- TO BE UPDATED WITH SCREENSHOTS OF THE PROJECT
## 📸 Screenshots

> _Add screenshots of the platform here — e.g. the product catalog, shopping cart, and order history pages._

---
-->

## ✨ Features

- **User Authentication** — Sign up, log in, and access protected routes via JWT
- **Product Catalog** — Browse and search available products
- **Shopping Cart** — Add, update, and remove items before checkout
- **Order History** — View placed orders and their full details
- **Form Validation** — Schema-based validation with Yup throughout the frontend
- **Layered Backend Architecture** — Express API organized by controllers, services, repositories, entities, DTOs, middlewares, and routes

---

## 🛠️ Tech Stack

| Layer        | Technology                                      |
|--------------|-------------------------------------------------|
| Framework    | Next.js (App Router), React, TypeScript         |
| Styling      | Tailwind CSS                                    |
| Frontend     | Vercel                                          |
| Backend      | Northflank                                      |
| Database     | Neon (PostgreSQL)                               |

---

## 📁 Project Structure

```
ecommerce-platform-nextjs/
├── back/                        # Backend — Node.js + Express REST API
│   ├── src/
│   │   ├── config/              # App configuration (env, DB, etc.)
│   │   ├── controllers/         # Route handler logic
│   │   ├── dtos/                # Data Transfer Objects
│   │   ├── entities/            # Database entity definitions
│   │   ├── helpers/             # Helper functions
│   │   ├── middlewares/         # Auth and error middleware
│   │   ├── repositories/        # Data access layer
│   │   ├── routes/              # Express route declarations
│   │   ├── services/            # Business logic layer
│   │   ├── utils/               # Utility functions
│   │   ├── index.ts             # Backend entry point
│   │   └── server.ts            # Express server setup
│   ├── .env.example             # Environment variable template
│   └── package.json
│
└── front/                       # Frontend — Next.js App
    ├── public/                  # Static public assets
    └── src/
        ├── app/                 # Next.js App Router pages & layouts
        ├── components/          # Reusable UI components
        ├── contexts/            # React context providers (e.g. cart, auth)
        ├── helpers/             # Client-side helper functions
        ├── interfaces/          # TypeScript interfaces & types
        ├── services/            # API call functions
        └── validators/          # Yup validation schemas
    ├── .env.example             # Environment variable template
    └── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/1LuisVargas/ecommerce-platform-nextjs.git
cd ecommerce-platform-nextjs
```

---

### 2. Set Up the Backend

```bash
cd back
npm install
```

Copy the environment variables template and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure as needed:

```env
PORT= # Puerto en el que deseas iniciar la aplicación
DB_HOST= # Host de la base de datos. Localhost en el caso de tu computadora
DB_PORT= # Puerto del servidor de la base de datos. 5432 si mantienes la configuración de postgres por defecto
DB_USER= # Usuario de la base de datos. Por defecto, postgres
DB_PASSWORD= # Contraseña del usuario de la base de datos
DB_NAME= # Nombre que le has dado a tu base de datos
JWT_SECRET= # Clave secreta para la generación de tokens JWT. Puede ser cualquier palabra que desees
```

Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:3005` by default.

---

### 3. Set Up the Frontend

Open a new terminal tab/window:
```bash
cd front
npm install
```

Copy the environment variables template and fill in your values:
```bash
cp .env.example .env
```

Open `.env` and configure as needed:
```env
NEXT_PUBLIC_API_URL= # URL where the backend API is running. http://localhost:3005 is recommended
```

Start the frontend server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

> **Tip:** Make sure the backend is running before starting the frontend so that API calls resolve correctly.

---

## 🔌 API Endpoints

> Base URL: `http://localhost:3005`

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| POST   | `/orders`            | Create a new order           |
| GET    | `/products`          | Get all products             |
| POST   | `/users/register`    | Register a new user          |
| POST   | `/users/login`       | Login an existing user       |
| GET    | `/users/orders`      | Get orders for the user      |

---

## 👤 Author

**Luis Vargas**
- GitHub: [@1LuisVargas](https://github.com/1LuisVargas)
- LinkedIn: [@1LuisVargas](https://www.linkedin.com/in/1luisvargas/)
