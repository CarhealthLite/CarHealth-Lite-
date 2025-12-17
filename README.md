# CarHealth-Lite

**CarHealth-Lite** is a full-stack web application for monitoring and analyzing the technical health of vehicles. Users can input vehicle data, receive diagnostics on system status, and view historical reports for preventive maintenance.

---

## Features

- **User Authentication**: Secure signup and login using JWT  
- **Vehicle Management**: Add, view, and manage vehicles and their components  
- **Diagnostics & Analysis**: Analyze vehicle data to detect potential issues  
- **Historical Reports**: View past reports and maintenance history  
- **Alerts & Notifications**: Receive alerts for scheduled maintenance or critical issues  

---

## Tech Stack

### Backend
- Node.js + Express  
- Microsoft Access (`.mdb` / `.accdb`) via `node-adodb` or similar package  
- JWT for authentication  
- Axios for API requests (optional)  

### Frontend
- React 19  
- React Router for navigation  
- Axios for API calls  
- Modern CSS styling (Tailwind / Material UI optional)  

---

## Prerequisites

Before starting, make sure you have installed:  

- **Node.js** (v16 or higher) and npm  
- **Microsoft Access** (for local `.mdb` or `.accdb` database file)  
- Any API keys for external services (if used)  

---

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CarHealth-Lite
