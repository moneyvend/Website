/* eslint-disable indent */
import axios from 'axios';

// Register user

const verify = async (verifyData) => {
    const response = await axios.post('https://monievend.herokuapp.com/api/auth/verify-email', verifyData);

    if (response.data) {
        sessionStorage.setItem('verify', JSON.stringify(response.data));
    }
    return response.data;
};

const verifyService = {
    verify,
};

export default verifyService;
