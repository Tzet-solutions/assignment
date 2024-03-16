import React from 'react'
import { useState, useEffect } from 'react'; // Import useState and useEffect
import { useLocation} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import examData from './exams.json';

function ClassroomDetail() {
    const [showComponent, setShowComponent] = useState(false);
    const [exams, setExams] = useState([]);
    const [formData, setFormData] = useState({ examName: '', subject: '', students: [] });
    useEffect(() => {
        setExams(examData);
      }, []);
    
      const handleCreateExam = () => {
        setShowComponent(true);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newExamId = classrooms.length + 1;
        const newExam = {
          id: newExamId,
          name: formData.examName,
          subject: formData.subject,
          students: formData.students,
          showMore: false
        };
        setClassrooms([...exams, newExam]);
        setShowComponent(false);
        setFormData({ className: '', subject: '', students: [] });
    };
    const location = useLocation()
    
  const { classname,subject } = location.state
  return (
      <div>
  <div className="container mx-auto">
  <h1 className='text-3xl'>{classname}:{subject}</h1>
      <h1 className="text-2xl font-bold mb-4">Classroom Component</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
        {exams.map(exam => (
          <Link to="/exam" state={{ examname:exam.name,
            subject:exam.subject }}>
          <div key={exam.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">{exam.name}</h2>
            <p className="text-gray-600 mb-2">Type: {exam.subject}</p>
            <p className="text-gray-600">Number of Students: {exam.students.length}</p>
            {exam.showMore && (
              <div>
                {/* Additional details to show */}
              </div>
            )}
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleShowMore(exam.id)}
            >
              {exam.showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
          </Link>
        ))}
        
        {showComponent &&
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="examName" className="block text-gray-700 font-bold mb-2">Exam Name:</label>
                <input type="text" id="examName" name="examName" value={formData.examName} onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject:</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="students" className="block text-gray-700 font-bold mb-2">Students (Upload .csv file):</label>
                <input type="file" id="students" name="students" multiple onChange={handleChange} className="border border-gray-400 rounded px-3 py-2 w-full" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Exam</button>
            </form>
          </div>
        }
      </div>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCreateExam}
      >
        Create Exam
      </button>
    </div>

            

      </div>
      )
}

export default ClassroomDetail