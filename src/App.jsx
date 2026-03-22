// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
import Footer from "./components/Footer/Footer";




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h4 className='text-3xl bg-yellow-600'>React Router</h4>
      <Header />
    </>
  )
}

export default App
