
import { Route, Routes } from 'react-router';
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={
        <ProtectedRoutes>
          <Profile/>
        </ProtectedRoutes>
        }/>
    </Routes>
  )
}

export default App
