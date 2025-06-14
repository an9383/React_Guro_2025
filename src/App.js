import { useState } from 'react';
import './App.css';

const initialscore = {
  이름:"John",
  국어:80,
  영어:90,
  수학:100,
}

function App() {
  const [score, setScore] = useState(initialscore);
  const handleClick = () => {
    setScore((prev) => ({...prev, 국어:100}))
  }

  return (
    <div className="App">
      <div>{score.이름}</div>
      <div>{score.국어}</div>
      <div>{score.영어}</div>
      <div>{score.수학}</div>
      <button onClick={handleClick}>수정</button>
    </div>
  );
}

export default App;
