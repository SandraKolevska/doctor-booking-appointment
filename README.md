# Doctor Appointment Booking App

This is a dynamic web application built using the **MERN** stack (MongoDB, Express.js, React, Node.js).  
The app enables users to search for doctors by specialty, view doctor profiles, and book medical appointments online.

---

## 📌 Features

- Browse doctors by medical specialty  
- View detailed doctor profiles (photo, bio, experience, fees, location)  
- Book appointments with available doctors  
- Contact form for general inquiries  
- Responsive design for mobile and desktop  
- Admin-ready backend structure  
- RESTful API with MongoDB integration  

---

## ⚙️ Technologies Used

### 🔷 Frontend
- React + Vite  
- Tailwind CSS  
- React Router DOM  
- Context API  

### 🔶 Backend
- Node.js  
- Express.js  
- MongoDB (Local)  
- Mongoose  
- Dotenv  

---

## 🗂️ Project Structure

```
Doctor-Booking-Appointment/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 How to Run the Project


### 1. Run Backend ###

```bash
cd backend
npm install
npm run dev
```

Make sure **MongoDB is running locally** on your machine (default port: `27017`).

### 2. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open your browser and navigate to:  
👉 `http://localhost:5173`
