# 💬 ChatLit - Real-Time Chat Application

A modern full-stack real-time chat application built with the MERN stack, designed to deliver seamless communication with instant messaging, image sharing, user presence tracking, and customizable themes.

## 🌐 Live Demo

🚀 **Try it here:** https://chatlit.onrender.com


## 🚀 Features

### 🔐 Authentication & Security
- User Registration and Login
- JWT-based Authentication & Authorization
- Protected Routes
- Secure Password Storage
- Persistent User Sessions

### 💬 Real-Time Communication
- Instant One-to-One Messaging
- Real-Time Image Sharing
- Live Message Updates with Socket.io
- Online/Offline User Presence Detection
- Instant Logout Status Synchronization

### 🎨 Modern User Experience
- Fully Responsive Design (Desktop, Tablet & Mobile)
- 32 Customizable UI Themes
- User Profile Management
- Profile Picture Upload & Update
- Smooth Loading Skeletons
- Real-Time Error & Success Notifications

### ⚡ Performance & State Management
- Global State Management with Zustand
- Optimized API Calls
- Efficient Socket Connections
- Fast UI Rendering

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- Zustand
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JSON Web Tokens (JWT)

### Cloud Services
- Cloudinary (Image Storage & Management)

---

## 📂 Project Structure

```bash
SnapClass/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory and add the following:

```env
MONGODB_URI=your_mongodb_connection_string

PORT=5001

JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=development
```

---

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/SnapClass.git
cd SnapClass
```

### Install Dependencies

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## ▶️ Run the Application

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 🌟 Learning Outcomes

This project demonstrates:

- Building RESTful APIs with Express.js
- Implementing Authentication using JWT
- Managing Real-Time Communication with Socket.io
- Integrating Cloud Storage for Media Uploads
- State Management using Zustand
- Designing Responsive Interfaces with Tailwind CSS
- Deploying Full-Stack Applications to Production

---


## 🎯 Future Improvements

- Group Chats
- Message Reactions
- Read Receipts
- Voice Messages
- Video Calling
- End-to-End Encryption
- Push Notifications

---

## 📄 License

This project is open-source and available under the MIT License.

---

### ⭐ If you found this project helpful, consider giving it a star!
