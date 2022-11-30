/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable indent */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import verifyService from './verifyEmailService';

const verifyUser = JSON.parse(sessionStorage.getItem('verify'));

const initialState = {
    verify: verifyUser ? verifyUser : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// Verify User
export const verify = createAsyncThunk('verify/user', async (verify, thunkAPI) => {
    try {
        return await verifyService.register(verify);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const verifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(verify.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verify.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(verify.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            });
    },
});

export const { reset } = verifySlice.actions;
export default verifySlice.reducer;
