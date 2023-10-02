import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        
            <div className="layout-px-spacing">

                <div className="row layout-top-spacing">

                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-one">
                            <div className="widget-heading">
                                <Link to="/users" className="btn btn-primary">View other members</Link>
                                <div className="task-action">
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask">
                                            <a className="dropdown-item" href="#">Weekly</a>
                                            <a className="dropdown-item" href="#">Monthly</a>
                                            <a className="dropdown-item" href="#">Yearly</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-content">
                                <div id="revenueMonthly"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="footer-wrapper">
                <div className="footer-section f-section-1">
                    <p className="">Copyright © 2021 <a target="_blank" href="https://designreset.com/">DesignReset</a>, All rights reserved.</p>
                </div>
                <div className="footer-section f-section-2">
                    <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
                </div>
            </div>
       
    </div>
  )
}

export default Dashboard