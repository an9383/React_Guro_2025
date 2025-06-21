import React from 'react'

const style = {
    width: '100px',
    height:"100px",
    backgroundColor: 'black',
    border: "1px solid black",
}

const initialState = {color:'black'}

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return {...state,color: 'red' };
    case 'blue':
      return {...state, Color: 'blue' };
    default:
      throw state;
  }
}
const ChangeColor = () =>{
    const [color, setColor] = React.useState('black');
    const [textColor, setTextColor] = React.useState('white');
    const [state, dispatch] = React.useReducer(colorReducer, initialState);

    // const handleClick = (param) => {
    //     setColor(param);
    // }

    const handleClick = (param) => {
        dispatch({type: param})
    }
  return (
    <>
      {/* <div style={{...style, backgroundcolor:color, color: color}}>안녕하세요.!!!</div>
      <button onClick={() => handleClick("red")}>red</button>
      <button onClick={() => handleClick("green")}>Green</button>
      <button onClick={() => setTextColor("blue")}>text color</button> */}
      <div style={{...style, backgroundColor: state.color}}>안녕하세요.!!!</div>
      <button onClick={() => dispatch({type: 'red'})}>red</button>
      
    </>
  )
}

export default ChangeColor