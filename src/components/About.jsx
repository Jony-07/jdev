import React from 'react'

function About() {
  return (
    <div name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black
    text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold
                inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deserunt ab quasi in inventore corporis hic architecto 
                provident vitae labore earum commodi numquam, explicabo 
                vel aliquid delectus facere corrupti id illo.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae porro similique veritatis, totam mollitia voluptate 
                praesentium dolores nihil cum amet molestias doloremque, 
                corrupti velit fugit, consectetur dolorum quod dolore modi 
                tempore nostrum! Nihil, debitis tempora corrupti nemo 
                tempore dolore, laborum officia veniam consectetur molestias unde.
                Illum dolorum eum optio dicta!
            </p>
        </div>
        
    </div>
  )
}

export default About
