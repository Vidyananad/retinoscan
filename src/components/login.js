  import { Link } from 'react-router-dom'
import '../App.css'

 const Login = () => {
  return (
   <div className="roto">
       <center>
        <div>
          <h3>Retinoscan</h3>
        <form>
          <input type="text"  className="input-roto" placeholder="username"/>
          <br/>
          <input type="password"  className="input-roto" placeholder="Password" />
          <br/>
          <Link to="/exam"><button className="save-button">Login</button></Link>
          </form>   
          <br/>
          {/*<Link to="/login"><button>Save & Continue</button></Link>*/}
        </div>
       </center>
   </div> 
   
  )
}

export default Login