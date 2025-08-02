import React, { useMemo } from 'react'

const MyComponent = () => {
    const staticOptions = useMemo(()=>([
        {id: 1, label: '옵션A'},
        {id: 2, label: '옵션B'},
        {id: 3, label: '옵션C'},
    ]),[])
  return (
    <div>
        <h2>정적 옵션 목록</h2>
        <ul>
            {staticOptions.map(option=>(<li key={option.id}>{option.label}</li>))}
        </ul>
    </div>
  )
}

export default MyComponent