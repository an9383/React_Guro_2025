/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const data = {name:null, age:null, email:null, city:null}

const Form = () => {
    const [data, setData] = useState(data);

    const handleChange = () => {

    }

  return (
    <>
        <h2>정보입력</h2>
        <form>
            <label htmlFor='name'>이름</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label htmlFor='age'>이름</label>
            <input type="text" name="age" onChange={handleChange}/>
            <label htmlFor='email'>이메일</label>
            <input type="email" name="email" onChange={handleChange}/>
            <label htmlFor='city'>도시</label>
            <input type="text" name="city" onChange={handleChange}/>
            <button>제출</button>
        </form>
    </>
  )
}

export default Form