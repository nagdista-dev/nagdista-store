# Nagdista Store

A full-stack e-commerce store application with product management, cart, and user authentication.

## Tech Stack

### Frontend
- **React** with Vite
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Lucide React** for icons

### Backend
- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **JWT** for authentication

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance

### Installation

```bash
git clone https://github.com/nagdista-dev/nagdista-store.git
cd nagdista-store
npm install
```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run

```bash
npm run dev
```

This starts both the frontend (port 5173) and backend (port 5000) concurrently.

## Project Structure

```
nagdista-store/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   └── components/
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── data/
│   └── server.js
└── package.json
```
