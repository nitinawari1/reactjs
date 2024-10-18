import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn.jsx'
import { ThemeProvider } from './contexts/Theme'


function App() {

  const [ThemeMode , setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }
  useEffect(() => {
    let html = document.querySelector('html')
    html.classList.remove("light" , "dark")
    html.classList.add(ThemeMode);
  }, [ThemeMode])
  

  return (
    <>
    
      <ThemeProvider value={{ThemeMode , lightTheme , darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-800">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="  w-full max-w-sm mx-auto">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
