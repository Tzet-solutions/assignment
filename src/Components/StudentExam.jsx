import React from 'react'
import { useLocation, Link } from 'react-router-dom';
function StudentExam() {
    const location = useLocation();
    const { name, subject } = location.state;
  return (
    <div>{name}:{subject}</div>
  )
}

export default StudentExam