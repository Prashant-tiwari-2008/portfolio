import './../style/header.css';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false)

  function toggleMobileMenu() {
    setisMenuOpen(!isMenuOpen)
  }


  const content = 
  <>
    <div data-aos="fade-down" className='lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-background transition'>
      <ul className='text-center text-xl p-20'>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer' >
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleMobileMenu}>About</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
          <Link to="experience" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleMobileMenu}>Experience</Link></li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
          <Link to="project" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleMobileMenu}>Project</Link></li>
        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer'>
          <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleMobileMenu}>Contact</Link></li>
        <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer'>
          <button className='text-center lg:text-start neno-button border text-green-500 border-white font-semibold rounded-lg py-2 px-6 uppercase relative overflow-hidden hover:bg-green-500 hover:text-white'>Resume</button>
        </li>
      </ul>
    </div>
  </>

  return (
    <nav className='sticky top-0 z-10'>
      <div className='h-10vh flex justify-between bg-background  text-white lg:py-5 lg:pl-64 lg:pr-32 py-4 px-4 border-b border-green-500 shadow-lg shadow-black'>
        <div className='flex items-center flex-1'>
          <span className='text-2xl lg:text-3xl font-bold text-green-500' data-aos="zoom-in" data-aos-duration="1000" >Prashant</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 justify-end items-center font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex items-center gap-8 mr-16 text-[18px]'>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
              </li>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1100" data-aos-delay="600">
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500} >About</Link></li>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1200" data-aos-delay="700">
                <Link to="experience" spy={true} smooth={true} offset={-50} duration={500} >Experience</Link></li>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1300" data-aos-delay="800">
                <Link to="project" spy={true} smooth={true} offset={-50} duration={500} >Project</Link></li>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1400" data-aos-delay="900">
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
              <li className='hover:text-green-500 transition border-b-2 border-slate-900 hover:border-green-500 cursor-pointer' data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1000">
                <button className='text-center lg:text-start neno-button border text-green-500 font-semibold border-white rounded-lg py-2 px-6 uppercase relative overflow-hidden hover:bg-green-500 hover:text-white'>Resume</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {isMenuOpen && content}
        </div>
        <button className='block sm:hidden transition' onClick={toggleMobileMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Header