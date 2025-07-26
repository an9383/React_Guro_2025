import React, { useMemo, useState } from 'react'
import EmployeeList from './employeeList';
import { Link } from 'react-router-dom';
import Register from './Register';
import Upgrade from './Upgrade';

const initialState = [
    {name: "John", age: 35, job: "frontend", language: "react", pay: 400},
    {name: "Peter", age: 28, job: "backend", language: "java", pay: 300},
    {name: "Sue", age: 38, job: "publisher", language: "javascript", pay: 400},
    {name: "Susan", age: 45, job: "pm", language: "python", pay: 500},
]

const style ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
}


const Main = () => {
    const [infos, setInfos] = useState(initialState);
    const [upInfo, setUpInfo] = useState(null)
    const [mode, setMode] = useState('');
  
    const modes = useMemo(()=>[ "register", "upgrade", "delete", "초기화"], [])
    const handleSearchName = (n) =>{
          setUpInfo(infos.filter(info=>info.name===n)[0])
    } 
    const handleClick = (mod) =>{
        setMode(mod);
    }
    const handleRegister = (obj) =>{
      setInfos(prev=>([...prev, obj]))
    }
    const handleUpgrade = (obj) => {
      setInfos(prev=>prev.map(item => (item.name===obj.name ? obj: item)))
    }
  return (
    <>
      <div>
          <EmployeeList 
            infos={infos}
            handleSearchName = {handleSearchName}
          />
      </div>
      <div style={style}>
          {modes.map(mod=><Link 
                              to="/"
                              onClick={(e)=>{
                                e.preventDefault();
                                handleClick(mod)
                              }}
                            >
                              {mod}
                            </Link>
                    )
          }
      </div>
      <div>
        {mode === "register" ? <Register 
                                handleRegister={handleRegister}
                                /> 
                            : <Upgrade
                                upInfo={upInfo}
                                handleUpgrade={handleUpgrade}
                              />}
      </div>
    </>
  )
}

export default Main;