import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../assets/css/global.css';

const NavBar = () => {

  const[nav, setNav] = useState(false);

  const links = [
    {   
        id:1,
        link:'home'
    },
    {   
        id:2,
        link:'about'
    },
    {   
        id:3,
        link:'portfolio'
    },
    {   
        id:4,
        link:'skills'
    },
    {
        id:5,
        link:'contact'
    }
  ]
    
  return (
    <div className='fixed z-30 flex justify-between items-center w-full h-20
    text-white  px-4 txt'>
    <div>
        <h1 className='text-5xl font-signature ml-2'>Jony <span >Dev</span> </h1>
    </div>
    <ul className='hidden md:flex'>

        {links.map(({id,link})=>(
        <li key={id} className='px-4 cursor-pointer capitalize
        font-medium text-white hover:scale-105 duration-200'>
              <Link 
            to={link} 
            smooth ={true}
            duration={500}>
                {link}
            </Link>
        </li>
        ))}     
    </ul>
    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
       {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
    </div>

    {nav && (
        <ul className='flex flex-col justify-center items-center absolute
    top-0 left-0 w-full h-screen coverMenu text-gray-500 '>
         {links.map(({id,link})=>(
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl  '>
            <Link
            onClick={() => setNav(!nav)} 
            to={link} 
            smooth ={true}
            duration={500}>
                {link}
            </Link>
        </li>
        ))}   
    </ul>
    ) }
    </div>
  )
}

export default NavBar