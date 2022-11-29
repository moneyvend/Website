/* eslint-disable indent */
import axios from 'axios';

// Register user

const register = async (userData) => {
    const response = await axios.post('https://monievend.herokuapp.com/api/auth/signup', userData);

    if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const authService = {
    register,
};

export default authService;
