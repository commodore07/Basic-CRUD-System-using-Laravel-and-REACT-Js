import React from 'react'
import { Link } from 'react-router-dom'
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider.jsx";

const Signup = () => {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div>
      <div className="form-content">

<h1 className="">Get started with a <br/> free account</h1>
<p className="signup-link">Already have an account? <Link to="/login">Log in</Link></p>
<form className="text-left" onSubmit={onSubmit}>
    <div className="form">
    {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
        <div id="username-field" className="field-wrapper input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <input ref={nameRef} id="username" name="username" type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div id="email-field" className="field-wrapper input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
            <input ref={emailRef} id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div id="password-field" className="field-wrapper input mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input ref={passwordRef} id="password" name="password" type="password" placeholder="Password" />
        </div>
        <div id="password-field" className="field-wrapper input mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input ref={passwordConfirmationRef} id="confpassword" name="confpassword" type="password" placeholder="Confirm Password" />
        </div>
        <div className="field-wrapper terms_condition">
            <div className="n-chk new-checkbox checkbox-outline-primary">
                <label className="new-control new-checkbox checkbox-outline-primary">
                  <input type="checkbox" className="new-control-input" />
                  <span className="new-control-indicator"></span><span>I agree to the <a href="#">  terms and conditions </a></span>
                </label>
            </div>
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
                <button type="submit" className="btn btn-primary">Get Started!</button>
            </div>
        </div>

    </div>
</form>                        
<p className="terms-conditions">© 2020 All Rights Reserved. <a href="index-2.html">CORK</a> is a product of Designreset. <a href="#">Cookie Preferences</a>, <a href="#">Privacy</a>, and <a href="#">Terms</a>.</p>

</div> 
    </div>
  )
}

export default Signup