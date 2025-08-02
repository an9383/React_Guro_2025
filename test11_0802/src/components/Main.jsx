/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useState } from 'react'
import EmployeeList from './employeeList';
import { Link } from 'react-router-dom';
import Register from './Register';
import Upgrade from './Upgrade';
import { useDispatch, useSelector } from'react-redux';
import { changeMode, resetState, handleDelete, handleSerchName } from '../redux/employeeSlice';

const style ={
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
}


const Main = () => {
    // const [infos, setInfos] = useState(initialState);
    // const [upInfo, setUpInfo] = useState(null)
    // const [mode, setMode] = useState('');
    // const [name, setName] = useState('')
  const dispatch = useDispatch();
  const {name, mode} = useSelector(state=>state.employee.name);

    const modes = [ "register", "upgrade", "delete", "초기화"]


    const handleClick = useCallback((mod) =>{
        if(mod === 'delete'){
          if(name){
            dispatch(handleDelete(name))
          }else{
            alert("직원을 선택해 주세요.")
          } 
        }else if(mod==='초기화'){
          dispatch(resetState())
        }else if(mod==='upgrade'){
          if(name){
            dispatch(changeMode(mod))
          }else{
            alert("직원을 선택해 주세요.")
          }
        }else{
          dispatch(changeMode(mod))

        }
        // setName(null)
    }, [name])


  
  return (
    <>
      <div>
          <EmployeeList 

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
        {mode === "register" && (
          <Register           />
        )}
        {mode === "upgrade" && (
          <Upgrade           />
        )}
      </div>
    </>
  )
}

export default Main;