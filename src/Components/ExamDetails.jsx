import React, { useState } from 'react';
import Exam from './Exam';

function ExamDetails() {
    const [showComponent, setShowComponent] = useState(false);
    const [exams, setExams] = useState([]);
    const [formData, setFormData] = useState({ examName: '', subject: '', students: [] });
    const [questions, setQuestions] = useState([]);

    const handleCreateExam = () => {
        setShowComponent(true);
    };

    const handleQuestionAdd = (newQuestion) => {
        setQuestions([...questions, newQuestion]);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Exam Component</h1>
            <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCreateExam}
            >
                Create Exam
            </button>

            {showComponent && <Exam onQuestionAdd={handleQuestionAdd} questions={questions} />}
        </div>
    );
}

export default ExamDetails;
