import React from 'react'

const style = {
    width: '100px',
    height:"100px",
    backgroundColor: 'black',
    border: "1px solid black",
}
const ChangeColor = () =>{
    const [color, setColor] = React.useState('black');
    const [textColor, setTextColor] = React.useState('white');

    const handleClick = (param) => {
        setColor(param);
    }
  return (
    <>
      <div style={{...style, backgroundcolor:color, color: color}}>안녕하세요.!!!</div>
      <button onClick={() => handleClick("red")}>red</button>
      <button onClick={() => handleClick("green")}>Green</button>
      <button onClick={() => setTextColor("blue")}>text color</button>
      
    </>
  )
}

export default ChangeColor