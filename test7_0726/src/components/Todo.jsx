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


const Todo = () => {

  return (
    <div style={todoStyle}>
        <TodoTemplate>
            <TodoInsert/>
            <TodoList/>
        </TodoTemplate>
    </div>
  )
}

export default Todo;