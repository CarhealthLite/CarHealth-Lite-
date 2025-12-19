# News Analyser Web Application

A full-stack web application for analyzing news articles using Google's Gemini AI. Users can submit news article URLs, and the application will extract topics, analyze sentiment, and compare perspectives across different sources.

## Features

- **User Authentication**: Secure signup and login with JWT-based authentication
- **Project Management**: Create, view, and manage news analysis projects
- **AI-Powered Analysis**: Uses Google Gemini AI to:
  - Extract key topics from news articles
  - Analyze sentiment (positive/negative/neutral)
  - Compare perspectives across different news sources
- **Web Scraping**: Automatically extracts content from news article URLs

## Tech Stack

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Google Generative AI (Gemini)
- Axios & Cheerio for web scraping

### Frontend
- React 19
- React Router for navigation
- Axios for API calls
- Modern CSS styling

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) and npm
- **MongoDB** (local installation or MongoDB Atlas account)
- **Google Gemini API Key** (get it from [Google AI Studio](https://aistudio.google.com/app/apikey))

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd 25-26IEWebAppsNewsAnalyser
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection String
# For local MongoDB: mongodb://localhost:27017/news-analyser
# For MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/news-analyser
MONGO_URI=mongodb://localhost:27017/news-analyser

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production

# Google Gemini API Key (get from https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your_gemini_api_key_here

# Server Port (optional, defaults to 5000)
PORT=5001

# Client Origin for CORS (optional, defaults to http://localhost:3000)
CLIENT_ORIGIN=http://localhost:3000

# Gemini Model (optional, defaults to gemini-2.5-flash)
# Alternatives: gemini-1.5-flash-latest, gemini-1.5-pro-latest, gemini-2.0-flash-exp
GEMINI_MODEL=gemini-2.5-flash
```

### 3. Frontend Setup

Navigate to the client directory and install dependencies:

```bash
cd ../client
npm install
```

(Optional) Create a `.env` file in the `client` directory if you need to customize the API URL:

```env
# Backend API URL (optional, defaults to http://localhost:5001/api)
REACT_APP_API_URL=http://localhost:5001/api
```

## Running the Application

### Start the Backend Server

From the `backend` directory:

```bash
npm start
```

The backend server will start on `http://localhost:5001` (or the port specified in your `.env` file).

You should see:
```
Server running on port 5001
MongoDB Connected
```

### Start the Frontend Development Server

From the `client` directory (in a new terminal):

```bash
npm start
```

The React app will start on `http://localhost:3000` and should automatically open in your browser.

## Usage

### 1. Create an Account

- Navigate to `http://localhost:3000`
- Click on "Sign Up" or go to the signup page
- Enter your email and password
- Click "Sign Up" to create your account

### 2. Log In

- Enter your credentials on the login page
- You'll be redirected to the dashboard upon successful authentication

### 3. Create a News Analysis Project

- On the dashboard, enter a project name
- Add news article URLs (one or multiple)
- Click "Create Project" to submit

### 4. View Analysis Results

- The application will:
  - Scrape content from the provided URLs
  - Send the content to Google Gemini AI for analysis
  - Display extracted topics
  - Show sentiment analysis and perspectives for each source
- View your analysis results on the dashboard

### 5. Manage Projects

- All your projects are saved and displayed on the dashboard
- View past analyses at any time

## Environment Variables Reference

### Backend (.env)

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `MONGO_URI` | ✅ Yes | - | MongoDB connection string |
| `JWT_SECRET` | ✅ Yes | - | Secret key for JWT token signing |
| `GEMINI_API_KEY` | ✅ Yes | - | Google Gemini API key |
| `PORT` | ❌ No | `5000` | Port for the backend server |
| `CLIENT_ORIGIN` | ❌ No | `http://localhost:3000` | Frontend URL for CORS |
| `GEMINI_MODEL` | ❌ No | `gemini-2.5-flash` | Gemini model to use |

### Frontend (.env) - Optional

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `REACT_APP_API_URL` | ❌ No | `http://localhost:5001/api` | Backend API base URL |

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or your MongoDB Atlas connection string is correct
- Check that the database name in your `MONGO_URI` is correct

### Gemini API Errors
- Verify your `GEMINI_API_KEY` is valid
- If you get model errors, try switching to `gemini-1.5-flash-latest` in your `.env`
- Check your API quota at [Google AI Studio](https://aistudio.google.com)

### CORS Errors
- Ensure `CLIENT_ORIGIN` in backend `.env` matches your frontend URL
- Make sure both frontend and backend servers are running

### Port Already in Use
- If port 5001 or 3000 is already in use, change the `PORT` in backend `.env` or update `REACT_APP_API_URL` accordingly

## Project Structure

```
25-26IEWebAppsNewsAnalyser/
├── backend/
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Authentication middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── services/        # Gemini AI service
│   ├── server.js        # Express server setup
│   └── package.json
├── client/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── pages/       # React components (Login, Signup, Dashboard)
│   │   ├── api.js       # Axios configuration
│   │   ├── App.js       # Main app component
│   │   └── index.js     # React entry point
│   └── package.json
└── README.md

```

## License

See the LICENSE file for details.

## Support

For issues or questions, please open an issue in the repository.