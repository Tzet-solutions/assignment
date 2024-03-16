import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classroomsData from './classrooms.json';

const Teacher = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [classrooms, setClassrooms] = useState([]);
  const [formData, setFormData] = useState({ className: '', subject: '', students: [] });

  useEffect(() => {
    setClassrooms(classroomsData);
  }, []);

  const handleCreateClassroom = () => {
    setShowComponent(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClassroomId = classrooms.length + 1;
    const newClassroom = {
      id: newClassroomId,
      name: formData.className,
      subject: formData.subject,
      students: formData.students,
      showMore: false
    };
    setClassrooms([...classrooms, newClassroom]);
    setShowComponent(false);
    setFormData({ className: '', subject: '', students: [] });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Teacher Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {classrooms.map(classroom => (
          <Link to="/classroom" state={{ classname:classroom.name,
            subject:classroom.subject }}>
          <div key={classroom.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">{classroom.name}</h2>
            <p className="text-gray-600 mb-2">Subject: {classroom.subject}</p>
            <p className="text-gray-600">Number of Students: {classroom.students.length}</p>
            {classroom.showMore && (
              <div>
                {/* Additional details to show */}
              </div>
            )}
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleShowMore(classroom.id)}
            >
              {classroom.showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
          </Link>
        ))}
        
        {showComponent &&
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="className" className="block text-gray-700 font-bold mb-2">Class Name:</label>
                <input type="text" id="className" name="className" value={formData.className} onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="students" className="block text-gray-700 font-bold mb-2">Students (Upload .csv file):</label>
                <input type="file" id="students" name="students" multiple onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Classroom</button>
            </form>
          </div>
        }
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCreateClassroom}
      >
        Create Classroom
      </button>
    </div>
  );
};

export default Teacher;
