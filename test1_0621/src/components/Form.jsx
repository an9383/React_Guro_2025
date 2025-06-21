/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const initialData = {name: null, age: null, email: null, city: null}
const Form = ({getData}) => {
    const [obj, setObj] = useState(initialData);

    const handleChange = (event) => {
        // 2. event.target.value 오타 수정
        setObj((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!obj.name || !obj.email) {
        //     alert('이름과 이메일은 필수 항목입니다.');
        //     return;
        // }
        getData(obj);
        // 4. 제출 후 폼 상태를 초기화합니다.
        setObj(initialData);
    };
  return (
    <>
        <h2>정보입력</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label htmlFor='age'>나이</label>
            <input type="number" name="age" onChange={handleChange}/>
            <label htmlFor='email'>이메일</label>
            <input type="email" name="email" onChange={handleChange}/>
            <label htmlFor='city'>도시</label>
            <input type="text" name="city" onChange={handleChange}/>
            <button>제출</button>
        </form>
    </>
  )
}

export default Form;