import React, { useState, useEffect } from 'react'
import EndQuiz from './EndQuiz';
import { BiSolidChevronRightCircle, BiSolidChevronLeftCircle } from 'react-icons/bi';

const Quiz = ({ toggleIsComprehesion, quizData }) => {
    const [nextQuestionState, setNextQuestionState] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(0)

    const singlequizData = quizData[nextQuestionState]

    const nextQuestion = (isCorrect) => {
        if(isCorrect === true) {
          setScore(prevState => prevState + 1)
        }
    
        const nextQ = nextQuestionState + 1
        if(nextQ < quizData.length) {
          setNextQuestionState(nextQ)
        } else {
          setGameOver(true)
        }
      }

      useEffect(() => {
        let interval
        if(!gameOver) {
          interval = setInterval(() => {
            setTime(prevTime => prevTime + 10)
          }, 10);
          console.log("true")
        }
        else if(gameOver) {
          clearInterval(interval)
          console.log("false")
        }

        return () => clearInterval(interval)
      }, [gameOver])

      const handleRefreshClick = () => {
        window.location.reload();
      };

  return (
    <>
    {gameOver ? (
        <EndQuiz 
          score={score}
          quizData={quizData} 
          time={time}
          handleRefreshClick={handleRefreshClick}
        />
    ) : (
        <div className='w-screen h-screen bg-white p-5 md:rounded md:pb-3 md:w-3/5 md:h-auto md:shadow-lg'>
        <div className='flex flex-col gap-3'>
            <h4 className='bg-slate-200 text-primary text-xl font-semibold p-5 rounded'>
              Time: <span className='text-base font-medium'>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span className='text-base font-medium'>{("0" + Math.floor((time / 100) % 60)).slice(-2)}:</span>
            <span className='text-base font-medium'>{("0" + ((time / 10) % 10)).slice(-2)}</span>
            </h4>
            <h1 className='text-primary text-5xl font-bold text-center mt-14'>Good Luck!</h1>
            <p className='max-w-sm text-primary text-lg font-normal text-center mb-14 mx-auto'>Now! it's time for you to answer the follwing the questions</p>
            <h1 className='text-primary text-3xl font-bold mb-5'>
                Question <span className='text-secondary'>{nextQuestionState + 1}/{quizData.length}</span>
            </h1>
            <div className='mb-5'>
                <h4 className='text-primary text-xl font-medium mb-5'>{nextQuestionState + 1}. {singlequizData.question}</h4>
                <ul className='border-l-4 border-l-yellow-500 rounded pl-3'>
                {singlequizData.answer_options.map(answer => {
                    return (
                    <li 
                        className="text-primary/80 text-lg font-medium mb-2 py-1 px-3 rounded duration-500 hover:cursor-pointer hover:text-yellow-500 hover:bg-slate-100 hover:pl-2"
                        key={answer.id}
                        onClick={() => nextQuestion(answer.isCorrect)}
                    >
                        {answer.answer}
                    </li>
                    )
                })}
                </ul>
            </div>

            {/* <div className='absolute bottom-0 left-0 right-0 w-[95%] mx-auto my-5 flex gap-3 items-center justify-end border-t border-t-primary mt-12 md:relative py-2'>
                <BiSolidChevronLeftCircle 
                    className='text-primary duration-300 hover:text-yellow-500  hover:cursor-pointer'
                    size={45} 
                    onClick={toggleIsComprehesion}
                />
                <BiSolidChevronRightCircle 
                    className='text-primary duration-300 hover:text-yellow-500  hover:cursor-pointer'
                    size={45} 
                    // onClick={() => nextQuestion(answer.isCorrect)}
                />
            </div> */}

        </div>
    </div>
    )

    }
    </>
  )
}

export default Quiz