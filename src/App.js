import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Account from './pages/account';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Register from './pages/register';
import SignUp from './pages/signup';
import Movie1 from './pages/movie1-1'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/register' element={<Register />} />
        <Route path='/movie1-1' element={<Movie1 />} />
      </Routes>
    </Router>
  );
}

export default App;