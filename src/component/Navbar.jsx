import React from 'react'

const Navbar = () => {
  return (
         <nav className=' bg-slate-800 text-white fixed top-0 w-full z-10'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-10">
            <div className='logo font-bold text-2xl'>
              <span className='text-green-500'>&lt;</span>
             <span>Pass</span>
             <span className='text-green-500'>OP/&gt;</span> </div>
            
            <button className='text-white bg-green-600 rounded-lg flex justify-center items-center'>
              <img className='invert p-1 w-9' src="/github.svg" alt="github logo" />
              <span className='font-semibold mx-1'>Github</span>
            </button>
            </div>
         </nav>
  )
}

export default Navbar
