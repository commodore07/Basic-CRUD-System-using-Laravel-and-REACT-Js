import React from 'react'
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {Link, NavLink} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {setNotification} = useStateContext()

  useEffect(() => {
    getUsers();
  }, [])

  const onDeleteClick = user => {
    
      swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          padding: '2em'
        }).then(function(result) {
          if (result.value) {
            axiosClient.delete(`/users/${user.id}`)
            .then(() => {
              setNotification('User was successfully deleted')
              getUsers()
            })

            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
    
  }

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
      .then(({ data }) => {
        setLoading(false)
        setUsers(data.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <div id="tableFooter" className="col-lg-12 col-12 layout-spacing">
                            <div className="statbox widget box box-shadow">
                                <div className="widget-header">
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <NavLink to='/users/new' className="btn btn-primary">Add new user</NavLink>
                                        </div>                       
                                    </div>
                                </div>
                                <div className="widget-content widget-content-area">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-hover table-condensed mb-4">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Date Created</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>

                                              {loading &&
                                              <tbody>
                                              <tr>
                                                <td colSpan="5" class="text-center">
                                                  Loading...
                                                </td>
                                              </tr>
                                              </tbody>
                                            }
                                            {!loading &&
                                              <tbody>
                                              {users.map(u => (
                                                <tr key={u.id}>
                                                  <td>{u.id}</td>
                                                  <td>{u.name}</td>
                                                  <td>{u.email}</td>
                                                  <td>{u.created_at}</td>

                                                  <td className="text-center">
                                                        <ul className="table-controls">
                                                            <li><Link to={'/users/' + u.id}  data-toggle="tooltip" data-placement="top" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></Link></li>
                                                            <li><Link onClick={ev => onDeleteClick(u)} data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></Link></li>
                                                        </ul>
                                                  </td>

                                                </tr>
                                              ))}
                                              </tbody>
                                            }

                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Date Created</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div> 
    </div>
  )
}

export default Users