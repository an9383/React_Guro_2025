import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    "fetchUsers",
    async ()=>{
        try{
            const response = await axios.get("http://localhost:3001/users")
            return response.data // action.payload
        }catch(error){
            return error //action.payload
        }
        
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        loading: false,
        data: [],
        error: null
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
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

export default userSlice.reducer;

