import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import powerbi from "../assets/powerbi.png";
import csharp from "../assets/csharp.png";
import kotlin from "../assets/kotlin.png";
import firebase from "../assets/firebase.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.png";
import java from "../assets/java.png";

function Experience() {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: php,
            title: 'PHP',
            style: 'shadow-blue-600'
        },
        {
            id: 7,
            src: laravel,
            title: 'Laravel',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-400'
        },
        {
            id: 10,
            src: powerbi,
            title: 'Power BI',
            style: 'shadow-yellow-500'
        },
        {
            id: 11,
            src: csharp,
            title: 'Csharp',
            style: 'shadow-purple-500'
        },
        {
            id: 12,
            src: kotlin,
            title: 'Kotlin',
            style: 'shadow-orange-500'
        },
        {
            id: 13,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id: 14,
            src: sql,
            title: 'SQL Server',
            style: 'shadow-red-500'
        },
        {
            id: 15,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-sky-500'
        },
        {
            id: 16,
            src: java,
            title: 'Java',
            style: 'shadow-orange-500'
        }
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800
    to-black w-full md:h-screen">
      <div className='max-w-screen-lg mx-auto p-4
      flex flex-col justify-center w-full h-full text-white'>
        
        <div>
            <p className='text-4xl font-bold border-b-4
            border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 
        gap-8 text-center py-8 px-12 sm:px-0'>

            {
                techs.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 p-2 rounded-lg ${style}`}>
                    <img src={src} alt='' 
                    className='w-20 mx-auto'/>
                 <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            
        </div>
      </div>
    </div>
  )
}

export default Experience
