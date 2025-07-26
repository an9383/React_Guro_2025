/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import InfoTable from './InfoTable';

const style ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
}

const initialState = {
  name: null, 
  age: null, 
  job: null, 
  language: null, 
  pay: null
}


const EmployeeList = ({infos}) => {
  const [info, setInfo] = useState(initialState)
  const handleClick = (name) =>{
     setInfo(infos?.filter(info=>info.name===name)[0])

  }

  return (
    <>
      <div style={style}>
          {infos.map(info=><Link to="/" key={info.name} onClick={()=>handleClick(info.name)}> {info.name} </Link>)}
      </div>
      <InfoTable info={info}/>
    </>
    
  )
}
export default EmployeeList