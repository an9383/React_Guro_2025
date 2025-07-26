/* eslint-disable no-unused-vars */
import React from 'react'
import EmployeeList from './employeeList'

const initialState = [
    {name:"John", age: 30, job: "frontend",language:"react",pay:400},
    {name:"Peter", age: 28, job: "backend",language:"java",pay:300},
    {name:"Sue", age: 35, job: "publisher",language:"javascript",pay:400},
    {name:"Susan", age: 30, job: "pm",language:"python",pay:500},
]



const Main = () => {
    const [infos, setInfos] = React.useState(initialState)
  return (
    <div>
        <EmployeeList infos={infos} setInfos={setInfos} />  {/* passing the state to the EmployeeList component */}
    </div>
  )
}

export default Main