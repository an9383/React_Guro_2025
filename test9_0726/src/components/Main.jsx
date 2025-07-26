/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import EmployeeList from './employeeList'


const initialState = [
    {name:"John", age: 30, job: "frontend",language:"react",pay:400},
    {name:"Peter", age: 28, job: "backend",language:"java",pay:300},
    {name:"Sue", age: 35, job: "publisher",language:"javascript",pay:400},
    {name:"Susan", age: 30, job: "pm",language:"python",pay:500},
]



const Main = () => {
    const [infos, setInfos] = useState(initialState)
  return (
    <div style={{width:"100%"}}>
        <EmployeeList infos={infos} setInfos={setInfos} />  
    </div>
  )
}

export default Main