import { useState } from 'react';

const Count = (props) =>{
  const [setData] = props;

  return(
    <>
      <button onClick={()=> setData("안녕히 가세요")}>버튼</button>
    </>
  )
}

export default Count