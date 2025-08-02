/* eslint-disable no-unused-vars */
import { useState , useMemo} from 'react'
import './App.css'
import ProductDisplay from './components/ProductDisplay'

const initialStateUser = {
  name:'김철수',
  age:30,
  count:0,  
}
function App() {
const [text,setText] = useState('')

const [user, setUser] = useState(initialStateUser);
 
const memorizedUser = useMemo(() => (
   {name: user.name, age:user.age},[user]));
   useEffect(() => {
     console.log('user changed', user);
   },[user]);


const items = useMemo(() => [
  {id:1, name:'사고'},
  {id:2, name:'바나나'},
  {id:3, name:'딸기'}
],[])

  return (
    <>
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ProductDisplay products={items} filterText={text} />
    </div>
    <div>
      <input type="text" value={user.name} onChange={e=>setUser(prev=>({...prev, name:e.target.value}))} />
      <input type="number" value={user.age} onChange={e=>setUser(prev=>({...prev, age:e.target.value}))} />
      <button onClick={()=>setUser(prev=>({...prev, count:prev.count+1}))}>카운트: {user.count}</button>
      <User user={memorizedUser} />
    </div>
      
    </>
  )
}

export default App
