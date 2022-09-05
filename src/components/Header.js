import React from 'react'

const Header = () => {
  return (
    <div className='bg-sky-500 flex items-center justify-between h-16 w-full'   >
      <div className='ml-8'><h1 className=' tracking-wide suppixel-antialiased font font-mono font-bold text-2xl text-white hover:font-sarief'>Pagination</h1></div>
      <div className='flex justify-between items-center mr-8 w-[400px]'>
        <input className='font-semibold bg-violet-50 border-none text-violet-700 block w-[300px]  rounded-lg h-[30px] border-0' type="search" placeholder='Search Here...' ></input>
        <button className='bg-white px-5 rounded-lg py-2' >Search</button>
      </div>
    </div>
  )
}

export default Header
