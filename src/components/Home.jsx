import React from 'react'
import JonyImage from "../assets/jony.png";
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from 'react-scroll';
import '../assets/css/global.css';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full  cover'>
      
      <div className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Junior Developer
          </h2>
          <p className='text-white py-4 max-w-md'>
           I am final year computer science engineering student. Currently, I'm looking for
           a first job to develop my skills.<p></p> 
           Also, I am open to learn new technologies.
          </p>

          <div >
            <Link to='portfolio'
            smooth={true}
            duration={500}
            className='group text-white w-fit px-6 py-4 my-2 flex 
            items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
            cursor-pointer relative z-10'>
              Portafolio
              <span className='group-hover:rotate-90 duration-300'>
              <MdKeyboardArrowRight size={25}
              className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={JonyImage} alt='jony profile'
          className='rounded-2xl mx-auto w-2/3 md:w-full relative z-10'/>
        </div>
      </div>
    </div>
  )
}

export default Home