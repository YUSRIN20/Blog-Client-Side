import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import Layout from './pages/Layout';
import Home from './pages/Home';
import './style.scss'
const App = () => {
  const location  = useLocation();
  const [loading,setLoading]  = useState(true)
  
  useEffect(() => {
    // Simulating loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  // console.log(isAuthPage)

  return (
    <div className={`app ${isAuthPage ? 'authApp': ''}`}>
      <div className={`container ${isAuthPage ? 'authContainer': ''}`}>
         {loading ?(
         <div class="spinner"></div>
         ):(
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='post/:id' element={<Single />} />
              <Route path='write' element={<Write />} />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        )}
      </div>
    </div>
  );
};



export default App;