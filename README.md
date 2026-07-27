# Nagdista Store

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-4A9A57?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Node.js-18-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
</p>

A full-stack e-commerce store application with product management, cart, and user authentication.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Redux Toolkit, Tailwind CSS, Lucide Icons |
| Backend | Node.js, Express 5 |
| Database | MongoDB with Mongoose |
| Auth | JWT |

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
