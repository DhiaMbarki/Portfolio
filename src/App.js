import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'
import Logo from './components/Sidebar/Logo'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/Logo" element={<Logo />} />  
    
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
