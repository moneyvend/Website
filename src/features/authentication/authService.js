/* eslint-disable indent */
import axios from 'axios';

// Register user

const register = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, userData);

    if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const authService = {
    register,
};

export default authService;
