import './App.css'
import ThemeProvider from './components/ThemeProvider'
import ThemeButton from './components/ThemeButton'

function App() {


  return (
    <>
      <ThemeProvider>
        <div style={{padding: "20px", display:"flex", flexDirection:"column", gap:"20px"}}>
          <h1>테마변경예제</h1>
          <ThemeButton />
          <ThemeParagraph />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
