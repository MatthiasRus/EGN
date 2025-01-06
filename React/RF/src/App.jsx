import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import './Server.js'
import Vans from './components/Vans.jsx'
import VanDefault from './components/vanDefault.jsx'

function App() {

  // const router = [
  //   {
  //     path : '/',
  //     element : <App/>
  //   },

  //   {
  //     path : '/about',
  //     element : <About/>
  //   },

  //   {
  //     path : '/vans',
  //     element : <Vans/>
  //   }
  // ]
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/vans' element={<Vans/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/vans/:id" element={<VanDefault/>}/>
      </Routes>
    </BrowserRouter>
  )
};
     
 export default App
