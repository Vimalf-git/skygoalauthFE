import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Home from './Home/Home'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Friend from './Frd/Friend'
import ForgotPass from './ForgotPassword/ForgotPass'
import ResetPassword from './ResetPassword/ResetPassword'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/forgotPass'} element={<ForgotPass/>}/>
          <Route path={'/resetpassword/*'} element={<ResetPassword/>}/>
          <Route path={'/userList'} element={
            <>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </>

          } />
          <Route path='/home' element={<>
          <ProtectedRoute>
            <Friend/>
          </ProtectedRoute>
          </>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
