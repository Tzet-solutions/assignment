import React from "react";
import { Link } from 'react-router-dom';



const Student = () => {
  const data = [
    {
      id: 1,
      name: "Classroom 1",
      subject: "Math",
    },
    {
      id: 2,
      name: "Classroom 2",
      subject: "Science",
    }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Enrolled Classrooms</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((classroom) => (
        <Link key={classroom.id} to='/studentexam' state={{name:classroom.name,subject:classroom.subject}}> 
           <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{classroom.name}</div>
        <p className="text-gray-700 text-base">{classroom.subject}</p>
      </div>
    </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Student;
