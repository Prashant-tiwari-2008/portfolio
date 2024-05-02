import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/configuration';
import { useEffect } from 'react';


const Home = () => {
  let userDetail = [];
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "testing"));
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log("data",data)
    } catch (error) {
      console.log("error", error)
    }
  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <div id="home" className='px-10 lg:px-64 py-28 lg:py-16   text-start flex lg:flex-row flex-col-reverse justify-between items-center '>
      <div className="w-full h-full lg:py-40 flex flex-col justify-normal lg:items-start items-center text-white">
        <p className='w-full text-[14px] lg:text-[20px] text-start font-medium text-green-500' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">hi, my name is</p>
        <h1 className='w-full text-[30px] lg:text-[72px] font-semibold leading-normal lg:-mb-8 lg:-mt-4' data-aos="fade-up" data-aos-duration="1250" data-aos-delay="1100">Prashant tiwari.</h1>
        <h1 className='w-full text-[30px] lg:text-[72px] font-semibold leading-normal text-gray-500' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1200">I build things for the web.</h1>
        <p className='w-full lg:w-[60%] font-normal text-[14px] lg:text-[18px] text-gray-500' data-aos="fade-up" data-aos-duration="1550" data-aos-delay="1300">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span className='text-green-500 font-medium'>HT Digital(Hindustan Times)</span> as SDE-2.</p>
        <div className='w-full flex items-start justify-start  mt-8 gap-2 space-x-' data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1400">
          <a href='https://github.com/Prashant-tiwari-2008' className='text-color hover:text-green-500 rounded-full glow p-2'>
            <AiFillGithub className='text-[28px]' />
          </a>
          <a href='https://www.linkedin.com/in/prashant-tiwari-7b054ba5/' className='text-color hover:text-green-500 rounded-full glow p-2'>
            <AiFillLinkedin className='text-[28px]' />
          </a>
          <a href='https://www.instagram.com/prashanttiwari.vns/' className='text-color hover:text-green-500 rounded-full glow p-2'>
            <AiFillInstagram className='text-[28px]' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home