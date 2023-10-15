import axios from 'axios';

export const register = async (userData) => {
    try {
        const response = await axios.post(
            'https://financio-be-b0c1d25807f0.herokuapp.com/register',
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.status !== 201) {
            // Handle the error here, such as throwing an exception or returning an error object
            throw new Error('Registration failed');
        }
    } catch (error) {
        // Handle network errors, request errors, or other issues
        throw error;
    }
};
