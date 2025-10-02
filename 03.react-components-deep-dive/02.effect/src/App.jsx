import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const [show, setShow] = useState(true);

  const buttonHandler = () => {
    setShow(prev => !prev);
  }

  return (
    <>
      <button onClick={buttonHandler}>{show ? 'Hide' : 'Show'} Input</button>

      {show && <Input />} 
    </>
  )
}

export default App
