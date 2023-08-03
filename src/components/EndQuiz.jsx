import React from 'react'
import Confetti from 'react-confetti'

const EndQuiz = ({ score, quizData, time, handleRefreshClick }) => {

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-white p-5 md:rounded md:py-20 md:w-3/5 md:h-auto md:shadow-lg'>
        <Confetti />
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-primary text-5xl font-bold text-center'>Your Results!</h1>
            <p className='max-w-sm text-primary text-lg font-normal text-center mb-10 mx-auto'>Thank you for taking the time to participate in this quiz.</p>
            <div className=' w-48 h-48 bg-primary flex flex-col items-center justify-center rounded-full shadow-lg'>
                {/* <h1 className='text-white text-3xl font-bold'>You Got</h1> */}
                <h1 className='text-secondary text-5xl font-bold'>{score}/{quizData.length}</h1>
                <h4 className='text-secondary text-2xl font-medium mt-2'>
                  <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
                  <span>{("0" + Math.floor((time / 100) % 60)).slice(-2)}:</span>
                  <span>{("0" + ((time / 10) % 10)).slice(-2)}</span>
                </h4>
            </div>
            <button
            className="bg-primary text-white font-medium mt-3 py-2 px-4 shadow-lg focus:outline-none focus:ring-0 rounded duration-300 hover:bg-secondary hover:text-primary md:text-base"
            onClick={handleRefreshClick}
          >
            Back to Home
          </button>
        </div>
    </div>
  )
}

export default EndQuiz