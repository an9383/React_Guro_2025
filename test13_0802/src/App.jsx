import { useEffect, useMemo, useState } from 'react'
import './App.css'
import ProductDisplay from './components/ProductDisplay';
import UserInfo from './components/UserInfo';
import MyComponent from './components/MyComponent';
import FocusInput from './components/FocusInput';
import Timer from './components/Timer';
import ValueTracker from './components/ValueTracker';

const initialStateUser = {
  name:'김철수',
  age: 30,
  count: 0,
}

function App() {
  const [text, setText] =useState();
  const [user, setUser] = useState(initialStateUser);
  const [toggle, setToggle] = useState(false);
  const [myValue, setMyValue] = useState(0);

  const items = useMemo(()=>[
    {id: 1, name: '사과'},
    {id:2, name: '바나나'},
    {id:3, name: '딸기'}
  ], [])


  const memorizedUser = useMemo(()=>({name: user.name, age: user.age})
   ,[user])

   useEffect(()=>{
    console.log(user.count)
   }, [user])
   

  return (
    <>
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <ProductDisplay products={items} filterText={text}/>
    </div>
    <div>
      <input type="text" value={user.name} onChange={e=>setUser(prev=>({...prev, name:e.target.value}))}/>
      <input type="number" value={user.age} onChange={e=>setUser(prev=>({...prev, age: e.target.value}))}/>
      <button onClick={()=>setUser(prev=>({...prev, count: prev.count+1}))}>카운트</button>
      <UserInfo user={memorizedUser}/>
    </div>
    <div>
      <button onClick={()=>setToggle(prev=>!prev)}>토글</button>
      {toggle && <MyComponent/>}
    </div>
    <div>
      <FocusInput/>
    </div>
    <div>
      <Timer/>
    </div>
    <div>
      <button onClick={()=>setMyValue(myValue+1)}>값 증가</button>
      <ValueTracker value={myValue}/>
    </div>
    
      
    </>
  )
}

export default App
