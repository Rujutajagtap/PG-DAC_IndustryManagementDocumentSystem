import { useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
// import { Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import mttrAndMtbfService from "../services/mttrAndMtbf.service";
const AddMttrAndMtbf  = () => {


   
    // const [sr_no,setSrNo] = useState('');                                    
    const [mc_id,setMcid] = useState('');
    const [mcr_rate_per_hour,setMcrRatePerHr] = useState('');
    const [mc_up_time,setMcUpTime] = useState('');
    const [breakdown_time_hr,setBreakdownTimeHr] = useState('');
    const [num_of_breakdown ,setNumOfBreakdown] = useState('');
    const [mttr,setMttr] = useState('');
    const [mtbf,setMtbf] = useState('');
    const [production_loss,setProductionLoss] = useState('');
    const history =useNavigate('');
    const {sr_no} = useParams();

    const saveCalculation =(e) => {
        e.preventDefault();

        const calculation ={sr_no,mc_id,mcr_rate_per_hour,mc_up_time,breakdown_time_hr,
            num_of_breakdown,mttr,mtbf,production_loss};
           
         
        if (sr_no) {
            //update 
            mttrAndMtbfService.update(calculation)
                .then(response => {
                    console.log('MTTR And MTBF Calculation data updated successfully', response.data);
                    history('/mttrAndMtbf');
                })
                .catch(error => {
                    console.log('Something went wrong!!', error);
                })
        } else {
          //create new record
          mttrAndMtbfService.create(calculation)
            .then(response => {
               console.log('MTTR And MTBF Calculation data added successfully',response.data);
               history('/mttrAndMtbf');
            })
            .catch(error => {
              console.log('Somthing went wrong',error);
            })
        }
     }

      useEffect(() => {
        if (sr_no) {
            mttrAndMtbfService.get(sr_no)
                .then(calculation => {
                    setMcid(calculation.data.mc_id);
                    setMcrRatePerHr(calculation.data.mcr_rate_per_hour);
                    setMcUpTime(calculation.data.mc_up_time);
                    setBreakdownTimeHr(calculation.data.breakdown_time_hr);
                    setNumOfBreakdown(calculation.data.num_of_breakdown);
                    setMttr(calculation.data.mttr);
                    setMtbf(calculation.data.mtbf);
                    setProductionLoss(calculation.data.productionLoss);
                 
                  
         })
         .catch(error => {
             console.log('Something went wrong', error);
                            })
        
        }
}, [])
 return (  
        <div className="container">
            <h3>Add or Update MTTR And MTBF Calculation data</h3>
            <hr/>
            <form>
            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mc_id"
                   value={mc_id}
                   onChange={(e) => setMcid(e.target.value)}
                   placeholder="Enter mc_Id"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mcr_rate_per_hour"
                   value={mcr_rate_per_hour}
                   onChange={(e) => setMcrRatePerHr(e.target.value)}
                   placeholder="Enter mcr_rate_per_hour"
                   />
            </div>

            
            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mc_up_time"
                   value={mc_up_time}
                   onChange={(e) => setMcUpTime(e.target.value)}
                   placeholder="Enter mc_up_time"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="breakdown_time_hr"
                   value={breakdown_time_hr}
                   onChange={(e) => setBreakdownTimeHr(e.target.value)}
                   placeholder="Enter breakdown_time_hr"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="num_of_breakdownn"
                   value={num_of_breakdown}
                   onChange={(e) => setNumOfBreakdown(e.target.value)}
                   placeholder="Enter num_of_breakdown"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mttr"
                   value={mttr}
                   onChange={(e) => setMttr(e.target.value)}
                   placeholder="Enter mttr"
                   />
            </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mtbf"
                   value={mtbf}
                   onChange={(e) => setMtbf(e.target.value)}
                   placeholder="Enter mtbf"
                   />
             </div>


             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="production_loss"
                   value={production_loss}
                   onChange={(e) => setProductionLoss(e.target.value)}
                   placeholder="Enter production_loss"
                   />
             </div>

       
             <div>
                    <button onClick={(e) => saveCalculation(e)} className="btn btn-primary" >Save</button>
             </div>
            </form>
            <hr/>
            <Link to="/mttrAndMtbf">Back </Link>
        </div>
  
    )
        
    
}
    
export default AddMttrAndMtbf ;







// import { useState} from "react";
// import { Link,useNavigate,useParams } from "react-router-dom";
// // import { Link,useNavigate} from "react-router-dom";
// import { useEffect } from "react";
// import mttrAndMtbfService from "../services/mttrAndMtbf.service";
// const AddMttrAndMtbf  = () => {


   
//     // const [sr_no,setSrNo] = useState('');                                    
//     const [mcId,setMcid] = useState('');
//     const [mcrRatePerHr,setMcrRatePerHr] = useState('');
//     const [mcUpTime,setMcUpTime] = useState('');
//     const [breakdownTimeHr,setBreakdownTimeHr] = useState('');
//     const [numOfBreakdown,setNumOfBreakdown] = useState('');
//     const [mttr,setMttr] = useState('');
//     const [mtbf,setMtbf] = useState('');
//     const [productionLoss,setProductionLoss] = useState('');
//     const history =useNavigate('');
//     const {sr_no} = useParams();

//     const saveCalculation =(e) => {
//         e.preventDefault();

//         const calculation ={sr_no,mcId,mcrRatePerHr,mcUpTime,breakdownTimeHr,
//             numOfBreakdown,mttr,mtbf,productionLoss};
           
         
//         if (sr_no) {
//             //update 
//             mttrAndMtbfService.update(calculation)
//                 .then(response => {
//                     console.log('MTTR And MTBF Calculation data updated successfully', response.data);
//                     history('/mttrAndMtbf');
//                 })
//                 .catch(error => {
//                     console.log('Something went wrong!!', error);
//                 })
//         } else {
//           //create new record
//           mttrAndMtbfService.create(calculation)
//             .then(response => {
//                console.log('MTTR And MTBF Calculation data added successfully',response.data);
//                history('/mttrAndMtbf');
//             })
//             .catch(error => {
//               console.log('Somthing went wrong',error);
//             })
//         }
//      }

//       useEffect(() => {
//         if (sr_no) {
//             mttrAndMtbfService.get(sr_no)
//                 .then(calculation => {
//                     setMcid(calculation.data.mcId);
//                     setMcrRatePerHr(calculation.data.mcrRatePerHr);
//                     setMcUpTime(calculation.data.mcUpTime);
//                     setBreakdownTimeHr(calculation.data.breakdownTimeHr);
//                     setNumOfBreakdown(calculation.data.numOfBreakdown);
//                     setMttr(calculation.data.mttr);
//                     setMtbf(calculation.data.mtbf);
//                     setProductionLoss(calculation.data.productionLoss);
                 
                  
//          })
//          .catch(error => {
//              console.log('Something went wrong', error);
//                             })
        
//         }
// }, [])
//  return (  
//         <div className="container">
//             <h3>Add or Update MTTR And MTBF Calculation data</h3>
//             <hr/>
//             <form>
//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="mcId"
//                    value={mcId}
//                    onChange={(e) => setMcid(e.target.value)}
//                    placeholder="Enter mcId"
//                    />
//             </div>

//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="mcrRatePerHr"
//                    value={mcrRatePerHr}
//                    onChange={(e) => setMcrRatePerHr(e.target.value)}
//                    placeholder="Enter mcrRatePerHr"
//                    />
//             </div>

            
//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="mcUpTime"
//                    value={mcUpTime}
//                    onChange={(e) => setMcUpTime(e.target.value)}
//                    placeholder="Enter mcUpTime"
//                    />
//             </div>

//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="breakdownTimeHr"
//                    value={breakdownTimeHr}
//                    onChange={(e) => setBreakdownTimeHr(e.target.value)}
//                    placeholder="Enter breakdownTimeHr"
//                    />
//             </div>

//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="numOfBreakdown"
//                    value={numOfBreakdown}
//                    onChange={(e) => setNumOfBreakdown(e.target.value)}
//                    placeholder="Enter numOfBreakdown"
//                    />
//             </div>

//             <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="mttr"
//                    value={mttr}
//                    onChange={(e) => setMttr(e.target.value)}
//                    placeholder="Enter mttr"
//                    />
//             </div>

//              <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="mtbf"
//                    value={mtbf}
//                    onChange={(e) => setMtbf(e.target.value)}
//                    placeholder="Enter mtbf"
//                    />
//              </div>


//              <div className="form-group">
//                 <input
//                    type="text"
//                    className="form-control col-4"
//                    id="productionLoss"
//                    value={productionLoss}
//                    onChange={(e) => setProductionLoss(e.target.value)}
//                    placeholder="Enter productionLoss"
//                    />
//              </div>

       
//              <div>
//                     <button onClick={(e) => saveCalculation(e)} className="btn btn-primary" >Save</button>
//              </div>
//             </form>
//             <hr/>
//             <Link to="/mttrAndMtbf">Back </Link>
//         </div>
  
//     )
        
    
// }
    
// export default AddMttrAndMtbf ;