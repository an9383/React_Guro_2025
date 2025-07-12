/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const login = createAsyncThunk(
    "login",
    async(obj, thunkAPI)=>{
        const response = await axios.get(`/사용자/?name={obj.username}`);
        const date = response.data;
        if(date.length ===0){
            return thunkAPI.rejectWithValue("사용자를 찾을 수 없습니다.")

        }
        const user = date[0];
        if(user.password!==obj.password){
            return thunkAPI.rejectWithValue("비밀번호가 틀렸습니다.")
        }
        return user;    
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'idle',
        user: null,
        error: null,
        isAuthenticated: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
           .addCase(login.pending, (state) => {
                state.status = 'loading';    
            })
           .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                state.user = action.payload;    //return에서 던져주는 값.
            })
           .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
})


export default authSlice.reducer;
