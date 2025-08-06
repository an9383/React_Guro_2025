import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPostUsers = createAsyncThunk(
    "fetchPostUsers",
    async (object)=>{
        try{
            const response = await axios.post("http://localhost:3001/users", object)
            return response.data // action.payload
        }catch(error){
            return error //action.payload
        }
        
    }
)

const userPostSlice = createSlice({
    name: "userPostSlice",
    initialState: {
        loading: false,
        data: [],
        error: null
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostUsers.pending, (state) => {
                state.loading = true;
                })
            .addCase(fetchPostUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                })
            .addCase(fetchPostUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Something went wrong';
                });
    },
});

export default userPostSlice.reducer;

