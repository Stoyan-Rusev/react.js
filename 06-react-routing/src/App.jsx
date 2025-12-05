import './App.css'

import { Routes } from 'react-router'
import { Route } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import Pricing from './components/Pricing'
import NotFound from './components/NotFound'
import Catalog from './components/Catalog'

function App() {
    return (
        <div className="bg-gray-900">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/pricing' element={<Pricing />}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
