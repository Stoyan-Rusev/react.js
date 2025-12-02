import './App.css'

import { Routes } from 'react-router'
import { Route } from 'react-router'

import Header from './components/Header'
import Home from './components/Home'
import Pricing from './components/Pricing'

function App() {
    return (
        <div className="bg-gray-900">
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='pricing/' element={<Pricing />}/>
            </Routes>
        </div>
    )
}

export default App
