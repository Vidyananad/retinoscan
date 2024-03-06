import {Routes, Route} from 'react-router-dom';
import Rotoscan from './components/rotoscanPage';
import Exam from './components/exam';
import AddExam from './components/addExam'
import Login from './components/login';
import './App.css';

function App() {
  return (
     <>
     <div className='App'>
       <Routes>
         <Route path="/" element={<Rotoscan/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/exam" element={<Exam/>}/>
         <Route path="/addexam" element={<AddExam/>}/>
       </Routes>
       </div>
     </>
  );
}

export default App;
