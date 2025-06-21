/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Tr from './Tr';

const data = [
    {name: "john", kor: 90, math: 89, eng: 95, sci: 100},
    {name: "john", kor: 90, math: 89, eng: 95, sci: 100},
    {name: "john", kor: 90, math: 89, eng: 95, sci: 100},
]

const Table = () => {
    const [scores, setScores] = useState(data);
  return (
    <>
        <table border='1'>
            <thead>
                <tr>
                    {Object.keys(scores[0]).map(item=>(<th>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {scores.map(item => (<Tr item={item}/>))}
            </tbody>
                
        </table>
    </>
  )
}

export default Table