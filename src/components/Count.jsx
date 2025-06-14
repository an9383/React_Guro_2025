import { useState } from 'react';

const Count = () =>{
  const [count, setCount] = useState(0);
  return(
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(prev => prev+1)}>button</button>
    </>
  )
}

export default Count