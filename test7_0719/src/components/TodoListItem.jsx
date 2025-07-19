/* eslint-disable no-unused-vars */
import React from 'react'
import { MdCheckBox, MdCheckBoxOutLineblank, MdRemoveCircleOutLine} from 'react-icons'

const checkboxStyle = {
  cursor:"pointer",
  flex:1,
  display: "flex",
  alignItems: "center",
}

const textStyle={
  marginLeft:"0.5rem",
  flex:1,
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  borderBottom:"1px solid #ccc",
}

const removeStyle={
  display:"flex",
  alignItems:"center",
  fontSize: "1.5rem",
  color:"#ff6b6b",
}

const itemStyle = {
  padding:"1rem",
  display:"flex",
  alignItems:"center",
}

const TodoListItem = () => {
  return (
        <div>
            <div style={itemStyle}>
                <MdCheckBox style={{fotnSize:"1.5rem", color:"#339af0"}} />
            </div>
            <div style={textStyle}>
                javaScript study
            </div>
            <div style={removeStyle}>
                <MdRemoveCircleOutLine />
            </div>
        </div>
  )
}




export default TodoListItem