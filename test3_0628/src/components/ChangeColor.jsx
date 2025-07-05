import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


const style ={
    width: "100px",
    height: "100px",
    backgroundColor: 'black',
    border: "1px solid black",
    color: "white",
}




const ChangeColor = () => {
    const state = useSelector(state=>state.color)
    const dispatch = useDispatch();
    // const [state, dispatch] = useReducer(colorReducer, initialState);
    // const handleClick = (param) => {
    //     param === "red" ? dispatch({type:"RED"}) : dispatch({type:"BLUE"})
    // }
    const handleClick = (param)=>{
        console.log("state", state)
        dispatch({type: param})
    }

  return (
    <>
        <div style={{...style, backgroundColor: state.color}}>안녕하세요!!!</div>
        <button onClick={()=>handleClick('red')}>red</button>
        <button onClick={()=>handleClick('blue')}>blue</button>
        
    </>
  )
}

export default ChangeColor;