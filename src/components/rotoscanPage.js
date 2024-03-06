import React from "react";
import {Link} from 'react-router-dom';
import '../App.css'

const Rotoscan = () => {
  return (
   <div className="roto">
       <center>
        <div>
          <h3>Retinoscan</h3>
          <label htmlFor="id" className="label-roto">REM- &nbsp; </label>
          <input type="text" name="id" className="input-roto"/>
          <br/>
          <Link to="/login"><button className="save-button">Save & Continue</button></Link>
        </div>
       </center>
   </div> 
   
  )
}

export default Rotoscan

