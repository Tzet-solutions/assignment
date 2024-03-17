// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Teacher from './Components/Teacher';
import ClassroomDetail from './Components/ClassroomDetail';
import ExamDetails from './Components/ExamDetails';
import Student from './Components/Student';
import StudentExam from './Components/StudentExam';
import Quiz from './Components/Quiz';
import Navbar from './Components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check username and password
    if (
      (username === 'teacher' && password === 'teacher123') ||
      (username === 'student' && password === 'student123')
    ) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        {loggedIn && username === 'teacher' && <Route exact path="/" element={<Teacher />} />}
        {loggedIn && username === 'student' && <Route exact path="/" element={<Student />} />}
        <Route exact path="/classroom" element={<ClassroomDetail />} />
        <Route exact path="/exam" element={<ExamDetails />} />
        <Route exact path="/studentexam" element={<StudentExam />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
      {!loggedIn && (
        <div className="login-container flex flex-col justify-center items-center h-screen">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-64"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-64"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </Router>
  );
}

export default App;
