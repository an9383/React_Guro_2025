import './App.css'
import Todo2 from './components/Todo2'
import TodoProvider from './context/TodoContext'

// function App() {

//   return (
//     <>
//       <Todo/>
//     </>
//   )
// }

// export default App

function App() {

  return (
    <>
      <TodoProvider>
         <Todo2/> {/* children */}
      </TodoProvider>
      
    </>
  )
}

export default App

