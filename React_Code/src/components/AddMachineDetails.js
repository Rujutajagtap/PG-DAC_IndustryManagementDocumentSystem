
import { useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
// import { Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import machineService from "../services/machine.service";
const AddMachineDetails = () => {



    const [mc_id,setMcid] = useState('');
    const [name_of_machine,setMachinename] = useState('');
    const [make,setMake] = useState('');
    const [code_num,setCodenum] = useState('');
    const [mfd_date,setMfddate] = useState('');
    const history =useNavigate('');
    const {sr_no} = useParams();

    const saveMachine =(e) => {
        e.preventDefault();

        const machine ={sr_no,mc_id,
        name_of_machine,make,code_num,mfd_date};
           
         
        if (sr_no) {
            //update 
            machineService.update(machine)
                .then(response => {
                    console.log('Machine Details data updated successfully', response.data);
                    history('/machineDetails');
                })
                .catch(error => {
                    console.log('Something went wrong!!', error);
                })
        } else {
          //create new record
          machineService.create(machine)
            .then(response => {
               console.log('Machine Details Data added successfully',response.data);
               history('/machineDetails');
            })
            .catch(error => {
              console.log('Somthing went wrong',error);
            })
        }
     }






      useEffect(() => {
        if (sr_no) {
            machineService.get(sr_no)
                .then(machine => {
                    setMcid(machine.data.mc_id);
                    setMachinename(machine.data.name_of_machine);
                    setMake(machine.data.make);
                    setCodenum(machine.data.code_num);
                    setMfddate(machine.data.mfd_date);
                  
         })
         .catch(error => {
             console.log('Something went wrong', error);
                            })
        
        }
}, [])
         
 return (  
        <div className="container">
            <h3>Add Machine Details</h3>
            <hr/>
            <form>
            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mc_id"
                   value={mc_id}
                   onChange={(e) =>  setMcid(e.target.value)}
                   placeholder="Enter mc_id"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="name_of_machine"
                   value={name_of_machine}
                   onChange={(e) =>  setMachinename(e.target.value)}
                   placeholder="Enter name_of_machine"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="make"
                   value={make}
                   onChange={(e) => setMake(e.target.value)}
                   placeholder="Enter make"
                   />
            </div>

            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="code_num"
                   value={code_num}
                   onChange={(e) => setCodenum(e.target.value)}
                   placeholder="Enter code_num"
                   />
            </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mfd_date"
                   value={mfd_date}
                   onChange={(e) => setMfddate(e.target.value)}
                   placeholder="Enter mfd_date"
                   />
             </div>
             <div>
                    <button onClick={(e) => saveMachine(e)} className="btn btn-primary" >Save</button>
             </div>
            </form>
            <hr/>
            <Link to="/machineDetails">Back </Link>
        </div>
  
    )
        
    
}
    
export default AddMachineDetails ;