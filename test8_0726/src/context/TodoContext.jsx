/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"

const TodoContext = createContext();

const initialTodos = [
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
            return [...state,  {...action.payload, id: Date.now()}]
        },
        handleDelete(state, action) {
            return state=>state.filter(todo=>todo.id!==action.payload)
            },
        handleToggle(state, action) {
            return state=>state.map(todo=>todo.id===action.payload? {...todo, checked:!todo.checked} : todo)
        }
    }

})

export const { handleInsert, handleDelete, handleToggle } = todoSlice.actions
export default todoSlice.reducer

