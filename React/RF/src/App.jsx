import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './Server.js'
import Vans from './components/Vans.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/vans' element={<Vans/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
};
     
 export default App
