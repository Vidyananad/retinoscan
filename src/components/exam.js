import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import examImage from './no_data.svg'
import '../App.css';

const Exam = () => {


  return (
   <div className="exam">
    <nav className='navbar'>
      <FontAwesomeIcon icon={faBars} style={{color: "#fafcff",}} className='icon'/>
      <p style={{color: "#fafcff",}}>Exam</p>
      <Link to="/addexam"><FontAwesomeIcon icon={faPlus} className='icon' style={{color: "#fafafa",}} /></Link>
    </nav>
       <center>
        <div>
        <form>
         <div className='container'>
          <button className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#b5b7ba", }}/></button>
          <input type="search" placeholder=''/>
        </div>  
          <br/>
        <div className='exam-status'>
          <div className='achieved-cont'>
             <p className='achieved'>Achieved Exams</p>
             <p><span className='achieved'>&gt;</span></p>
          </div>
          <hr/>
          <p>Current Exams</p>
          <hr/>
        </div> 
        </form>   
          <div className='no-data'>
            <img src={examImage} className='pad' alt="pad"/> 
            <h3>No Exams Found</h3>
          </div>
        <p>You don't have any exams. Use the '+' icon<br/>to add an exam.</p>
        </div>
       </center>
   </div> 
   
  )
}

export default Exam