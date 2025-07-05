/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({ 
    name: 'nickname',
    initialState: {
        name: '',
        nickname: '',
    },
    reducers: {
        changeInput: (state, action) => {
            action.payload, 
        },
    },
});