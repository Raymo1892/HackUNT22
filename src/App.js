import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> Stashed changes
import Home from './pages';
import About from './pages/about';
import Account from './pages/account';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
<<<<<<< Updated upstream
        <Route path='/account' element={<Account />} />
        <Route path='/sign-up' element={<SignUp />} />
=======
        <Route path='/register' element={<Register />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;