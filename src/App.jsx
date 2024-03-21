import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Home from './Home/Home'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/home'} element={
            <>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </>

          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
