import React from 'react'
import TodoList from './TodoList'
import TodoInsert from './TodoInsert'


const Todo = () => {
  return (
    <div>
        <TodoInsert/>
        <TodoList/>
    </div>
  )
}

export default Todo