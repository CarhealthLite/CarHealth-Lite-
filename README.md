# CarHealth Lite

CarHealth Lite is a web application for vehicle diagnostics and management. Users can create an account, enter their vehicle details, and receive AI-generated solutions, recommendations, and risk factors for their vehicle's condition.

**IMPORTANT:** Please read the LICENSE section before using this software.

---

## FEATURES

- **User Authentication:** Signup and login system
- **Vehicle Input:** Enter details such as model, year, mileage, and more
- **AI Diagnostics:** Get personalized recommendations and solutions
- **Risk Factors:** Identify potential risks and issues with your vehicle
- **User-Friendly Interface:** Clean and intuitive web interface inspired by modern dashboards

---

## TECH STACK

**Backend**
- Node.js with Express
- Microsoft Access Database (.accdb)
- JSON for communication between frontend and backend

**Frontend**
- React.js
- Axios for API calls
- HTML, CSS, JavaScript

---

## PREREQUISITES

Make sure the following are installed:

- Node.js (v16 or higher)
- npm
- Microsoft Access Database Engine (for `.accdb` support)

---

## INSTALLATION

1. Clone the repository:

git clone <repository-url>
cd CarHealth-Lite
Install backend dependencies:

bash
Copy code
cd backend
npm install
Install frontend dependencies:

bash
Copy code
cd ../client
npm install
Configure environment variables:

Create a .env file in the backend folder with the following variables:

env
Copy code
PORT=5000
DB_PATH=./database/CarHealth.accdb
RUN THE APPLICATION
Start the backend server:

bash
Copy code
cd backend
node server.js
Backend will run at http://localhost:5000.

Start the frontend server:

bash
Copy code
cd client
npm start
Frontend will run at http://localhost:3000.

USAGE
Open the frontend in your browser (http://localhost:3000).

Signup for a new account or login with existing credentials.

After login, access the dashboard where you can enter vehicle details.

Receive AI-generated recommendations and view risk factors.

DATABASE
Microsoft Access .accdb file located at backend/database/CarHealth.accdb

Table: User
Columns:

ID_User (Primary Key, unique identifier)

Nume (User's name)

Email (User email, unique)

Password (User password, plaintext for simplicity)

Created_At (Timestamp)

Table: Vehicle (optional for vehicle input features)

Database connection is handled in backend/database/database.js using the node-adodb driver.

TROUBLESHOOTING
Server errors: Check that Access Database Engine is installed and DB_PATH points correctly to your .accdb file.

Signup/login issues: Ensure frontend sends correct Nume, Email, and Password fields.

Port conflicts: Make sure 5000 is free for backend and 3000 for frontend.

PROJECT STRUCTURE

CarHealth-lite/
|
|-- backend/
| |-- controllers/
| | |-- aiController.js
| | |-- userController.js
| | |-- vehicleController.js
| |
| |-- database/
| | |-- CarHealth.db
| | |-- database.js
| |
| |-- middleware/
| | |-- authMiddleware.js
| |
| |-- routes/
| | |-- aiRoutes.js
| | |-- userRoutes.js
| | |-- vehicleRoutes.js
| |
| |-- carhealth.env
| |-- server.js
| |-- package.json
|
|-- client/
| |-- public/
| | |-- index.html
| | |-- favicon.ico
| |
| |-- src/
| | |-- pages/
| | | |-- AISuggestion.js
| | | |-- Dashboard.js
| | | |-- Login.js
| | | |-- Signup.js
| | |
| | |-- services/
| | | |-- api.js
| | |
| | |-- App.js
| | |-- index.js
| | |-- App.css
| | |-- index.css
| |
| |-- package.json
|
|-- README.txt
|-- LICENSE.txt

LICENSE
Please read the LICENSE.txt file before using this software.

SUPPORT
For questions or issues, contact the project author.
