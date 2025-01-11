import './App.css'
import { RouterProvider,createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './Server.js'
import Vans, {loader as vansLoader} from './pages/vans/Vans.jsx'
import VanDetail from './pages/vans/vanDetail.jsx'
import Layout from './components/layout.jsx'
import Dashboard from "./pages/host/Dashboard"
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostLayout from './components/HostLayout.jsx'
import HostVans from './pages/host/vans/HostVans.jsx'
import HostVansDetail from './pages/host/vans/HostVansDetail.jsx'
import HostVansPricing from './pages/host/vans/HostVansPricing.jsx'
import HostVansLayout from './components/HostVanLayout.jsx'
import HostVansPhotos from './pages/host/vans/HostVansPhotos.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
              <Route index element={<div className='Home'><Home /></div>} />
              <Route path='vans' element={<Vans/>} loader={vansLoader}/>
              <Route path="about" element={<About />} />
              <Route path="vans/:id" element={<VanDetail/>}/>
              <Route path='/host' element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path='income' element={<Income/>}/>
                    <Route path='vans' element={<HostVans/>}/>
                    <Route path='vans/:id' element={<HostVansLayout/>}>
                        <Route index element={<HostVansDetail/>}/>
                        <Route path='pricing' element={<HostVansPricing/>}/>
                        <Route path='photos' element={<HostVansPhotos/>}/>
                    </Route>
                    <Route path='reviews' element={<Reviews/>}/>
              </Route>
              <Route path="*" element={<NotFound/>}/>
        </Route>
))

function App() {

  return (
    <RouterProvider router={router}/>
  )
};
     
 export default App
