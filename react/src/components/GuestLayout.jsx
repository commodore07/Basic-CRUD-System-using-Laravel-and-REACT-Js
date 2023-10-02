import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';

const GuestLayout = () => {
  const { user, token } = useStateContext();

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <div className="form-container">
        <div className="form-form">
            <div className="form-form-wrap">
                <div className="form-container">
                <Outlet />                  
                </div>
            </div>
        </div>
        <div className="form-image">
            <div className="l-image">
            </div>
        </div>
    </div>
    </div>
  )
}

export default GuestLayout