import React from 'react'
import Question from '../data/questions.js'
import Option from './Option.jsx'

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestion,
  selected,
  onSelect,
  onNext
}) => {
  return (
    <div className='w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg'>
      <p className='text-2xl font-bold mb-6'>
        {question.question}
      </p>

      <div>
        {question.options.map((option, index) => (
          <Option key={index}
          option={option}
          selected={selected}
          onSelect={onSelect}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!selected}
        className='mt-4 w-full bg-blue-600 text-white py-3 rounded-lg
        disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700'>
          Next

      </button>

    </div>
  )
}

export default QuizQuestion
