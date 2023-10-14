// authService.js
import axios from 'axios';
import Cookies from 'js-cookie';

const authenticate = async (username, password) => {
    const response = await axios.post('https://financio-be-b0c1d25807f0.herokuapp.com/auth', {
        // const response = await axios.post('http://localhost:3000/auth', {
        username: username,
        password: password,
    });

    if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        Cookies.set("x-token", token, {expires: 3})
        return token;
    } else {
        throw new Error('Wrong credentials');
    }

};

const logout = () => {
    // Logout logic
};

const getToken = () => {
    return Cookies.get('x-token');
};

export {authenticate, logout, getToken};
