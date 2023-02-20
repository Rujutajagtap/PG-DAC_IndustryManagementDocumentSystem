// import react from 'react';
import { useEffect, useState } from "react";
import attendanceService from "../services/attendance.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React,{useRef} from 'react';
import { useReactToPrint, usereactTOPrint} from 'react-to-print';


const EmpAttendance = () => {

  const [attendances,setAttendances] =useState([]);

  const init = () => {
    attendanceService.getAll1()
      .then(response => {
        console.log('Printing employees Attendance data', response.data);
        setAttendances(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    attendanceService.remove(id)
      .then(response => {
        console.log('employee attendance data deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  const componentRef = useRef();
  const handlePrint =useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint: ()=> alert('Print Success')
  })


  return ( 
    <>
    <div ref={componentRef} style={{width: '100%',height: window.innerHeight}}>

    <div className="container">
      <h3> Employee Attendance</h3>
      <Link to="/">  Home  </Link>
      <hr/>
    <div>
    <Link to="/addAttendance" className="btn btn-primary mb-2">Add Employees Attendance</Link>
    <table className="table table-bordered table-striped ">
    <thead className="thead-dark">
    <tr>
      <th>shift</th>
      <th>empId</th>
      <th>empName</th>
      <th>remark</th>
      <th>date</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {
      attendances.map(attendance => (
        <tr key={attendance.id}>
          <td>{attendance.shift}</td>
          <td>{attendance.empId}</td>
          <td>{attendance.empName}</td>
          <td>{attendance.remark}</td>
          <td>{attendance.date}</td>
          <td>
         
          <Link className="btn btn-info" to={`/Attendances/edit/${attendance.id}`}>Update</Link>
          <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(attendance.id);
                  }}>Delete</button> 
          </td>
        </tr>
      ))
    }
</tbody>
    </table>
    </div>
    
    </div>
    </div>
    <button onClick={handlePrint}>Print </button>
    </>

  );
  }
export default EmpAttendance;