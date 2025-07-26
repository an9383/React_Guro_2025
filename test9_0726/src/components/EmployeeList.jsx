/* eslint-disable no-undef */
import React,{useEffect} from 'react'
import {Link} from  'react-router-dom'

const EmployeeList = ({infos}) => {
  useEffect(() => {
        console.log(infos)
       }, [infos])
  return (
    <div>
        {infos.map(info=><a to="/" key={info.name}>{info.name}</a>)}
    </div>
  )
}

export default EmployeeList