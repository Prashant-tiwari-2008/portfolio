
import './../style/experience.css'
import { FcOrganization } from 'react-icons/fc';


const Experience = () => {
  return (
    <div id="experience" className='px-10 lg:px-64 py-20 relative text-start flex flex-col items-center gap-5 text-white'>
      <h1 className='text-[52px] font-semibold relative mb-8 leading-normal uppercase'>Experience</h1>
      <ul className='relative list-none exercise-list'>
        <li className='mb-10 float-left lg:w-11/12'>
          <div className='inner_list relative pl-28'>
            <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
              <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
            </span>
            <div>
              <h3 className='text-[34px] font-semibold' data-aos="fade-right" ata-aos-offset="300" data-aos-easing="ease-in-sine">SDE-2 <span> @ </span>HT Digital</h3>
              <span>(2023-Present)</span>
            </div> 
               <ul className='list-disc pl-3 mt-2' data-aos="fade-left" ata-aos-offset="300" data-aos-easing="ease-in-sine">
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li>
              </ul>
            {/* </p> */}
          </div>
        </li>
        <li className='mb-10 float-left lg:w-11/12'>
          <div className='inner_list relative pl-28'>
            <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
              <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
            </span>
            <div>
              <h3 className='text-[34px] font-semibold' data-aos="fade-right" ata-aos-offset="300" data-aos-easing="ease-in-sine">Senior Software Developer <span> @ </span>Chetu India</h3>
              <span>(2021-2023)</span>
            </div>
            {/* <p className='pl-3 mt-2'> */}
               <ul className='list-disc pl-3 mt-2' data-aos="fade-left" ata-aos-offset="300" data-aos-easing="ease-in-sine" >
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li>
              </ul>
            {/* </p> */}
          </div>
        </li>
        <li className='mb-10 float-left lg:w-11/12'>
          <div className='inner_list relative pl-28'>
            <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
              <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
            </span>
            <div>
              <h3 className='text-[34px] font-semibold' data-aos="fade-right" ata-aos-offset="300" data-aos-easing="ease-in-sine" >Software Developer <span> @ </span>Technosphire</h3>
              <span>(2021-2021)</span>
            </div>
            {/* <p className='pl-3 mt-2'> */}
               <ul className='list-disc pl-3 mt-2' data-aos="fade-left" ata-aos-offset="300" data-aos-easing="ease-in-sine" >
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li> <br/>
                <li> Hello! My name is Prashant tiwari and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</li>
              </ul>
            {/* </p> */}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Experience