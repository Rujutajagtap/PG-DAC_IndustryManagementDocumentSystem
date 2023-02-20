import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Audit(props) {
    const history = useNavigate();


    /* The component will be rendered when user has not signed in */
    const loggedIn = (

        <ul className="nav justify-content-end">
            <li className="nav-item">

            </li>
            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-info">Home</button>
                </Link>
            </li>
        </ul>
    );

    // clearing local storage for given items when user logs out
    const userClear = () => (
        localStorage.removeItem('user'),
        localStorage.clear()
    )
    /** The component will be rendered when user is signed in */
    const loggedOut = (
        <ul className="nav justify-content-end">
            {/* {console.log(JSON.parse(localStorage.getItem('user')).isadmin)} */}


            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-info">Home</button>
                </Link>
            </li>


            <li className="nav-link text-info">
                {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin == 0
                    &&
                    <div class="dropdown">
                        <button class="btn btn-outline-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Records
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                           
                            
                        <Link className="nav-link text-info" to="/mttrAndMtbf"><a class="dropdown-item" >mttr And Mtbf Calculations</a></Link>
                        <Link className="nav-link text-info" to="/addMttrAndMtbf"><a class="dropdown-item" >add Mttr And Mtbf Calculations </a></Link>
                        
                        <Link className="nav-link text-info" to="/breakDown"><a class="dropdown-item" >BreakDown List</a></Link>
                        <Link className="nav-link text-info" to="/addBreakdown"><a class="dropdown-item" >AddBreakDown List</a></Link>

                        </div>
                    </div>}</li>


            <li className="nav-link text-info">
                <div class="dropdown">
                    <button class="btn btn-outline-info" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Department
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="nav-link text-info" to="/Audit"><a class="dropdown-item" >Audit</a></Link>
                        <Link className="nav-link text-info" to="/Maintainance"><a class="dropdown-item" >Maintainance</a></Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button onClick={userClear} className="btn btn-outline-info">Logout</button>
                </Link>
            </li>

            {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin === 0
                &&
                <li className="nav-item nav-link text-info">
                    <h6 style={{ marginTop: '7px' }}><b className='text-warning'>Welcome {JSON.parse(localStorage.getItem('user')).username}</b></h6>
                </li>
            }
        </ul>
    );
    return (
        <div>

            <Navbar bg="dark" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand href="/">
                       <h2>Welcome to Audit Department</h2> </Navbar.Brand>
                    <nav >
                        {localStorage.getItem('user') ? loggedOut : loggedIn}
                    </nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Audit;