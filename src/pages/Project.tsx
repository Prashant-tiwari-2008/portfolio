import './../style/project.css';
import banner from "./../assets/banner.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  img: string,
  name: string,
  detail: string,
  techstack: string[];
  githubUrl: string,
  liveUrl: string
}

var ProjectfakeData: Project[] = [
  {
    img: banner,
    name: 'SSO-SDK',
    detail: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm ',
    techstack: ['javaScript', 'css', 'vite', 'html'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    img: banner,
    name: 'SSO-SDK',
    detail: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm ',
    techstack: ['javaScript', 'css', 'vite', 'html'],
    githubUrl: '',
    liveUrl: '',
  },
  {
    img: banner,
    name: 'SSO-SDK',
    detail: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm ',
    techstack: ['javaScript', 'css', 'vite', 'html'],
    githubUrl: '',
    liveUrl: '',
  }
]

const Project = () => {
  return (
    <div id="project" className='px-10 lg:px-64 py-16 text-start items-center flex flex-col text-white gap-5'>
      <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Project</h1>
      <div className='w-full flex flex-col justify-start'>
        {ProjectfakeData && ProjectfakeData.map((project: Project, index: number) => {
          let isEven = index % 2 === 0 ? true : false;
          const itemAlign = isEven ? "text-end" : "text-start";
          const projectDetailClass = isEven ? "lg:right-24" : "lg:left-24";
          return (
            <div className='flex lg:flex-row flex-col items-center my-7 lg:my-20 lg:even:flex-row-reverse' key={index}>
              <img src={project.img} alt="poject" width={700} height={700} className='border-2 p-1 border-green-500 img_glow xm:w-full' data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" />
              <div className={`w-full flex flex-col items-center relative lg:-top-1 ${projectDetailClass}`} >
                <h3 className={`text-[16px] font-semibold text-green-500 w-full ${itemAlign}`} data-aos="fade-left" ata-aos-offset="300" data-aos-easing="ease-in-sine">Featured Project</h3>
                <h1 className={`text-[44px] font-semibold w-full mb-2 lg:mb-4  ${itemAlign}`} data-aos="fade-right" ata-aos-offset="300" data-aos-easing="ease-in-sine">{project.name}</h1>
                <div className='bg-slate-800 z-1' data-aos="fade-left" ata-aos-offset="300" data-aos-easing="ease-in-sine">
                  <p className='py-5 px-5'>{project.detail} </p>
                </div>
                <ul className={`flex flex-row gap-6 mt-5 text-white w-full  font-normal flex-wrap ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {project.techstack && project.techstack.map((tech: any) => {
                    return <li>{tech}</li>
                  })}
                </ul>
                <ul className={`flex flex-row gap-6 mt-5 text-white w-full  font-normal ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <li className='hover:text-green-500'><a href={project.liveUrl}><FaExternalLinkAlt /></a></li>
                </ul>
              </div>
            </div>)
        })}
      </div>
      <div className='flex mt-6 gap-2 justify-center lg:justify-start'>
        <button className='neno-button border-2 border-green-500 rounded-lg py-3 px-8 uppercase relative overflow-hidden hover:bg-green-500'>Load More</button>
      </div>
    </div>
  )
}

export default Project;