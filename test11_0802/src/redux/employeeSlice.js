import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// 2. 초기 데이터 (예시)
const initialState = {
    infos: [
  { name: "John", age: 35, job: "frontend", language: "react", pay: 400 },
  { name: "Peter", age: 28, job: "backend", language: "java", pay: 300 },
  { name: "Sue", age: 38, job: "publisher", language: "javascript", pay: 400 },
  { name: "Susan", age: 45, job: "pm", language: "python", pay: 500 },
    ],
    upInfo:{},
    mode:'',
    name:''
};

const employeeSlice = createSlice({
    name:"employeeSlice",
    initialState,
    reducers:{
        handleSerchName:(state, action) =>{
            state.name = action.payload;
            state.upInfo = state.infos.filter(info=>info.name===action.payload)[0]
        },
        // handleAddEmployee:(state, action) =>{
        //     return {...state,
        //         name: action.payload,
        //         upInfo:action.infos.filter(info => info.name===action.payload)[0]
        //     }
        // }
        handleRegister:(state,action) => {
            state.infos = [...state.infos, action.payload];
            state.name = action.payload.name;
            state.upInfo = action.payload;
        },
        handleUpgrade : (state,action) => {
          state.infos = state.infos.map(info=>(info.name===action.payload.name? action.payload : info))
        },
        handleDelete: (state) => {
            state.infos = state.infos.filter(info=>info.name !== state.name);
            state.name = '';
            state.upInfo = {};
            state.mode = '';
        },
        changeMode: (state, action) => {
            state.mode = action.payload;
        },
        resetState: (state) => {
            state.infos = [...initialState.infos];
            state.name = '';
            state.upInfo = {};
            state.mode = '';
        }
}
}
);


export  const { handleDelete, handleSerchName, handleRegister, changeMode, resetState } = employeeSlice.actions;
export default employeeSlice.reducer;
