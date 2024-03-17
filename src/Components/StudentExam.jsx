import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import examData from './exams.json';

function StudentExam() {
    const location = useLocation();
    const { name, subject } = location.state;
    const exams = [
        {
          id: 1,
          name: "Series Test 1",
          subject: "Math",
        },
        {
          id: 2,
          name: "Series Test 2",
          subject: "Science",
        }
      ];

    return (
        <div>
            {name}:{subject}

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-8 mb-4">Exams</h1>
                <div className="flex flex-wrap justify-center">
                    {exams.map((exam) => (
                        <div key={exam.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{exam.name}</div>
                                <p className="text-gray-700 text-base">Subject: {exam.subject}</p>
                                <p className="text-gray-700 text-base">ID: {exam.id}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StudentExam;
