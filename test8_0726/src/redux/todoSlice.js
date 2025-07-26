import { createSlice } from "@reduxjs/toolkit"



const initialState = [
    {id: 1, text: "리액트 공부", checked: true},
     {id: 2, text: "자바 공부", checked: false},
      {id: 3, text: "자바스크립트 공부", checked: true},
       {id: 4, text: "파이썬 공부", checked: false}
]


const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        handleInsert(state, action) {
            return [
                ...state,
                { ...action.payload, id: Date.now() }
            ];
        },

        handleDelete(state, action) {
            return state.filter(todo => todo.id !== action.payload); // 오타: "paylaod" → "payload"
        },

        handleToggle(state, action) {
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
            );
        }
    }
});

export const {handleDelete, handleInsert, handleToggle} = todoSlice.actions;

export default todoSlice.reducer;