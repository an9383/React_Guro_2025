import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'


const listStyle = {
    minHeight: "320px",
    maxHeight: "513px",
    overflow: "auto"
}


const TodoList = () => {
  const todos = useSelector(state=>state.todoSlice.data)

  return (
    <div style={listStyle}>
        {todos.map(todo=>(
            <TodoListItem
                key={todo.id}
                todo={todo}
            />
        ))}
    </div>
  )
}

export default TodoList