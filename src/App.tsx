import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Tutoriales from './pages/Tutoriales'
import Nosotros from './pages/Nosotros'
import Trabaja from './pages/Trabaja'
import Franquicias from './pages/Franquicias'
import Contacto from './pages/Contacto'


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/productos' element={<Productos />} />
                    <Route path='/tutoriales' element={<Tutoriales />} />
                    <Route path='/nosotros' element={<Nosotros />} />
                    <Route path='/trabaja' element={<Trabaja />} />
                    <Route path='/franquicias' element={<Franquicias />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App