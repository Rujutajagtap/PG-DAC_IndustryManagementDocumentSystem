import React from 'react';
//import { Link, useNavigate } from 'react-router-dom';
import { Link,useNavigate } from "react-router-dom";

import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';
//import UserService from '../service/UserService';
function Admin(props) {
    const history =useNavigate('');


    if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 0  )
    {
        return  alert('Access Denied'),
        history('/'),
        null
    }

    else{
    return (
        <div style={{paddingTop : 70}}>
            <Header />
        <div className="p-3" style={styling.wrapper}>
            
            <div className="card m-auto" style={{width: "23rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title">Welcome </h5>
                    <p className="card-text">As Admin only you can add user according to Designation  </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link className="card-link" to="/Register">Add User</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="card-link" to="/UserList">All User</Link>
                    </li>
                    <li className="list-group-item"></li>
                </ul>
            </div>
            
        </div>
            <Footer/>
        </div>
    );
    }
};

let styling = {
    wrapper : {
        height : "80vh",
        background: `url(${plane})`
    }
}

export default Admin;