// authService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const authenticate = async (username, password) => {
    try {
        //const response = await axios.post('https://financio-be-b0c1d25807f0.herokuapp.com/auth', {
        const response = await axios.post('http://localhost:8080/auth', {
            username: username,
            password: password,
        });

        // Assuming the token is in the response data
        const token = response.headers.authorization;
        Cookies.set('x-token', token)
        // Do something with the token, e.g., save it in a cookie or state
        return token;
    } catch (error) {
        // Handle authentication errors
        throw error;
    }
};

const logout = () => {
    // Logout logic
};

const getToken = () => {
    return Cookies.get('x-token');
};

export { authenticate, logout, getToken };
