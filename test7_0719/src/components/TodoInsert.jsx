import React, { useCallback } from 'react'
import { MdAdd } from 'react-icons/md'

const formStyle = {
    display: "flex",
    background: "#495057",
}

const inputStyle = {
    background: "none",
    outline: 'none',
    border: 'none',
    padding: '0.5rem',
    fontSize: '1.125rem',
    lineHeight: '1.5',
    color: 'white',
    flex: 1,
}

const buttonStyle ={
    outline: 'none',
    border: 'none',
    background: "#868e96",
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.5rem',
    display: "flex",
    alignItems: "center",
    cursor: "pointer", 
    transition: "0.1s background ease-in"
}


const TodoInsert = () => {

    const handleChange = useCallback(() =>{

    }, [])
    const handleSubmit = useCallback(()=>{

    }, [])
  return (
    <form style={formStyle} onSubmit={handleSubmit}>
        <input 
            style={inputStyle}
            type="text" 
            name="todo" 
            onChange={handleChange} 
            placeholder='할 일을 입력하세요'
        />
        <button style={buttonStyle}>
            <MdAdd/>
        </button>
    </form>
  )
}

export default TodoInsert