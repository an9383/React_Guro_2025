/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useRef } from 'react'
import TodoList from './TodoList'
import TodoInsert from './TodoInsert'
import TodoTemplate from './TodoTemplate'

const todoStyle = {
    marginTop: "10rem",
    marginBottom: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const initialTodos = [
    {id: 1, text: "리액트 공부", checked: true},
     {id: 2, text: "자바 공부", checked: false},
      {id: 3, text: "자바스크립트 공부", checked: true},
       {id: 4, text: "파이썬 공부", checked: false}
]



const Todo = () => {
    const [todos, setTodos] = useState(initialTodos);
    // const nextId = useRef(Date.now());
    const nextId = useRef(initialTodos.length>0? 
        Math.max(...initialTodos.map(todo=>todo.id))+1: 1)

    const handleInsert = useCallback((obj)=>{
        setTodos(prev => [
            ...prev, {...obj, id:nextId.current}
        ]
        )
    }, [])

    const handleDelete = useCallback((id)=>{
        setTodos(prev => prev.filter(todo => todo.id!== id))
    },[todos])

    const handleToggle= useCallback((id)=>{
        setTodos(prev => prev.map(todo => todo.id === id? {...todo, checked:!todo.checked} : todo))
    },[todos])
  return (
    <div style={todoStyle}>
        <TodoTemplate>
            <TodoInsert
                handleInsert={handleInsert}
                nextId = {nextId}
            />
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        </TodoTemplate>
    </div>
  )
}

export default Todo