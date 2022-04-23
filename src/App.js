import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Account from './pages/account';
import SignUp from './pages/signup';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;