import React from "react";

const ClassroomCard = ({ classroom }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{classroom.name}</div>
        <p className="text-gray-700 text-base">{classroom.subject}</p>
      </div>
    </div>
  );
};

const Student = () => {
  const data = [
    {
      id: 1,
      name: "Classroom 1",
      subject: "Math",
      students: [
        { name: "Student 1", rollNumber: 101 },
        { name: "Student 2", rollNumber: 102 }
      ]
    },
    {
      id: 2,
      name: "Classroom 2",
      subject: "Science",
      students: [
        { name: "Student 3", rollNumber: 103 },
        { name: "Student 4", rollNumber: 104 }
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Enrolled Classrooms</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((classroom) => (
          <ClassroomCard key={classroom.id} classroom={classroom} />
        ))}
      </div>
    </div>
  );
};

export default Student;
