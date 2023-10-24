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
            <p className='text-xl mt-20 text-justify'>
                My name is Jony Morales and I'm twenty-two years old. I'm from
                El Salvador and currently, I'm final year computer science engineering student. <p></p>
                I have worked with some technologies during my time at the University, but in some I learned more than in others ones.
            </p>

            <br />

            <p className='text-xl text-justify'>
                I'm open to learn new technologies, but I have done my social hours as internships in web development.
                Also, I obtained certificates with ASP.net in udemy and Java Fundamentals in oracle. In addition, I took the TOELF exam and I scored B2 - 502 pts.
            </p>
        </div>
        
    </div>
  )
}

export default About
