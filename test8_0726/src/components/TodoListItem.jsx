import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import { handleDelete, handleToggle } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const checkboxStyle = {
    cursor: "pointer",
    flex: 1,
    display: "flex",
    alignItems: "center"
}

const textStyle={
    marginLeft: "0.5rem",
    flex: 1
}

const removeStyle = {
    display: 'flex',
    alignItems: "center",
    fontSize: '1.5rem',
    color: "#ff6b6b",
    cursor: "pointer"
}

const itemStyle = {
    padding: "1rem",
    display: "flex",
    alignItems:"center"
}


const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
  return (
    <div style={itemStyle}>
        <div style={checkboxStyle} onClick={()=>dispatch(handleToggle(todo.id))}>
            {todo.checked ? 
            (<MdCheckBox style={{fontSize:"1.5rem", color: "#339af0"}}/>)
            :(<MdCheckBoxOutlineBlank style={{fontSize:"1.5rem", color: "#495057"}}/>)
        }
            
        </div>
        <div style={{...textStyle,
            textDecoration: todo.checked ? 'line-through': 'none',
            color: todo.checked ? "#adb5bd": "#495057",
        }}>
            {todo.text}
        </div>
        <div style={removeStyle} onClick={()=>dispatch(handleDelete(todo.id))}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
  )
}

export default TodoListItem;