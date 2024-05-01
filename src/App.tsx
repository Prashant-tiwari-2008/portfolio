// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Experience from './pages/Experience.tsx'
import About from './pages/About.tsx'
import Project from './pages/Project.tsx'
import Contact from './pages/Contact.tsx'
import Footer from  './pages/Footer.tsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  },[])
  
  return (
    <div className='bg-background h-100vh'>
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;