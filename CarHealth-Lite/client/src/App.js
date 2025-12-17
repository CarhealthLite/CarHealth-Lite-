import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AISuggestions from "./pages/AISuggestions";

function App() {
  return (
    <Router>
      <div>
        <h1>CarHealth-Lite</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai" element={<AISuggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
