import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './Server.js'
import Vans from './pages/vans/Vans.jsx'
import VanDetail from './pages/vans/vanDetail.jsx'
import Layout from './components/layout.jsx'
import Dashboard from "./pages/host/Dashboard"
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVans from './pages/host/vans/HostVans.jsx'
import HostVansDetail from './pages/host/vans/HostVansDetail.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout/>}>
              <Route index element={<div className='Home'><Home /></div>} />
              <Route path='vans' element={<Vans/>}/>
              <Route path="about" element={<About />} />
              <Route path="vans/:id" element={<VanDetail/>}/>
              <Route path='/host' element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='income' element={<Income/>}/>
                    <Route path='vans' element={<HostVans/>}/>
                    <Route path='vans/:id' element={<HostVansDetail/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
              </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
     
 export default App
