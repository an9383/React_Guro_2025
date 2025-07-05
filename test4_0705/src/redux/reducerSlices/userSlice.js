/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
 "fetchUsers",

 async (_, thunkAPI) => {
   try {
     const response = await axios.get('http://localhost:3001/users');
     return response.data;
   } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
   }
 }
);

const usersSlice = createSlice({
    name: "userSlice",
    initialState: {
        loading: false,
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Something went wrong';
            });
    },
});
