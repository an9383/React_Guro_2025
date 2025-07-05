/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInput } from '../redux/reducerSlices/nicknameSlice'

const Nickname = () => {
    const { 이름, 별명 } = useSelector(state => state.nickname)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;

        dispatch(changeInput({ [e.target.name]: e.target.value }))
    }

  return (
    <>
      <div><input type="text" name="이름"  onChange={handleChange} /></div>
      <div><input type="text" name="별명"  onChange={handleChange} /></div>
      <div><b>이름:</b>{이름}</div>
      <div><b>이름:</b>{별명}</div>
    </>
  )
}

export default Nickname