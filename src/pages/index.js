import * as React from "react"
import NavBar from "./navbar.js"
import Footer from "./footer.js"

// markup
const IndexPage = () => {
  return (
    <div className='container flex flex-col'>
      <NavBar />
      <div className='main container flex flex-col'>
        <div className='w-screen h-14 bg-white'></div>
        <div className='w-screen mx-auto my-2 h-96 p-2 bg-gray-50'>
          <div className='container flex flex-col items-center justify-center py-5 mx-auto'>
            <h1 className='text-5xl font-semibold text-black my-2 text-center'>Product 1</h1>
            <h2 className='text-xl font-normal text-black my-2'>Product description</h2>
            <a href='/' className='text-xl font-light text-blue-600 cursor-pointer hover:underline'>
              Further More
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className='w-screen mx-auto my-2 h-96 p-2 bg-purple-50'>
          <div className='container flex flex-col items-center justify-center py-5 mx-auto'>
            <h1 className='text-5xl font-semibold text-black my-2'>Product 1</h1>
            <h2 className='text-xl font-normal text-black my-2'>Product description</h2>
            <a href='/' className='text-xl font-light text-blue-600 cursor-pointer hover:underline'>
              Further More
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className='w-screen mx-auto my-2 h-96 p-2 bg-yellow-50'>
          <div className='container flex flex-col items-center justify-center py-5 mx-auto'>
            <h1 className='text-5xl font-semibold text-black my-2'>Product 1</h1>
            <h2 className='text-xl font-normal text-black my-2'>Product description</h2>
            <a href='/' className='text-xl font-light text-blue-600 cursor-pointer hover:underline'>
              Further More
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className='w-screen mx-auto my-2 h-96 p-2 bg-green-50'>
          <div className='container flex flex-col items-center justify-center py-5 mx-auto'>
            <h1 className='text-5xl font-semibold text-black my-2'>Product 1</h1>
            <h2 className='text-xl font-normal text-black my-2'>Product description</h2>
            <a href='/' className='text-xl font-light text-blue-600 cursor-pointer hover:underline'>
              Further More
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
