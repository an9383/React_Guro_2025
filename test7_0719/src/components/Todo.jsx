import React from 'react'
import { MdCheckBox, MdCheckBoxOutLineblank, MdRemoveCircleOutLine} from 'react-icons'
import Todo from './Todo'
import TodoInsert from './TodoInsert'

const Todo = () => {
  return (
    <div>
        <TodoInsert />
        <TodoListItem />
    </div>
  )
}

export default Todo