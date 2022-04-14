import React from 'react'
import {useNavigate} from 'react-router-dom'



const SignInPage = () => {
  let navigate = useNavigate();

  return (
  <>
  <div className='body1'>
    <div className="wrapper">
      <form action="#">
        <h2>Welcome to UNILEARN</h2>
        <div className="input-box">
          <input type="text" placeholder="Enter Your Email" required/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Your Password" required/>
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Login"/>
        </div>
      
        {/* <div className="text">
        <h3>Create an account</h3>
        </div> */}
        <div className="input-box button1">
          <a onClick={() => navigate("/sign-up-tutee")}>Register as a Student</a>
        </div>
        <div className="input-box button2">
          <a onClick={() => navigate("/sign-up-tutor")}>Register as a Tutor</a>
        </div>
        </form>
    </div>
    </div>
  </>


  )
}

export default SignInPage