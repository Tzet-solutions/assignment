import React, { useState } from 'react';
import Exam from './Exam';

const ExamPage = () => {
    const [questions, setQuestions] = useState([]);

    const handleQuestionAdd = (newQuestion) => {
        setQuestions([newQuestion, ...questions]);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Create Exam</h1>
            <Exam questions={questions} onQuestionAdd={handleQuestionAdd} />
        </div>
    );
};

export default ExamPage;
