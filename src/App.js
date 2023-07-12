import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
function App() {
  return (
    <main>
    <Navbar name="Navigation" menu="About" text={{menu2:'services'}}/>
    <Login />
    </main>
  );
}

export default App;
