import React from 'react'
import { Link } from 'react-router-dom'
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import { useState } from "react";

const Login = () => {
    const emailRef = createRef()
    const passwordRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
  
    const onSubmit = ev => {
      ev.preventDefault()
  
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      axiosClient.post('/login', payload)
        .then(({data}) => {
          setUser(data.user)
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setMessage(response.data.message)
          }
        })
    }

  return (
    <div>
        <div className="form-content">

<h1 className="">Log In to <a href="index-2.html"><span className="brand-name">CORK</span></a></h1>
<p className="signup-link">New Here? <Link to="/signup">Create an account</Link></p>
<form onSubmit={onSubmit} className="text-left">
    <div className="form">
    {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }

        <div id="username-field" className="field-wrapper input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <input ref={emailRef} id="email" name="email" type="email" className="form-control" placeholder="Enter Email" />
        </div>

        <div id="password-field" className="field-wrapper input mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input ref={passwordRef} id="password" name="password" type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="d-sm-flex justify-content-between">
            <div className="field-wrapper toggle-pass">
                <p className="d-inline-block">Show Password</p>
                <label className="switch s-primary">
                    <input type="checkbox" id="toggle-password" className="d-none" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="field-wrapper">
                <button type="submit" className="btn btn-primary" value="">Log In</button>
            </div>
            
        </div>

        <div className="field-wrapper text-center keep-logged-in">
            <div className="n-chk new-checkbox checkbox-outline-primary">
                <label className="new-control new-checkbox checkbox-outline-primary">
                  <input type="checkbox" className="new-control-input" />
                  <span className="new-control-indicator"></span>Keep me logged in
                </label>
            </div>
        </div>

        <div className="field-wrapper">
            <a href="auth_pass_recovery.html" className="forgot-pass-link">Forgot Password?</a>
        </div>

    </div>
</form>                        
<p className="terms-conditions">© 2020 All Rights Reserved. <a href="index-2.html">CORK</a> is a product of Designreset. <a href="#">Cookie Preferences</a>, <a href="#">Privacy</a>, and <a href="#">Terms</a>.</p>

</div>  
    </div> 
  )
}

export default Login