import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const {number } = useSelector(state => state.counter)
    const dispatch = useDispatch()
  return (
    <>
        <div>{number}</div>
        <button onClick={()=>dispatchEvent({type:"INCREASE"})}>+</button>
        <button onClick={()=>dispatchEvent({type:"DECREASE"})}>-</button>
    </>
  )
}

export default Counter