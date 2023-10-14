import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import HomePage from './components/home/HomePage';

function App() {
    return (
        <Router>
            <Routes> {/* Use Routes here */}
                <Route path="/home" element={<HomePage />} /> {/* Use element instead of component */}
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
