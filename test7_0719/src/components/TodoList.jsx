/* eslint-disable no-unused-vars */
import React from 'react'
import TodoListItem from './TodoListItem'

const listStyle = {
  minHeight:"320px",
  maxHeight:"513px",
  overflow: "auto",
}

const todos = [1,2,3,4];

const TodoList = () => {
  return (
    <div style={listStyle}>
      {todos.map(todo => <TodoListItem key={todo} id={todo} />)}
      <TodoListItem />
    </div>
  )
}

export default TodoList