import * as React from 'react'

// data

// markup
const NavBar = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-around bg-gray-50 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-gray-200 font-sans font-medium text-lg fixed right-0 left-0 px-10 h-14 w-screen'>
        <div className='flex-grow'/>
        <div className='flex flex-row justify-between w-3/5 text-black'>
          <a href='/' className='p-2'>Home</a>
          <a href='/' className='p-2'>Product</a>
          <a href='/' className='p-2'>Contact us</a>
        </div>
        <div className='flex-grow'/>
      </div>
    </>
  )
}

export default NavBar