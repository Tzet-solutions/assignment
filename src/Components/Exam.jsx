import React, { useState } from 'react';

const Exam = ({ questions, onQuestionAdd }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleAddQuestion = () => {
        // Check if question and options are not empty
        if (question.trim() === '' || options.some(option => option.trim() === '') || answer.trim() === '') {
            alert('Please fill in all fields for the question.');
            return;
        }

        // Construct the question object
        const newQuestion = {
            question: question,
            options: options,
            answer: answer
        };

        // Pass the new question to the parent component
        onQuestionAdd(newQuestion);

        // Reset the state for next question
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-lg font-semibold mb-2">Add MCQ Question</h2>
            <div className="mb-4">
                <label htmlFor="mcqQuestion" className="block text-gray-700 font-bold mb-2">Question:</label>
                <input type="text" id="mcqQuestion" value={question} onChange={e => setQuestion(e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            {options.map((option, index) => (
                <div key={index} className="mb-2">
                    <label htmlFor={`mcqOption${index + 1}`} className="block text-gray-700 font-bold mb-2">Option {index + 1}:</label>
                    <input type="text" id={`mcqOption${index + 1}`} value={option} onChange={e => handleOptionChange(index, e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-full" />
                </div>
            ))}
            <div className="mb-4">
                <label htmlFor="mcqAnswer" className="block text-gray-700 font-bold mb-2">Correct Answer:</label>
                <input type="text" id="mcqAnswer" value={answer} onChange={e => setAnswer(e.target.value)} className="border border-gray-400 rounded px-3 py-2 w-full" />
            </div>
            <button onClick={handleAddQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Question</button>

            {/* Display newly added questions */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Newly Added Questions:</h2>
                <ul>
                    {questions.map((q, index) => (
                        <li key={index}>
                            <p>{index + 1}. {q.question}</p>
                            <ul>
                                {q.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>Option {optionIndex + 1}: {option}</li>
                                ))}
                            </ul>
                            <p>Correct Answer: {q.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Exam;
