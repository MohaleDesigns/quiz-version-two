import React from 'react'

const GetStarted = ({ toggleIsGettingStarted }) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-white p-5 md:rounded md:w-3/5 md:h-3/5 md:shadow-lg'>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <h1 className='text-primary text-5xl font-bold text-center mb-2'>Quizzical</h1>
            <p className='max-w-sm text-primary text-lg font-normal text-center mb-5'>Quiz yourself on how well you know Kabelo by taking this quiz.</p>
            <p className=' max-w-lg text-primary text-xl font-medium text-center mb-5'>To be able to answer the questions on this quiz, you will need to first read the comprehension.</p>
            <button 
                className='bg-primary text-white font-medium mt-3 py-2 px-4 shadow-lg outline-none ring-0 border-none rounded duration-300 hover:bg-secondary hover:text-primary md:text-base'
                onClick={toggleIsGettingStarted}
            >Get Started</button>
        </div>
    </div>
  )
}

export default GetStarted