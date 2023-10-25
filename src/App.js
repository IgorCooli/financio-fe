import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage';
import ProtectedRoute from "./config/route/ProtectedRoute";
import RegisterPage from "./components/registeruser/RegisterPage";
import RegisterCard from './components/cards/RegisterCard';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/home"
                    element={<ProtectedRoute element={<HomePage />} />} // Use CustomRoute with element />*/}
                    <Route path="/register-card" element={<RegisterCard />} />

                
            </Routes>
        </Router>
    );
}

export default App;
