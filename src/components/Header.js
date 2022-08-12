import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4'>
        <img 
        className='w-52'
        src="https://static.wixstatic.com/media/219b92_9ee61fa0d05f423e9541ce59e4187452~mv2.png/v1/fill/w_253,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/219b92_9ee61fa0d05f423e9541ce59e4187452~mv2.png" 
        alt="liverton" />
        <div className='text-xl hover:underline cursor-pointer hover:text-blue-400 transition-all duration-200'>
            <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.liverton.com/">Liverton
            </a>
        </div>
    </div>
  )
}

export default Header