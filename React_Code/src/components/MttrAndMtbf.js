// import react from 'react';
import { useEffect, useState } from "react";
import mttrAndMtbfService from "../services/mttrAndMtbf.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React,{useRef} from 'react';
import { useReactToPrint, usereactTOPrint} from 'react-to-print';


const MttrAndMtbf = () => {

  const [calculations,setCalculation] =useState([]);

  const init = () => {
    mttrAndMtbfService.getAll4()
      .then(response => {
        console.log('Printing MTTR And MTBF Calculation data', response.data);
        setCalculation(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (sr_id) => {
    console.log('Printing id', sr_id);
    mttrAndMtbfService.remove(sr_id)
      .then(response => {
        console.log('MTTR And MTBF Calculation data deleted successfully', response.data);
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
      <h3> MTTR And MTBF Calculation data</h3>
      <Link to="/" align-right>  Home  </Link>
      <hr/>
    <div>
    <Link to="/addMttrAndMtbf" className="btn btn-primary mb-2">Add MTTR And MTBF Calculation data</Link>
    <table className="table table-bordered table-striped ">
    <thead className="thead-dark">
    <tr>
      {/* <th>srNo</th> */}
      <th>mcId</th>
      <th>mcrRate/hr</th>
      <th>mcUpTime</th>
      <th>breakdownTimeHr</th>
      <th>numOfBreakdown</th>
      <th>mttr</th>
      <th>mtbf</th>
      <th>productionLoss</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {
        calculations.map(calculation=> (
        <tr key={calculation.sr_no}>
          <td>{calculation.mc_id}</td>
          <td>{calculation.mcr_rate_per_hour}</td>
          <td>{calculation.mc_up_time}</td>
          <td>{calculation.breakdown_time_hr}</td>
          <td>{calculation.num_of_breakdown}</td>
          <td>{calculation.mttr}</td>
          <td>{calculation.mtbf}</td>
          <td>{calculation.production_loss}</td>
          <td>
          <Link className="btn btn-info" to={`/MttrAndMtbfCalulations/Medit/${calculation.sr_no}`}>Update</Link>

          <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(calculation.sr_no);
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
export default MttrAndMtbf;

















 
// import { useEffect, useState } from "react";
// import mttrAndMtbfService from "../services/mttrAndMtbf.service";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";


// const MttrAndMtbf = () => {

//   const [calculations,setCalculation] =useState([]);

//   const init = () => {
//     mttrAndMtbfService.getAll()
//       .then(response => {
//         console.log('Printing MTTR And MTBF Calculation data', response.data);
//         setCalculation(response.data);
//       })
//       .catch(error => {
//         console.log('Something went wrong', error);
//       }) 
//   }

//   useEffect(() => {
//     init();
//   }, []);

//   const handleDelete = (id) => {
//     console.log('Printing id', id);
//     mttrAndMtbfService.remove(id)
//       .then(response => {
//         console.log('MTTR And MTBF Calculation data deleted successfully', response.data);
//         init();
//       })
//       .catch(error => {
//         console.log('Something went wrong', error);
//       })
//   }

//   return ( 
//     <div className="container">
//       <h3> MTTR And MTBF Calculation data</h3>
//       <hr/>
//     <div>
//     <Link to="/addMttrAndMtbf" className="btn btn-primary mb-2">Add MTTR And MTBF Calculation data</Link>
//     <table className="table table-bordered table-striped ">
//     <thead className="thead-dark">
//     <tr>
//       {/* <th>srNo</th> */}
//       <th>mcId</th>
//       <th>mcrRate/hr</th>
//       <th>mcUpTime</th>
//       <th>breakdownTimeHr</th>
//       <th>numOfBreakdown</th>
//       <th>mttr</th>
//       <th>mtbf</th>
//       <th>productionLoss</th>
//       <th>Actions</th>
//     </tr>
//     </thead>
//     <tbody>
//     {
//         calculations.map(calculation=> (
//         <tr key={calculation.sr_no}>
//           <td>{calculation.mcId}</td>
//           <td>{calculation.mcrRatePerHr}</td>
//           <td>{calculation.mcUpTime}</td>
//           <td>{calculation.breakdownTimeHr}</td>
//           <td>{calculation.numOfBreakdownr}</td>
//           <td>{calculation.mttr}</td>
//           <td>{calculation.mtbf}</td>
//           <td>{calculation.productionLoss}</td>
//           <td>
//           <Link className="btn btn-info" to={`/MttrAndMtbfCalulations/Medit/${calculation.sr_no}`}>Update</Link>

//           <button className="btn btn-danger ml-2" onClick={() => {
//                     handleDelete(calculation.sr_no);
//                   }}>Delete</button> 
//           </td>
//         </tr>
//       ))
//     }
// </tbody>
//     </table>
//     </div>
//     </div>
//   );
//   }
// export default MttrAndMtbf;