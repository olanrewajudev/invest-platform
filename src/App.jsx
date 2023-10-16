import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/General/Home'
import InvestPlan from './Pages/General/InvestPlan'
import Contact from './Pages/General/Contact'
import Team from './Pages/General/Team'
import Login from './Pages/Forms/Login'
import Register from './Pages/Forms/Register'
import Dashboard from './Pages/User/Dashboard'
import PageLoader from './Components/General/PageLoader'
import AdminHome from './Pages/Admin/AdminHome'
import UserRoute from './PrivateRoute/UserRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLoader> <Home /> </PageLoader>} />
        <Route path='/team' element={<PageLoader> <Team /> </PageLoader>} />
        <Route path='/plan' element={<PageLoader> <InvestPlan /> </PageLoader>} />
        <Route path='/contact' element={<PageLoader> <Contact /> </PageLoader>} />
        <Route path='/login' element={<PageLoader> <Login /> </PageLoader>} />
        <Route path='/register' element={<PageLoader> <Register /> </PageLoader>} />

        <Route path='/dashboard' element={<UserRoute> <Dashboard /> </UserRoute>} />

        {/* {admin routes} */}
        <Route path='/admin' element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
