import React, { useState } from 'react'
import Question from './components/QuizQuestion'
import QuizQuestion from './components/QuizQuestion'
import questions from './data/questions'
import Result from './components/Result'

const App = () => {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)

  const handleSelect = (option) => {
    setSelected(option)
  }

  const handleNext = () => {
    const current = questions[currentQuestion]

    //check answer
    if(selected === current.answer){
      setScore(score + 1)
    }

    //check last question
    if(currentQuestion === questions.length - 1){
      setQuizCompleted(true)
      return;
    }

    //move to next question
    setCurrentQuestion(currentQuestion + 1)

    //reset
    setSelected(null)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelected(null)
    setScore(0)
    setQuizCompleted(false)
  }
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        {quizCompleted ? (
          <Result
            score={score}
            totalQuestion={questions.length}
            onRestart={handleRestart}/>
        ) : (
          <QuizQuestion 
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            selected={selected}
            onSelect={handleSelect}
            onNext={handleNext}/>
        )}
    </div>
  )
}

export default App
