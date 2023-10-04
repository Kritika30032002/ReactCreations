import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import axios from 'axios';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.withCredentials = true;

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />} > 
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
