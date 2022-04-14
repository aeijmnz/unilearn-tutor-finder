import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUpTuteePage = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email:"",
        password: "",
        type: "TUTEE"
    })

    const handleChange=(e)=> {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const submitForm= async (e)=>{
        e.preventDefault()
        const sendUser={
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            user_type: "TUTEE"
        }
        console.log(sendUser);

       await axios.post("http://localhost/unilearn-php/index.php", sendUser)
        .then((result)=> {
         console.log(result);
         if(result.data.Status=='valid'){
            navigate("/sign-in");
         } 
         else {
             alert("try again!~")
         }
        })

    }

  return (
      <>
      <div className='body1'>
        <div className="wrapper">
            <h2>Registration</h2>

            <form onSubmit={submitForm}>

            <div className="input-box">
                <input type="text" name="first_name" placeholder="First Name"  required
                value={user.first_name} onChange={handleChange} 
                />
            </div>

            <div className="input-box">
                <input type="text" name="last_name" placeholder="Last Name"  required
                value={user.last_name} onChange={handleChange} 
                />
            </div>

            <div className="input-box">
                <input type="email" name="email" placeholder="Wesleyan E-mail"  required
                onChange={handleChange} value={user.email}
                />
            </div>

            <div className="input-box">
                <input type="password" name="password" placeholder="Create password" required
                onChange={handleChange} value={user.password}
                />
            </div>
            
            {/* still need a checker/comparator to confirm if match  */}
            
            <div className="input-box">
                <input type="password" placeholder="Confirm password" required/>
            </div>

             {/* still need a link to terms and condition and also content */}

            <div className="policy">
                <input type="checkbox"/>
                <h3>I accept all terms & condition</h3>
            </div>

            <div className="input-box button1">
                <input type="Submit" value="Create Tutee Account"/>
            </div>
            
            <div className="input-box button2">
                <input type="button" value="Register as a Tutor"/>
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

export default SignUpTuteePage