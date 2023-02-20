import React from "react";
import { ButtonGroup, Card, Table } from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';




export class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            User : []
        };
    }
    
    componentDidMount(){
        this.findAllUser();
    }

    findAllUser(){
        axios.get("http://localhost:7575/getusers")
        .then(response => response.data)
        .then((data) =>{
            this.setState({User:data});
            })
    }

    deleteUser = (userId) => {
        axios.delete( "http://localhost:7575/deleteuser/"+userId)
        .then(response => {
            if(response.data != null){
                alert("user deleted sucessfully.");

            }
        });
    };



    render(){
        return(
            <Card className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
               <Card.Header>Employees List</Card.Header>
               <Card.Body>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>EmpId</th>
                                <th>Depertment</th>
                                <th>Email_ID</th>
                                <th>EmpName</th>
                                <th>IsAdmin</th>
                                
                                <th>PhoneNo</th>
                                <th>UserName</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.User.length == 0 ?
                                <tr align="center">
                                    <td colSpan="7">Employees Avaliable</td>
                                </tr> :
                                this.state.User.map((User) =>
                                    <tr kry={User.userId}><td>{User.userId}</td>
                                        <td>{User.department}</td>
                                        <td>{User.email}</td>
                                        <td>{User.fname}</td>
                                        <td>{User.isadmin}</td>
                                        
                                        <td>{User.phone}</td>
                                        <td>{User.username}</td>
                                        <td>
                                            {/* <ButtonGroup>
                                                <button size="sm" variant="outline-primary" onClick={this.updateUser}><FontAwesomeIcon icon={faEdit}/></button>
                                                <button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this,User.Id)}><FontAwesomeIcon icon={faTrash}/></button>
                                            </ButtonGroup> */}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
               </Card.Body>
            </Card>
        )
    }
}
export default UserList;