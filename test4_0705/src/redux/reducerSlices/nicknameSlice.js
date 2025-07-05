/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({ 
    name: 'nickname',
    initialState: {
        이름: '',
        별명: '',
    },
    reducers: {
        changeInput: (state, action) => {
            const {name, value} = action.payload
            state[name] = value;
        }
    },
});


export const {changeInput} = nicknameSlice.actions;

export default nicknameSlice.reducer;