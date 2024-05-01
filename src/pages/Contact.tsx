import './../style/contact.css';
import { FcOrganization } from 'react-icons/fc';

const Contact = () => {
  return (
    <div id="contact" className='px-10 lg:px-64 py-20 text-start items-center flex flex-col text-white gap-5'>
      <h1 className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Contact</h1>
      <div className='w-full flex flex-col lg:flex-row justify-between items-center relative'>
        <ul className='adress list-none flex flex-col w-full'>
          <li className='mb-10 float-left'>
            <div className='relative pl-28'>
              <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
                <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
              </span>
              <h3 className='text-[28px] font-semibold' >Address</h3>
              <p className='mt-2'>SF-1A,Niti khand-1, indrapuram <br />Ghaziyabad, <span className='text-green-500'>201014</span></p>
            </div>
          </li>
          <li className='mb-10 float-left'>
            <div className='relative pl-28'>
              <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
                <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
              </span>
              <h3 className='text-[28px] font-semibold' >Email</h3>
              <p className='mt-2'>Prashanttiwari.vns <span className='text-green-500'>@gmail.com</span></p>
            </div>
          </li>
          <li className='mb-10 float-left'>
            <div className='relative pl-28'>
              <span className='w-16 h-16 inline-block rounded-full bg-green-500 absolute left-0 top-0 z-1'>
                <FcOrganization className='w-9 h-9 absolute top-4 right-4 text-white' />
              </span>
              <h3 className='text-[28px] font-semibold' >Phone</h3>
              <p className='mt-2'>9818691629<span className='text-green-500'>.</span></p>
            </div>
          </li>
        </ul>
        <div className='form w-full'>
          <form action="" className='lg:ml-14 flex flex-col gap-3'>
            <div className='flex lg:flex-row gap-5 flex-col'>
              <input type="text" placeholder='enter your name' className='w-72 bg-background border-1 border-green-500 rounded-lg p-3 font-normal' />
              <input type="text" placeholder='enter your email' className='w-72 bg-background border-1 border-green-500 rounded-lg p-3 font-normal' />
            </div>
            <div className='flex lg:flex-row gap-5 flex-col'>
              <input type="text" placeholder='enter your Phone' className='w-72 bg-background border-1 border-green-500 rounded-lg p-3 font-normal' />
              <input type="text" placeholder='enter your subject' className='w-72 bg-background border-1 border-green-500 rounded-lg p-3 font-normal' />
            </div>
            <textarea name="" id="" cols={20} rows={8}  placeholder="Enter your message here" className='w-[290px] lg:w-[600px] bg-background border-1 border-green-500 rounded-lg p-3 font-normal'></textarea>
            <div className='flex mt-6 gap-2 justify-center'>
              <button className='neno-button border-2 border-green-500 rounded-lg py-3 px-8 uppercase relative overflow-hidden bg-green-500'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
