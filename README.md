CarHealth-Lite is a full-stack web application for monitoring and analyzing the technical health of vehicles. Users can input vehicle data, receive diagnostics on system status, and view historical reports for preventive maintenance.

Features

User Authentication: Secure signup and login using JWT

Vehicle Management: Add, view, and manage vehicles and their components

Diagnostics & Analysis: Analyze vehicle data to detect potential issues

Historical Reports: View past reports and maintenance history

Alerts & Notifications: Receive alerts for scheduled maintenance or critical issues

Tech Stack
Backend

Node.js + Express

Microsoft Access (via node-adodb or similar package)

JWT for authentication

Axios for API requests (optional)

Frontend

React 19

React Router for navigation

Axios for API calls

Modern CSS styling (Tailwind / Material UI optional)

Prerequisites

Before starting, make sure you have installed:

Node.js (v16 or higher) and npm

Microsoft Access (for local .mdb or .accdb database file)

Any API keys for external services (if used)

Installation
1. Clone the Repository
git clone <repository-url>
cd CarHealth-Lite

2. Backend Setup
cd backend
npm install


Create a .env file in the backend directory:

ACCESS_DB_PATH=C:/path/to/your/database.accdb
JWT_SECRET=your_jwt_secret_key
PORT=5000
CLIENT_ORIGIN=http://localhost:3000

3. Frontend Setup
cd ../client
npm install


(Optional) Create a .env file for API URL:

REACT_APP_API_URL=http://localhost:5000/api

Running the Application
Start Backend Server
cd backend
npm start


The backend server will run at http://localhost:5000.

Start Frontend Server
cd client
npm start


The React app will run at http://localhost:3000.

Usage

Create an account or log in

Add your vehicle and relevant data (mileage, system status, maintenance records)

View diagnostics and historical reports

Receive alerts for scheduled maintenance or detected issues

Environment Variables Reference
Backend (.env)
Variable	Required	Description
ACCESS_DB_PATH	✅ Yes	Path to the Access database file (.mdb or .accdb)
JWT_SECRET	✅ Yes	Secret key for JWT authentication
PORT	❌ No	Backend server port (default 5000)
CLIENT_ORIGIN	❌ No	Frontend URL for CORS
Frontend (.env) - Optional
Variable	Required	Description
REACT_APP_API_URL	❌ No	Backend API URL
Project Structure
CarHealth-Lite/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Auth middleware
│   ├── models/           # DB access models for Access
│   ├── routes/           # API routes
│   ├── services/         # Optional external services
│   ├── server.js         # Express server setup
│   └── package.json
├── client/
│   ├── public/           # Static files
│   ├── src/
│   │   ├── pages/        # React pages (Login, Dashboard, Vehicle)
│   │   ├── components/   # Reusable components
│   │   ├── api.js        # Axios configuration
│   │   ├── App.js        # Main app component
│   │   └── index.js      # React entry point
│   └── package.json
└── README.md

Troubleshooting

Database Connection Issues
Ensure the ACCESS_DB_PATH points to a valid Access file and Node has permission to access it.

JWT Errors
Verify JWT_SECRET is correctly set and matches between backend and frontend requests.

Port Conflicts
If port 5000 or 3000 is in use, change PORT in backend .env or update REACT_APP_API_URL in frontend .env.
