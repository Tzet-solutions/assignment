import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Teacher from './Components/Teacher'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ClassroomDetail from './Components/ClassroomDetail'
import ExamDetails from './Components/ExamDetails'
import ExamPage from './Components/Exampage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
    <Routes>
    <Route
      exact
      path="/"
      element={<Teacher />}
                    />
                        <Route
      exact
      path="/classroom"
      element={<ClassroomDetail />}
                    />
                    <Route
      exact
      path="/exam"
      element={<ExamDetails />}
                    />
                    
    </Routes>
   </Router>
    </>
  )
}

export default App
