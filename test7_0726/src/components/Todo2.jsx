/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useRef, useTodo } from 'react'
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



const Todo2 = () => {
    const {todos,handleInsert, handleDelete, handleToggle} = useTodo();

  return (
    <div style={todoStyle}>
        <TodoTemplate>
            <TodoInsert
                handleInsert={handleInsert}
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

export default Todo2