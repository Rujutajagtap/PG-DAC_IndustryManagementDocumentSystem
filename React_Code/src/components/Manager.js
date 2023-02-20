import React from 'react';
//import { Link, useNavigate } from 'react-router-dom';
import { Link,useNavigate } from "react-router-dom";

import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';
 
function Manager(props) {
    const history =useNavigate('');

    //const admin = useSelector((state) => state.user && state.user.currentUser && state.user.currentUser.isAdmin)
   //if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 0 )
//    if((!localStorage.getItem('user')).isadmin ===2)

    if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 0)
   {
    return  alert('Access Denied'),
    history('/'),
    null
}

 else{
 
   //    if(localStorage.getItem('user').isadmin===2)   
    return (
        <div>
        <div style={{paddingTop : 70}}>
            <Header />
        <div className="p-3" style={styling.wrapper}>
            
            <div className="card m-auto" style={{width: "23rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title">Welcome </h5>
                    <p className="card-text">As Manager can only view reports </p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                        <Link className="card-link" to="/viewAttendance">view pages</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="card-link" to="/Managerdept">view All managerdept</Link>
                    </li>
                    
                    <li className="list-group-item"></li>
                </ul>
            </div>
            
        </div>
            <Footer/>
        </div>
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

export default Manager;






    // else {
    //     return  alert('Access Denied'),
    // history('/')
    
    // }





    // if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 1 || JSON.parse(localStorage.getItem('user')).isadmin === 0 )
    // {
    //     return  alert('Access Denied'),
    //     history('/'),
    //     null
    // }

    // else{
    // return (
    //     <div style={{paddingTop : 70}}>
    //         <Header />
    //     <div className="p-3" style={styling.wrapper}>
            
    //         <div className="card m-auto" style={{width: "23rem"}}>
                
    //             <div className="card-body">
    //                 <h5 className="card-title">Welcome </h5>
    //                 <p className="card-text">As Admin onlu you can add user according to Designation  </p>
    //             </div>
    //             <ul className="list-group list-group-flush">
    //                 <li className="list-group-item">
    //                     <Link className="card-link" to="/Consumption">view </Link>
    //                 </li>
    //                 <li className="list-group-item">
    //                     <Link className="card-link" to="/ViewManagerService">all pagees</Link>
    //                 </li>
    //                 <li className="list-group-item"></li>
    //             </ul>
    //         </div>
            
    //     </div>
    //         <Footer/>
    //     </div>
    // );
    // }












// import React from 'react';
// //import { Link, useNavigate } from 'react-router-dom';
// import { Link,useNavigate } from "react-router-dom";

// import plane from '../assets/images/travel1.jpg';
// import Header from './Header';
// import Footer from './Footer';
// //import UserService from '../service/UserService';
// function Manager(props) {
//     const history =useNavigate('');


//     if(!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 3)
//     {
//         // return (
//         //     <div style={{paddingTop : 70}}>
//         //         <Header />
//         //     <div className="p-3" style={styling.wrapper}>
                
//         //         <div className="card m-auto" style={{width: "23rem"}}>
                    
//         //             <div className="card-body">
//         //                 <h5 className="card-title">Welcome </h5>
//         //                 <p className="card-text">As Manager only you can View   All data  </p>
//         //             </div>
//         //             <ul className="list-group list-group-flush">
//         //                 { <li className="list-group-item">
//         //                     <Link className="card-link" to="/Consumption">View all con </Link>
//         //                 </li> }
//         //                 <li className="list-group-item">
//         //                     <Link className="card-link" to="/ViewManagerService">View all</Link>
//         //                 </li>
//         //                 <li className="list-group-item"></li>
//         //             </ul>
//         //         </div>
                
//         //     </div>
//         //         <Footer/>
//         //     </div>
//         // );
//         return  alert('Access Denied'),
//         history('/'),
//         null
//     }

//     else{

//         // return  alert('Access Denied'),
//         // history('/'),
//         // null
//     return (
//         <div style={{paddingTop : 70}}>
//             <Header />
//         <div className="p-3" style={styling.wrapper}>
            
//             <div className="card m-auto" style={{width: "23rem"}}>
                
//                 <div className="card-body">
//                     <h5 className="card-title">Welcome </h5>
//                     <p className="card-text">As Manager only you can View   All data  </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     { <li className="list-group-item">
//                         <Link className="card-link" to="/Consumption">View all con </Link>
//                     </li> }
//                     <li className="list-group-item">
//                         <Link className="card-link" to="/ViewManagerService">View all</Link>
//                     </li>
//                     <li className="list-group-item"></li>
//                 </ul>
//             </div>
            
//         </div>
//             <Footer/>
//         </div>
//     );
//     }
// };

// let styling = {
//     wrapper : {
//         height : "80vh",
//         background: `url(${plane})`
//     }
// }

// export default Manager;