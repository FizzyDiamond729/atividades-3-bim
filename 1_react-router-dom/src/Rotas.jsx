import { Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Joao from './paginas/Joao'
import 

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/joao' element={<Joao />} />
            <Route path='' element={<App />} />
        </Routes>
    )
}

export default Rotas