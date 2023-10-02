import React, { useEffect } from 'react'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';
import axiosClient from '../axios-client';

const DefaultLayout = () => {
    const {user, token, setUser, setToken, notification} = useStateContext();

    if (!token) {
      return <Navigate to="/login"/>
    }
  
    const onLogout = ev => {
      ev.preventDefault()
  
      axiosClient.post('/logout')
        .then(() => {
          setUser({})
          setToken(null)
        })
    }
  
    useEffect(() => {
      axiosClient.get('/user')
        .then(({data}) => {
           setUser(data)
        })
    }, [])

    const navLinkStyles = ({isActive}) => {
        return {
            color: isActive ? '#fff' : ''
        }
    }

  return (
    <div>
        <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">

            <ul className="navbar-item theme-brand flex-row  text-center">
                <li className="nav-item theme-logo">
                    <a href="index-2.html">
                        <img src="/assets/img/logo.svg" className="navbar-logo" alt="logo" />
                    </a>
                </li>
                <li className="nav-item theme-text">
                    <a href="index-2.html" className="nav-link"> CORK </a>
                </li>
            </ul>

            <ul className="navbar-item flex-row ml-md-0 ml-auto">
                <li className="nav-item align-self-center search-animated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <form className="form-inline search-full form-inline search" role="search">
                        <div className="search-bar">
                            <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
                        </div>
                    </form>
                </li>
            </ul>

            <ul className="navbar-item flex-row ml-md-auto">

                <li className="nav-item dropdown language-dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/assets/img/ca.png" className="flag-width" alt="flag" />
                    </a>
                    <div className="dropdown-menu position-absolute" aria-labelledby="language-dropdown">
                        <a className="dropdown-item d-flex" href="#"><img src="/assets/img/de.png" className="flag-width" alt="flag" /> <span className="align-self-center">&nbsp;German</span></a>
                        <a className="dropdown-item d-flex" href="#"><img src="/assets/img/jp.png" className="flag-width" alt="flag" /> <span className="align-self-center">&nbsp;Japanese</span></a>
                        <a className="dropdown-item d-flex" href="#"><img src="/assets/img/fr.png" className="flag-width" alt="flag" /> <span className="align-self-center">&nbsp;French</span></a>
                        <a className="dropdown-item d-flex" href="#"><img src="/assets/img/ca.png" className="flag-width" alt="flag" /> <span className="align-self-center">&nbsp;English</span></a>
                    </div>
                </li>

                <li className="nav-item dropdown message-dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <div className="dropdown-menu position-absolute" aria-labelledby="messageDropdown">
                        <div className="">
                            <a className="dropdown-item">
                                <div className="">

                                    <div className="media">
                                        <div className="user-img">
                                            <div className="avatar avatar-xl">
                                                <span className="avatar-title rounded-circle">KY</span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="">
                                                <h5 className="usr-name">Kara Young</h5>
                                                <p className="msg-title">ACCOUNT UPDATE</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="">
                                    <div className="media">
                                        <div className="user-img">
                                            <img src="/assets/img/profile-15.jpg" className="img-fluid mr-2" alt="avatar" />
                                        </div>
                                        <div className="media-body">
                                            <div className="">
                                                <h5 className="usr-name">Daisy Anderson</h5>
                                                <p className="msg-title">ACCOUNT UPDATE</p>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </a>
                            <a className="dropdown-item">
                                <div className="">

                                    <div className="media">
                                        <div className="user-img">
                                            <div className="avatar avatar-xl">
                                                <span className="avatar-title rounded-circle">OG</span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="">
                                                <h5 className="usr-name">Oscar Garner</h5>
                                                <p className="msg-title">ACCOUNT UPDATE</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                </li>

                <li className="nav-item dropdown notification-dropdown">
                    <a href="#" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge badge-success"></span>
                    </a>
                    <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
                        <div className="notification-scroll">

                            <div className="dropdown-item">
                                <div className="media server-log">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                                    <div className="media-body">
                                        <div className="data-info">
                                            <h6 className="">Server Rebooted</h6>
                                            <p className="">45 min ago</p>
                                        </div>

                                        <div className="icon-status">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown-item">
                                <div className="media ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                    <div className="media-body">
                                        <div className="data-info">
                                            <h6 className="">Licence Expiring Soon</h6>
                                            <p className="">8 hrs ago</p>
                                        </div>

                                        <div className="icon-status">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown-item">
                                <div className="media file-upload">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    <div className="media-body">
                                        <div className="data-info">
                                            <h6 className="">Kelly Portfolio.pdf</h6>
                                            <p className="">670 kb</p>
                                        </div>

                                        <div className="icon-status">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </li>

                <li className="nav-item dropdown user-profile-dropdown">
                    <a href="#" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="/assets/img/profile-16.jpg" alt="avatar" />
                    </a>
                    <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                        <div className="">
                            <div className="dropdown-item">
                                <a className="" href="user_profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile</a>
                            </div>
                            <div className="dropdown-item">
                                <a className="" href="apps_mailbox.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> Inbox</a>
                            </div>
                            <div className="dropdown-item">
                                <a className="" href="auth_lockscreen.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Lock Screen</a>
                            </div>
                            <div className="dropdown-item">
                                <a onClick={onLogout} className="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Sign Out</a>
                            </div>
                        </div>
                    </div>
                    
                </li>

            </ul>
        </header>
    </div>
    
    <div className="sub-header-container">
        <header className="header navbar navbar-expand-sm">
            <a href="#" className="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a>

            <ul className="navbar-nav flex-row">
                <li>
                    <div className="page-header">

                        <nav className="breadcrumb-one" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Welcome {user.name}</a></li>
                            </ol>
                        </nav>

                    </div>
                </li>
            </ul>
            <ul className="navbar-nav flex-row ml-auto ">
                <li className="nav-item more-dropdown">
                    <div className="dropdown  custom-dropdown-icon">
                        <a className="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Settings</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></a>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">
                            <a className="dropdown-item" data-value="Settings" href="#">Settings</a>
                            
                        </div>
                    </div>
                </li>
            </ul>
        </header>
    </div>
    
    <div className="main-container" id="container">

        <div className="overlay"></div>
        <div className="search-overlay"></div>

        
        <div className="sidebar-wrapper sidebar-theme">
            
            <nav id="sidebar">
                <div className="shadow-bottom"></div>
                <ul className="list-unstyled menu-categories" id="accordionExample">

                    <li className="menu">
                        <NavLink to="/dashboard" style={navLinkStyles} aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                <span>Dashboard</span>
                            </div>
                        </NavLink>
                    </li>

                    <li className="menu">
                        <NavLink to="/users" aria-expanded="false" style={navLinkStyles} className="dropdown-toggle">
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <span>Users</span>
                            </div>
                        </NavLink>
                    </li>
   
                </ul>
               <div className="shadow-bottom"></div>
                
            </nav>

        </div>
        <div id="content" className="main-content">
          
        <Outlet /> 
        </div>

    </div>
    </div>
  )
}

export default DefaultLayout