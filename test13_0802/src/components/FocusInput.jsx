import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null);
    const handleFocusClick = () =>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    };
    const handleChangePlaceholder = () =>{
        if(inputRef.current){
            inputRef.current.placeholder = "새로운 플레이스홀더!";
        }
    }
    useEffect(()=>{
        console.log(inputRef.current)
    },[])

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='여기에 입력하세요.'/>
        <button onClick={handleFocusClick}>인풋에 포커스</button>
        <button onClick={handleChangePlaceholder}>플에이스홀더 변경</button>
    </div>
  )
}

export default FocusInput