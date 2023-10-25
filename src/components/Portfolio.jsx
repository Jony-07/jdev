import React from 'react'
import sumersa from '../assets/portfolio/sumersa.jpg';
import miopharma from '../assets/portfolio/miopharma.jpg';
import agv from '../assets/portfolio/agv.jpg';
import progressmind from '../assets/portfolio/progressmind.jpg';
import ooober from '../assets/portfolio/ooober.jpg';
import cr from '../assets/portfolio/cr.jpg';

function Portafolio() {

    const portafolios = [
        {
            id:1,
            src: sumersa,
            code:'https://github.com/Gissela25/LIS_PROYECTO',
            style: 'shadow-yellow-500'
        },
        {
            id:2,
            src: miopharma,
            code:'https://github.com/Gissela25/ProyectoDSE-mioPharma',
            style: 'shadow-sky-500'
        },
        {
            id:3,
            src: agv,
            code:'https://github.com/Gissela25/Agencia-viajes-dse',
            style: 'shadow-pink-500'
        },
        {
            id:4,
            src: progressmind,
            code:'https://github.com/Gissela25/Progress-mind',
            style: 'shadow-purple-500'
        },
        {
            id:5,
            src: ooober,
            code:'https://github.com/Gissela25/Ooober',
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: cr,
            code:'https://github.com/Gissela25/SS-SCS',
            style: 'shadow-red-500'
        },
    ];
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800
    text-white w-full md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>
                Portfolio
            </p>
            <p className='py-6'>
            Check out some of the projects I've worked on.
            </p>
        </div>
        <div className='relative z-10 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8
                px-12 sm:px-0'>
        {
            portafolios.map(({id, src,code,style})=>(
                
                    <div key={id} className={`shadow-md rounded-lg ${style}`}>
                        <img src={src} alt='' 
                        className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105'>Demo</button>
                            <a 
                            target="_blank"
                            rel="noreferrer"
                            href={code}
                            className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                    </div>
                
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portafolio
