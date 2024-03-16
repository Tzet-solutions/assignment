import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

function ExamDetails() {
    const location = useLocation()
    
  const { examname,subject } = location.state
  return (
      <div>
        <h1 className='text-4xl'>Classroom Component</h1>
  <h1 className='text-3xl'>{examname}:{subject}</h1>


            

      </div>
      )
}

export default ExamDetails