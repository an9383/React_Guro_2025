import React, { useEffect, useRef } from 'react'

const ValueTracker = ({value}) => {
    const preValueRef = useRef();
    useEffect(()=>{
        preValueRef.current = value;
    }, [value])
    const prevValue = preValueRef.current;
  return (
    <div>
        <p>현재 값: {value}</p>
        <p>이전 값: {prevValue !== undefined ? prevValue: "없음"}</p>
        {value !== prevValue && prevValue !== undefined && (
            <p style={{color: 'blue'}}>값이 {prevValue}에서 {value}로 변경되었습니다.</p>
        )}
    </div>
  )
}

export default ValueTracker