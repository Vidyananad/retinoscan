import '../App.css'
import {Link} from 'react-router-dom'

const AddExam = () =>{
  return(
    <>
    <div className="add-new-exam">
      <nav className='navbar2'>
       <Link to="/exam"><p style={{color: "#fafcff",}} className='less-than'>&lt;</p></Link>
        <p style={{color: "#fafcff",}} className='add-exam'>Add Exam</p>
      </nav>
      <form>
        <h4>Patient</h4>
         <input type="text" placeholder='MRN*'/><br/>
         <input type="text" placeholder='First Name*'/> <br/> 
         <input type="text" placeholder='Last name*'/>  <br/>
         <input type="text" placeholder='Date Of Birth*'/>  <br/>
         <input type="text" placeholder='Gender*'/> <br/>
         
        <h4>Exam Code</h4>
         <input type='text' placeholder='Exam Code'/>  
        <h4>Prescribing Doctor</h4> 
         <input type="textArea"/>  
         <button>Add</button>
      </form>    
      </div>
    </>
  )
}

export default AddExam;