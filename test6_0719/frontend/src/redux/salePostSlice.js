import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const salesPostAction = createAsyncThunk(
    "salesPostAction", 
    async (data, thunkAPI) => {
        try{
            const response = await axios.post("http://localhost:3001/판매", data);
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const salesPostSlice = createSlice({
    name: "salesPost",
    initialState: {
        data: null,
        status: 'idle',  // loading, success, failure
        error: null
    }, 
    reducers: {
        clearFunction(state){
            state.data = []
            state.status = 'idle'
            state.error = null
        },
    },
    extraReducers: (builder) =>{
        builder
            .addCase(salesPostAction.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(salesPostAction.fulfilled, (state, action) =>{
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(salesPostAction.rejected, (state, action)=>{
                state.status = "failure";
                state.error = action.payload
            })
    }
})

export const {clearFunction} = salesPostSlice.actions;
export default salesPostSlice.reducer