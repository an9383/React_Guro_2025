/* eslint-disable no-unused-vars */
import { useState , useMemo} from 'react'
import './App.css'
import ProductDisplay from './components/ProductDisplay'

function App() {
const [text,setText] = useState('')
const items = useMemo(() => [
  {id:1, name:'사고'},
  {id:2, name:'바나나'},
  {id:3, name:'딸기'}
],[])

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <ProductDisplay products={items} filterText={text} />
    </>
  )
}

export default App
