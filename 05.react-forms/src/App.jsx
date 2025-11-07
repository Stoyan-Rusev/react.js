import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm.JSX'
import UnifiedControlledForm from './components/UnifiedControlledForm'
import UseRef from './components/UseRef'
import UncontrolledFormRef from './components/UncontrolledFormRef'


function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UnifiedControlledForm />
      <UseRef />
      <UncontrolledFormRef />
    </>
  )
}

export default App
