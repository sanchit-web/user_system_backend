# MERN User System – Backend

A simple user management backend built using Node.js, Express, and MongoDB Atlas.  
This project supports user registration, login, and fetching all users.

---

## 🚀 Features

- User Registration (with hashed password)
- User Login (password verification using bcrypt)
- Get All Users (password excluded)
- MongoDB Atlas Integration
- REST API Structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- CORS

---

## 📂 Project Structure

```
user_system_backend/
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── server.js
├── package.json
└── .gitignore
```

---

## 📡 API Endpoints

### 🔹 Register User
POST `/api/users/register`

Body:
```json
{
  "name": "Sanchit",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### 🔹 Login User
POST `/api/users/login`

Body:
```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### 🔹 Get All Users
GET `/api/users`

Returns all users (password excluded).

---

## ⚙️ How To Run Locally

1. Clone the repository
2. Run:
   ```
   npm install
   ```
3. Add your MongoDB Atlas URI inside `server.js` or use `.env`
4. Run:
   ```
   node server.js
   ```
5. Server will start on:
   ```
   http://localhost:5000
   ```

---

## 🧠 What I Learned

- Connecting Node.js with MongoDB Atlas
- Creating REST APIs
- Password hashing using bcrypt
- Structuring backend using MVC pattern
- Testing APIs using Postman

---

## 👨‍💻 Author

Sanchit Gupta
BTech CSE – Bennett University
