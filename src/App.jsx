import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/General/Home'
import InvestPlan from './Pages/General/InvestPlan'
import Contact from './Pages/General/Contact'
import Team from './Pages/General/Team'
import Login from './Pages/Forms/Login'
import Register from './Pages/Forms/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/plan' element={<InvestPlan />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
