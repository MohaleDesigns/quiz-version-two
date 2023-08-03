import { useState } from 'react'
import GetStarted from './components/GetStarted'
import Comprehension from './components/Comprehension'
import Quiz from './components/Quiz'

import QuizData from '../QuizData'

function App() {
  const [isGettingStarted, setIsGettingStarted] = useState(true)
  const [isComprehesion, setIsComprehesion] = useState(true)
  const [isNextPage, setIsNextPage] = useState(true)

  const toggleIsGettingStarted = () => {
    setIsGettingStarted(prevState => !prevState)
  }

  const toggleIsComprehesion = () => {
    setIsComprehesion(prevState => !prevState)
  }

  return (
    <div className='container mx-auto w-screen h-screen flex items-center justify-center'>
        {isGettingStarted ? (
          <GetStarted 
            toggleIsGettingStarted={toggleIsGettingStarted}
          />
        ) : (
          isComprehesion ? (
            <Comprehension
              toggleIsComprehesion={toggleIsComprehesion}
            />
          ) : (
            <Quiz 
              toggleIsComprehesion={toggleIsComprehesion}
              quizData={QuizData}
            />
          )
        )}
        
    </div>
  )
}

export default App
