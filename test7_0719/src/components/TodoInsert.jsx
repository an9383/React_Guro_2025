/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {MdAdd} from 'react-icons/md'
const formStyle ={
  display: "flex",
  background: "#495057",
}

const inputStyle ={
  background: "none"
  outline: "none",
  border: "none"
  padding: "0.5rem"
  fontSize:"1.125rem"
  lineHeight: '1.5',

}

const buttonStyle={
  outline:'none',
  border: "none",
  background: '#868e96',
  color:'white',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

}

const handleChange ={

}

const handleSubmit = React.useCallback(()=>{ {} }, [])


const TodoInsert = () => {
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} type="text" name="todo"  onChange={handleChange} placeholder="Add a new todo..." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert