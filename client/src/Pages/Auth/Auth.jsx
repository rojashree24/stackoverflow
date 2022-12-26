import React,{useState}from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './Auth.css'
import icon from '../../assests/icon.png' //../ -> means go backwards 
import AboutAuth from '../../Pages/Auth/AboutAuth'
import { signup,login } from '../../actions/auth'

const Auth = () => {

  const [isSignUp,setIsSignUp]=useState(false);

  //get the data - redux part
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSwitch =()=>{
    setIsSignUp(!isSignUp)
  }


  const handleSubmit=(e)=>{
    e.preventDefault(); //prevents all like refresh like that

    if(!email && !password){
      alert('Enter Email and Password')
    }
    if(isSignUp){
      if(!name){
        alert('Enter a name to continue')
      }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({email,password},navigate))
    }
    // console.log({name,email,password});
  }
 
  return (
     <section className="auth-section">
      {isSignUp && <AboutAuth/>}
    <div className="auth-container-2">
      {!isSignUp && <img src={icon} alt='icon' className='login-logo'/>}


      <form onSubmit={handleSubmit}>

        {
          isSignUp && (
            <label htmlFor="name">
              <h4>Display name</h4>
              <input type="text" id='name' name='name' onChange={(e)=>{setName(e.target.value)}} />
            </label>
          )
        }

        <label htmlFor="email">
          <h4>Email</h4>
          <input type="email" name='name' id='email' onChange={(e)=>{setEmail(e.target.value)}} /> 
        </label>

        <label htmlFor="password">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <h4>Password</h4>
          {!isSignUp&&<p style={{ color: "#007ac6",fontSize:'13px'}}>Forgot Password?</p>}
          </div>
          <input type="password" name='password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/> 
          {isSignUp&&<p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight<br />characters, including at least 1 letter and 1<br /> number.</p>}
        </label>

        {
          isSignUp&&
        (
        <label htmlFor="check">
          <input type="checkbox" name="" id="check" />
          <p style={{ fontSize:"13px"}}>Opt-in to receive occasional,<br />product updates, user research invitations,<br />company announcements, and digests.</p>
        </label>
        )
        }

        <button type="submit" className='auth-btn'>{isSignUp?'Signup':'Login'}</button>

        {
          isSignUp&&(
            <p style={{ color: "#666767", fontSize:"13px"}}>
              By clicking “Sign up”, you agree to our 
                <span style={{ color: "#007ac6"}}> terms of<br /> service</span>,
                <span style={{ color: "#007ac6"}}> privacy policy</span> and 
                <span style={{ color: "#007ac6"}}> cookie policy</span>
            </p>
          )
        }
      </form>

      <p>
        {isSignUp?'Already have an account?':'Don\'t have an account?'}
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignUp?'Login':'Signup'}</button>
      </p>
    </div>
  </section>


  )
}

export default Auth
