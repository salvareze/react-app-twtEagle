import axios from "axios";
import React, { useState } from "react";
import {getLogin} from '../services/UsersServices'

function Login(props){
    const [errorM, setErrorM] = useState(false)

    function onSubmit(event){
        event.preventDefault();
        console.log("entro")

        getLogin(event.target.username.value, event.target.password.value)
            .then(response => {
            console.log('response: '+ response.id);
            localStorage.setItem('idUser', JSON.stringify(response.id))
            console.log("idget: "+JSON.parse(localStorage.getItem('idUser')))
            props.history.replace("/")
        })
        .catch(() => {
            setErrorM(true)
        })
    }
    
    
    return (
        <div className="container d-flex justify-content-center">
            <div className="row justify-content-center" style={{width:'70%'}}>
                <div className="shadow col-sm-10 col-md-6 col-lg-6">
                    <form className="form" onSubmit={onSubmit}>
                        <h3 className="text-center text-black-50">Login</h3>
                        
                        {errorM ? (<div className="form-group mb-3 alert alert-danger" role="alert">Invalid email or password</div>) : ''}

                        <div className="form-group mb-3">
                            <label className="text-start">User</label>
                            <input type="text" name="username" id="username" className="form-control"/>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label className="text-start">Password</label>
                            <input type="password" name="password" id="password" className="form-control" autoComplete="off"/>
                        </div>
                        
                        <div className="form-group mb-3 d-flex flex-column align-items-start">
                            <button type="submit" className="btn btn-danger btn-md" >Login</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Login;