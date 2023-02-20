// import react from 'react';
import { useEffect, useState } from "react";
import breakdownService from "../services/breakdown.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React,{useRef} from 'react';
import { useReactToPrint, usereactTOPrint} from 'react-to-print';



const BreakDown = () => {

  const [BreakDowns,setBreakDowns] =useState([]);

  const init = () => {
 breakdownService.getAll2()
      .then(response => {
        console.log('Printing Breakdown Anyalisys  data', response.data);
        setBreakDowns(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (sr_no) => {
    console.log('Printing id', sr_no);
    breakdownService.remove(sr_no)
      .then(response => {
        console.log('Printing Breakdown Analysis data deleted successfully', response.data);
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
      <h3> Breakdown Analysis</h3>
      <Link to="/">  Home  </Link>
      <hr/>
    <div>
    <Link to="/addBreakdown" className="btn btn-primary mb-2"> Add Breakdown Analysis data</Link>
    <table className="table table-bordered table-striped mb+3  ">
    <thead className="thead-dark">
    <tr>
      <th>mc_id</th>
      <th>date</th>
      <th>shift</th>
      <th>bdtime</th>
      <th>bdhrs</th>
      <th>nature</th>
      <th>actiontaken</th>
      <th>spearused</th>
     <th>sprearcost</th> 
      <th>techicionname</th>
      <th>Remark</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>




    {
      BreakDowns.map(breakdown => (
        <tr key={breakdown.sr_no}>
          <td>{breakdown.mc_id}</td>
          <td>{breakdown.date}</td>
          <td>{breakdown.shift}</td>
          <td>{breakdown.bdtime}</td>
          <td>{breakdown.bdhrs}</td>
          <td>{breakdown.natureofbreakedown}</td>
          <td>{breakdown.actiontaken}</td>
          <td>{breakdown.spearused}</td>
          <td>{breakdown.sprearcost}</td>
          <td>{breakdown.techicionname}</td>
          <td>{breakdown.remark}</td>
          <td>
          <Link className="btn btn-info" to={`/BreakDownAnlysiss/Bkedit/${breakdown.sr_no}`}>Update</Link>

          <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(breakdown.sr_no);
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
export default BreakDown;