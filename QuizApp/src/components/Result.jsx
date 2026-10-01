import React from 'react'

const Result = ({
    score, totalQuestion, onRestart
}) => {
  return (
    <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg text-center'>
        <h1 className='text-3xl font-bold mb-6'>Quiz Completed!</h1>

        <p className='text-xl mb-2'>
            Your Score
        </p>

        <p className='text-4xl font-bold text-blue-600 mb-6'>
            {score} / {totalQuestion}
        </p>

        <button onClick={onRestart}
        className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700'>
            Restart Quiz
        </button>
      
    </div>
  )
}

export default Result
