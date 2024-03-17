import React, { useState } from 'react';

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  }
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Quiz App</h1>
      {showResult ? (
        <div>
          <p className="text-xl">You scored {score} out of {questionsData.length}!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <p className="text-xl">Question {currentQuestion + 1} of {questionsData.length}</p>
          <h2 className="text-2xl font-semibold my-4">{questionsData[currentQuestion].question}</h2>
          <div>
            {questionsData[currentQuestion].options.map(option => (
              <div key={option} className="flex items-center my-2">
                <input type="radio" id={option} name="option" value={option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
                <label htmlFor={option} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={handleNextQuestion}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
