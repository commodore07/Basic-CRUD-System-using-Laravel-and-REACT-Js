import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../context/ContextProvider.jsx";

const UserForm = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    const [user, setUser] = useState({
      id: null,
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const {setNotification} = useStateContext()
  
    if (id) {
      useEffect(() => {
        setLoading(true)
        axiosClient.get(`/users/${id}`)
          .then(({data}) => {
            setLoading(false)
            setUser(data)
          })
          .catch(() => {
            setLoading(false)
          })

          
      }, [])
    }
  
    const onSubmit = ev => {
      ev.preventDefault()
      if (user.id) {
        axiosClient.put(`/users/${user.id}`, user)
          .then(() => {
            setNotification('User was successfully updated')
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })
      } else {
        axiosClient.post('/users', user)
          .then(() => {
            setNotification('User was successfully created')
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors)
            }
          })
      }
    }

const upload_image = (event) => {
var image_crop = $('#image_demo').croppie({
enableExif: true,
viewport: {
  width:200,
  height:200,
  type:'square' //circle
},
boundary:{
  width:300,
  height:300
}
});

var reader = new FileReader();
reader.onload = function (event) {
  image_crop.croppie('bind', {
    url: event.target.result
  }).then(function(){
    console.log('jQuery bind complete');
  });
}
reader.readAsDataURL(event.target.files[0]);
$('#uploadimageModal').modal('show');

} 

const crop_image = (event) => {
  var image_crop = $('#image_demo').croppie({
    enableExif: true,
    viewport: {
      width:200,
      height:200,
      type:'square' //circle
    },
    boundary:{
      width:300,
      height:300
    }
    });

  image_crop.croppie('result', {
    type: 'canvas',
    size: 'viewport'
  }).then(function(response){
    $.ajax({
      url:axiosClient.post('/uploadImageUrl'),
      type: "POST",
      data:{"image": response},
      success:function(data)
      {
        $('#uploadimageModal').modal('hide');
        $('#uploaded_image').html(data);
      }
    });
  })
  };

  return (
    <div>
        <div className="col-lg-12 col-12  layout-spacing">
                            <div className="statbox widget box box-shadow">
                                <div className="widget-header">                                
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                                        {user.id && <h4>Update User: {user.name}</h4>}
                                        {!user.id && <h4>New User</h4>}
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-content widget-content-area">
                                {loading && (
                                <div className="text-center">
                                    Loading...
                                </div>
                                )}
                                {errors &&
                                <div className="alert">
                                    {Object.keys(errors).map(key => (
                                    <p key={key}>{errors[key][0]}</p>
                                    ))}
                                </div>
                                }
                                {!loading && (
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group row  mb-4">
                                            <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
                                            <div className="col-sm-10">
                                                <input value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} type="email" className="form-control" id="colFormLabel" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" onChange={ev => setUser({...user, password: ev.target.value})} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter Password" />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-4">
                                            <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" onChange={ev => setUser({...user, password_confirmation: ev.target.value})} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <button className="mb-4 btn btn-primary">Save</button>
                                    </form>
                                )}
                                <input type="file" onChange={upload_image} name="upload_image" id="upload_image" />
                                
                                </div>

                                <div id="uploadimageModal" className="modal" role="dialog">
	<div className="modal-dialog">
		<div className="modal-content">
      		<div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">&times;</button>
      		</div>
      		<div className="modal-body">
        		<div className="row">
  					<div className="col-md-8 text-center">
						  <div id="image_demo" style={{width:'350px', 'marginTop':'30px'}}></div>
  					</div>
  					
				</div>
      		</div>
      		<div className="modal-footer">
          <button onClick={crop_image} className="btn btn-success crop_image">Crop & Upload Image</button>
        		<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      		</div>
    	</div>
    </div>
</div>


                            </div>
                        </div>
    </div>
  )
}

export default UserForm