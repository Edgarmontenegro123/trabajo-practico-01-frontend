import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Tutoriales from './pages/Tutoriales'
import MenuTienda from './pages/MenuTienda'
import Trabaja from './pages/Trabaja.tsx'
import Franquicias from './pages/Trabaja.tsx'
import Contacto from './pages/Contacto'


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tienda' element={<Tienda />} />
                    <Route path='/tutoriales' element={<Tutoriales />} />
                    <Route path='/menu-tienda' element={<MenuTienda />} />
                    <Route path='/trabaja-en-tdc' element={<Trabaja />} />
                    <Route path='/franquicias' element={<Franquicias />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App