import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm.JSX'
import UnifiedControlledForm from './components/UnifiedControlledForm'
import UseRef from './components/UseRef'


function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UnifiedControlledForm />
      <UseRef />
    </>
  )
}

export default App
