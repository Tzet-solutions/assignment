import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Mark Twain"],
    answer: "Harper Lee"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
  };

  const handleSubmit = () => {
    const answeredCorrectly = userAnswers[currentQuestion] === questions[currentQuestion].answer;
    if (answeredCorrectly) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      // End of quiz
      alert(`Quiz completed! Your score: ${score}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Quiz App</h1>
      {currentQuestion < questions.length ? (
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-2">{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`${index}`}
                  name="answer"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                <label htmlFor={`${index}`} className="ml-2">{option}</label>
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Quiz;
