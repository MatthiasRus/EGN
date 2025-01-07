import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './Server.js'
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/vanDetail.jsx'
import Layout from './components/layout.jsx'
import Host from './pages/Host.jsx'
import Reviews from "./pages/host/Reviews"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path='/vans' element={<Vans/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/vans/:id" element={<VanDetail/>}/>
              <Route path='/host' element={<Dashboard/>}/>
              <Route path='/host/income' element={<Income/>}/>
              <Route path='/host/reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
     
 export default App
