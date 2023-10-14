import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage';
import ProtectedRoute from "./config/route/ProtectedRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/home"
                    element={<ProtectedRoute element={<HomePage />} />} // Use CustomRoute with element
                />
            </Routes>
        </Router>
    );
}

export default App;
