/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable indent */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/signupSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
