import { useState } from 'react';
import './App.css';
import Count from './components/Count';


// const initialscore = {
//   이름:"John",
//   국어:80,
//   영어:90,
//   수학:100,
// }

function App() {
  // const [score, setScore] = useState(initialscore);
  // const handleClick = () => {
  //   setScore((prev) => ({...prev, 국어:100}))
  // }
  // const [number, setNumber] = useState(0);
  //const [string, setString] = useState("안녕하세요");

  const [data, setData] = useState("안녕하세요");

  return (
    <>
      <Count setData={setData} />
        <div>{data}</div>
    </>
  );
}

export default App;
