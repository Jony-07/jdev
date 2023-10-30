import React from 'react'
import '../assets/css/global.css';

function Contact() {
  return (
    <div name="contact" className='w-full h-screen text-white cover'>
        <div className='flex flex-col p-4 justify-center
        max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-yellow-400'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/3687c161-f41b-4864-bdc9-5ba08fcc0b79" method='POST' className='flex flex-col w-full md:w-1/2 relative z-10'>
                    <input required type="text" name="name" id="name" 
                    placeholder='Enter your name' className='p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <input required type='email' name="email" id="email" 
                    placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <textarea required placeholder='Enter your message' name='message' rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white
                    focus:outline-none'>
                    </textarea>
                    <button className='text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300 '>
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
