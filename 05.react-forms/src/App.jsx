import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm.JSX'
import UnifiedControlledForm from './components/UnifiedControlledForm'


function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UnifiedControlledForm />
    </>
  )
}

export default App
