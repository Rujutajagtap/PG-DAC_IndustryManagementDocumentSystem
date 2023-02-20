
import { useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
 
import { useEffect } from "react";
import attendanceService from "../services/attendance.service";
const AddAttendance  = () => {

 

    const [shift,setShift] = useState('');
    const [empId,setEmpid] = useState('');
    const [empName,setEmpname] = useState('');
    const [remark,setRemark] = useState('');
    const [date,setDate] = useState('');
    const history =useNavigate('');
    const {id} = useParams();

    const saveAttendance =(e) => {
        e.preventDefault();

        const attendance ={id,
        shift,empId,empName,remark,date};
           
         
        if (id) {
            //update 
            attendanceService.update(attendance)
                .then(response => {
                    console.log('Employee Attendance data updated successfully', response.data);
                    history('/empAttendance');
                })
                .catch(error => {
                    console.log('Something went wrong!!', error);
                })
        } else {
          //create new record
            attendanceService.create(attendance)
            .then(response => {
               console.log('Emloyee Attendance Data added successfully',response.data);
               history('/empAttendance');
            })
            .catch(error => {
              console.log('Somthing went wrong',error);
            })
        }
     }

      useEffect(() => {
        if (id) {
            attendanceService.get(id)
                .then(attendance => {
                    setShift(attendance.data.shift);
                    setEmpid(attendance.data.empId);
                    setEmpname(attendance.data.empName);
                    setRemark(attendance.data.remark);
                    setDate(attendance.data.date);
                  
         })
         .catch(error => {
             console.log('Something went wrong', error);
                            })
        
        }
}, [])
         
 return (  
        <div className="container">
            <h3>Add or Update Employees Attendance</h3>
            <hr/>
            <form>
            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="shift"
                   value={shift}
                   onChange={(e) => setShift(e.target.value)}
                   placeholder="Enter shift"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="empId"
                   value={empId}
                   onChange={(e) => setEmpid(e.target.value)}
                   placeholder="Enter empId"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="empName"
                   value={empName}
                   onChange={(e) => setEmpname(e.target.value)}
                   placeholder="Enter empName"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="remark"
                   value={remark}
                   onChange={(e) => setRemark(e.target.value)}
                   placeholder="Enter remark"
                   />
            </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}
                   placeholder="Enter date"
                   />
             </div>
             <div>
                    <button onClick={(e) => saveAttendance(e)} className="btn btn-primary" >Save</button>
             </div>
            </form>
            <hr/>
            <Link to="/empAttendance">Back </Link><br />
            
        </div>
  
    )
        
    
}
    
export default AddAttendance ;








// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

// function AddAttendance(){
   
//     const [attendance,setAttendance]=useState({
//         "shift":"",
//         "empId":"",
//         "empName":"",
//         "remark":"",
//         "date":"",
//     })
//     const [errors,setErrors]=useState({})
//     const [submitted,setSubmitted]=useState(false)
//     const history=useHistory()


//     const handleInput=e=>{
//         setAttendance({...attendance,[e.target.name]:e.target.value})
//     }

   

//     const handleSubmit=e=>{
//         e.preventDefault()
//         setSubmitted(true)
//     }

//     useEffect(()=>{
//         console.log(errors)
//         if(Object.keys(errors).length===0 && submitted){
//             const formData=new FormData()
//             formData.append("shift",attendance.shift)
//             formData.append("empId",attendance.empId)
//             formData.append("empName",attendance.empName)
//             formData.append("remark",attendance.remark)
//             formData.append("date",attendance.date)
            
//             console.log(attendance)
//             axios.post('http://localhost:7575/Attendances',formData)
//             .then(resp=>{
//                 let result=resp.data.data;
//                 console.log(result) 
//                 alert("Product saved successfully")               
//                 history.push("/")
//             })
//             .catch(error=>{
//                 console.log("Error",error);
//                 alert("Error saving product")
//             })            
//         }
//     },[errors])
//     return (
//         <div className="container pt-2">
//                 <div className="card shadow bg-transparent text-black">
//                     <div className="card-body">
//                     <div className="row">
                        
//                         <div className="col-sm-6">
//                             <h4 className="text-center p-2">
//                               Add Employee Attendance
//                             </h4>
//                             <form onSubmit={handleSubmit}>
//                             <div className="form-group form-row">
//                                 <label className="col-sm-4 form-control-label">Shift</label>
//                                 <div className="col-sm-8">
//                                     <input type="text" name="pname" value={attendance.shift} onChange={handleInput} className="form-control" />
//                                     {/* {errors.pname && <small className="text-danger float-right">{errors.pname}</small>} */}
//                                 </div>    
//                             </div>
                                                        
//                             <div className="form-group form-row">
//                                 <label className="col-sm-4 form-control-label"><b>EmpId</b></label>
//                                 <div className="col-sm-8">
//                                     <input type="number" name="price" value={attendance.empId} onChange={handleInput} className="form-control" />
//                                     {/* {errors.price && <small className="text-danger float-right">{errors.empId}</small>} */}
//                                 </div>                                
//                             </div>

//                             <div className="form-group form-row">
//                                 <label className="col-sm-4 form-control-label"><b>EmpName</b></label>
//                                 <div className="col-sm-8">
//                                     <input type="number" name="stock" value={attendance.empName} onChange={handleInput} className="form-control" />
//                                     {/* {errors.stock && <small className="text-danger float-right">{errors.empName}</small>} */}
//                                 </div>                                
//                             </div>

//                             <div className="form-group form-row">
//                                 <label className="col-sm-4 form-control-label"><b>remark</b></label>
//                                 <div className="col-sm-8">
//                                     <input type="file" required name="remark" value={attendance.remark} onChange={handleFileInput} className="form-control-file" />                                    
//                                 </div>                                
//                             </div>

//                             <div className="form-group form-row">
//                                 <label className="col-sm-4 form-control-label"><b>date</b></label>
//                                 <div className="col-sm-8">
//                                     <input type="file" required name="date" value={attendance.date} onChange={handleFileInput} className="form-control-file" />                                    
//                                 </div>                                
//                             </div>

//                             <button className="btn btn-primary float-right text-white">Save </button>
                            
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddAttendance;

