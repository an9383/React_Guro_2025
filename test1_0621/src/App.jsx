import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import { useState } from 'react'


const App = () => {
  const [obj, setObj] = useState(null)
  const getData = (data) =>{
    // console.log(data)
    setObj(data);
  }
  
  return (
    <>
      <Form getData={getData}/><br/><br/>
      <Table obj={obj}/>     
    </>
  )
}

export default App;
