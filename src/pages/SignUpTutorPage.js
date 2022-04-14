import React from 'react'
import {useNavigate} from 'react-router-dom'

const SignUpTutorPage = () => {
    let navigate = useNavigate();
  return (
      <>
      <div className='body1'>
        <div className="wrapper">
            <h2>Registration</h2>

            <form action="#">
            <div className="input-box">
                <input type="text" placeholder="First Name" required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Last Name" required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Wesleyan E-mail" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Create password" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Confirm password" required/>
            </div>
            <div className="policy">
                <input type="checkbox"/>
                <h3>I accept all terms & condition</h3>
            </div>
            <div className="input-box button1">
                <input type="Submit" value="Create Tutor Account"/>
            </div>
            <div className="input-box button2">
                <input type="Submit" value="Register as a Tutee"/>
            </div>
            <div className="text">
                <h3>Already have an account? <a onClick={() => navigate("/sign-in")}>Login now</a></h3>
            </div>
            </form>
        </div>
        </div>
    </>
  )
}

export default SignUpTutorPage