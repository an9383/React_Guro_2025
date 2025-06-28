import React from 'react'

function Counter(number) {
  return (
    <div>{number}</div>
    <button onClick={()=>dispatchEvent({type:"INCREASE"})}>+</button>
    <button onClick={()=>dispatchEvent({type:"DECREASE"})}>-</button>
  )
}

export default Counter