import { useEffect, useState } from "react";
import machineService from "../services/machine.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React,{useRef} from 'react';
import { useReactToPrint, usereactTOPrint} from 'react-to-print';


const MachineDetails = () => {

  const [machines,setMachines] =useState([]);

  const init = () => {
    machineService.getAll3()
      .then(response => {
        console.log('Printing Machine Details data', response.data);
        setMachines(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (sr_no) => {
    console.log('Printing sr_no', sr_no);
    machineService.remove(sr_no)
      .then(response => {
        console.log('Machine Details data deleted successfully', response.data);
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
      <h3> Machine Details</h3>
      <Link to="/">  Home  </Link>
      <hr/>
    <div>
    <Link to="/addMachineDetails" className=" btn btn-primary mb-2">Add  Machine Details</Link>
    <table className="table table-bordered table-striped ">
    <thead className="thead-dark">
    <tr>

      <th>mc_id</th>
      <th>name_of_machine</th>
      <th>make</th>
      <th>code_num</th>
      <th>mfd_date</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {
      machines.map(machine => (
        <tr key={machine.sr_no}>
          <td>{machine.mc_id}</td>
          <td>{machine.name_of_machine}</td>
          <td>{machine.make}</td>
          <td>{machine.code_num}</td>
          <td>{machine.mfd_date}</td>
          <td>
           <Link className="btn btn-info" to={`/ListOfMachiness/Mdedit/${machine.sr_no}`}>Update</Link> 
          {/*<Link className="btn btn-info" to={`/ListOfMachiness/Mdedit/${machine.sr_no}`}>Update</Link> */}
          <button className="btn btn-danger ml-1" onClick={() => {
                    handleDelete(machine.sr_no);
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
export default MachineDetails;