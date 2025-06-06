import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm/>} />
        <Route path='SignUp' element={<SignupForm/>} />
      </Routes>
    </>
  )
}

export default App
