import bannerImage from './../assets/prashanttiwari.jpg';
import './../style/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="about" className='px-10 lg:px-64 py-20 text-center lg:text-start flex justify-between items-center gap-4 lg:gap-20 lg:flex-row flex-col-reverse'>
      <img src={bannerImage} alt="banner" className='border-2 p-1 border-green-500 h-[480px] img_glow' data-aos="fade-down" data-aos-duration="1000"/>
      <div className='text-white h-full lg:py-40 flex flex-col justify-normal item-center lg:item-start ' >
        <h1 className='text-[52px] font-semibold mb-8 leading-normal' data-aos="fade-left" data-aos-duration="1000">About Me</h1>
        <p className='lg:w-11/12' data-aos="fade-right" data-aos-duration="1000">Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          <br /> <br />
          Fast-forward to today, and I’ve had the privilege of working at an <span> advertising agency, a start-up, a huge corporation,</span> and a <span> student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React..</p>
        <div className='flex mt-6 gap-2 justify-center lg:justify-start' data-aos="fade-up" data-aos-duration="1000">
          <button className='neno-button border-2 border-green-500 rounded-lg py-3 px-8 uppercase relative overflow-hidden hover:bg-green-500'>Resume</button>
        </div>
      </div>
    </div>
  )
}

export default About