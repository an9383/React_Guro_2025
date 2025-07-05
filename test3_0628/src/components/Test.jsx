import React from 'react'
import { useSelector } from 'react-redux';

function Test() {
    const {color} = useSelector(state => state.color);
  return (
    <div>{color}</div>
  )
}

export default Test