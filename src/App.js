import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import Services from './components/Services';
import About from './components/About'
import HeroSection from './components/HeroSection';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<HeroSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<HeroSection />} />
             <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
};
export default App;