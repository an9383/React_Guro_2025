/* eslint-disable no-unused-vars */
import React from 'react'
const tStyle={
    borderCollapse: "collapse",
    width: "100%"
}

const cStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center"
}


const InfoTable = ({info}) => {
  return (
    <table style={tStyle}>
        <thead>
            <tr>
                {Object.keys(info).map(item=><th style={cStyle}>{item}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                {Object.values(info).map(item=><td style={cStyle}>{item}</td>)}
            </tr>
        </tbody>
        
    </table>
  )
}

export default InfoTable