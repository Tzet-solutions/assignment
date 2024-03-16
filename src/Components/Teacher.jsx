import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classroomsData from './classrooms.json';
import * as XLSX from 'xlsx';

const Teacher = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [classrooms, setClassrooms] = useState([]);
  const [formData, setFormData] = useState({ className: '', subject: '', studentsFile: null });
  const [extractedStudents, setExtractedStudents] = useState([]);

  useEffect(() => {
    setClassrooms(classroomsData);
  }, []);

  const handleCreateClassroom = () => {
    setShowComponent(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]:files?files[0]:value });
  };

  const handleFileUpload = () => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Assuming the first row contains headers (Student Name, Roll Number)
      const headers = excelData[0];
      const studentRows = excelData.slice(1);
      const students = studentRows.map(row => ({
        name: row[0],
        rollNumber: row[1]
      }));
      setExtractedStudents(students);
    };
    reader.readAsBinaryString(formData.studentsFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFileUpload();
    const newClassroomId = classrooms.length + 1;
    const newClassroom = {
      id: newClassroomId,
      name: formData.className,
      subject: formData.subject,
      students: extractedStudents,
      showMore: false
    };
    setClassrooms([...classrooms, newClassroom]);
    setShowComponent(false);
    setFormData({ className: '', subject: '', studentsFile: null });
    setExtractedStudents([]); // Clear extractedStudents after submission
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Teacher Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {classrooms.map(classroom => (
          <Link key={classroom.id} to="/classroom" state={{ classname: classroom.name, subject: classroom.subject }}>
            <div className="bg-white rounded-lg shadow-md p-6">
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
                <label htmlFor="studentsFile" className="block text-gray-700 font-bold mb-2">Students (Upload .xlsx file):</label>
                <input type="file" id="studentsFile" name="studentsFile" onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
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
      {extractedStudents.length > 0 &&
        <div className="mt-4">
          <h2>Extracted Students:</h2>
          <ul>
            {extractedStudents.map((student, index) => (
              <li key={index}>{student.name} - {student.rollNumber}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Teacher;
