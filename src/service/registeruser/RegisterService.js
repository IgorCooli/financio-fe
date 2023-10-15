export const register = async (userData) => {
    try {
        const response = await fetch('https://financio-be-b0c1d25807f0.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.status === 201) {
            // Handle the error here, such as throwing an exception or returning an error object
            throw new Error('Registration failed');
        }
    } catch (error) {
        // Handle network errors, request errors, or other issues
        throw error;
    }
};
