import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'


const Home = () => <h1>Página de Inicio</h1>

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/tienda' element={<Home />} />
                    <Route path='/tutoriales' element={<Home />} />
                    <Route path='/menu-tienda' element={<Home />} />
                    <Route path='/trabaja-en-tdc' element={<Home />} />
                    <Route path='/franquicias' element={<Home />} />
                    <Route path='/contacto' element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App