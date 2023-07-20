import { Component } from 'react';
import './css/App.css';
import './css/Theme.css';
import Header from './components/Header'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <main>
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='sidebar' element={<Sidebar />} />
        {/* <Route path='header' element={<Header />} /> */}
      </Routes>
    </main>
  );
}

export default App;
