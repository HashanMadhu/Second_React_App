import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewOne from './Components/NewOne.jsx'
import Home from './Pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //install the Routing package

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
