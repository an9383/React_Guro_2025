/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Tr from './Tr';
import { useEffect } from 'react';



const data = [
    {name: "john", age: 35, email: "john@example.com", city: "Seoul"},
   {name: "peter", age: 35, email: "peter@example.com", city: "Seoul"},
    {name: "sue", age: 35, email: "sue@example.com", city: "Seoul"},

]

const Table = ({obj}) => {
    const [infos, setInfos] = useState(data);
    // useEffect(()=>{

    //     const excute = () =>{
    //         setInfos(prev=>[...prev, obj])
    //     }
    //     excute();

    // }, [])
    
  return (
    <>
        <table border='1'>
            <thead>
                <tr>
                    {Object.keys(infos[0]).map(item=>(<th>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {infos.map(item => (<Tr item={item}/>))}
            </tbody>
                
        </table>
    </>
  )
}

export default Table