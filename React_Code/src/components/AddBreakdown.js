import { useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
// import { Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import breakdownService from "../services/breakdown.service";
const AddBreakdown  = () => {


	
 
    const [mc_id,setMcid] = useState('');
    const [date,setDate] = useState('');
    const [shift,setShift] = useState('');
    const [bdtime,setbdtime] = useState('');
    const [bdhrs,setBdhrs] = useState('');
    const [natureofbreakedown,setNatureofbreakedown] = useState('');
    const [actiontaken,setActiontaken] = useState('');
    const [spearused,setSpearused] = useState('');
    const [sprearcost,setSprearcost] = useState('');
    const [techicionname,settechicionname] = useState('');
    const [remark,setRemark] = useState('');
    const history =useNavigate('');
    const {sr_no} = useParams();

    const saveBreakdown =(e) => {
        e.preventDefault();

        const breakdown ={sr_no,
        mc_id,date,shift,bdtime,bdhrs,natureofbreakedown,actiontaken,spearused,techicionname,remark};
           
         
        if (sr_no) {
            //update 
            breakdownService.update(breakdown)
                .then(response => {
                    console.log('Break-Down Anyalisis data updated successfully', response.data);
                    history('/breakDown');
                })
                .catch(error => {
                    console.log('Something went wrong!!', error);
                })
        } else {
          //create new record
          breakdownService.create(breakdown)
            .then(response => {
               console.log('Break-Down Analysis data added successfully',response.data);
               history('/breakDown');
            })
            .catch(error => {
              console.log('Somthing went wrong',error);
            })
        }
     }
      useEffect(() => {
        if (sr_no) {
            breakdownService.get(sr_no)
                .then(breakdown => {
                    setMcid(breakdown.data.mc_id);
                    setDate(breakdown.data.date);
                    setShift(breakdown.data.shift);
                    setbdtime(breakdown.data.bdtime);
                    setBdhrs(breakdown.data.bdhrs);
                    setNatureofbreakedown(breakdown.data.natureofbreakedown);
                    setActiontaken(breakdown.data.actiontaken);
                    setSpearused(breakdown.data.spearused)
                    setSprearcost(breakdown.data.sprearcost)
                    settechicionname(breakdown.data.techicionname)
                    setRemark(breakdown.data.remark)



         })
         .catch(error => {
             console.log('Something went wrong', error);
                            })
        
   
        }
}, [])
         
 return (  
        <div className="container">
            <h3>Add Breakdown Analysis</h3>
            <hr/>
            <form>
            <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="mc_id"
                   value={mc_id}
                   onChange={(e) => setMcid(e.target.value)}
                   placeholder="Enter mc_id"
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
            {/* //  const [shift,setShift] = useState('');
    //  const [bdtime,setbdtime] = useState('');
    //  const [bdhrs,setBdhrs] = useState('');
    //  const [natureofbreakedown,setNatureofbreakedown] = useState('');
    //  const [actiontaken,setActiontaken] = useState('');
    //  const [spearused,setSpearused] = useState('');
    //  const [sprearcost,setSprearcost] = useState('');
    //  const [techicionname,settechicionname] = useState('');
    //  const [remark,setRemark] = useState(''); */}
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
                   id="bdtime"
                   value={bdtime}
                   onChange={(e) => setbdtime(e.target.value)}
                   placeholder="Enter bdtime"
                   />
            </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="bdhrs"
                   value={bdhrs}
                   onChange={(e) => setBdhrs(e.target.value)}
                   placeholder="Enter bdhrs"
                   />
             </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="natureofbreakedown"
                   value={natureofbreakedown}
                   onChange={(e) => setNatureofbreakedown(e.target.value)}
                   placeholder="Enter natureofbreakedown"
                   />
             </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="actiontaken"
                   value={actiontaken}
                   onChange={(e) => setActiontaken(e.target.value)}
                   placeholder="Enter actiontaken"
                   />
             </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="spearused"
                   value={spearused}
                   onChange={(e) => setSpearused(e.target.value)}
                   placeholder="Enter spearused"
                   />
             </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="sprearcost"
                   value={sprearcost}
                   onChange={(e) => setSprearcost(e.target.value)}
                   placeholder="Enter sprearcost"
                   />
             </div>

             <div className="form-group">
                <input
                   type="text"
                   className="form-control col-4"
                   id="techicionname"
                   value={techicionname}
                   onChange={(e) => settechicionname(e.target.value)}
                   placeholder="Enter techicionname"
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

             <div>
                    <button onClick={(e) => saveBreakdown(e)} className="btn btn-primary" >Save</button>
                    {/* <button className="btn btn-primary" onClick={(e) =>saveAttendance(e)}>Save</button> */}
             </div>
            </form>
            <hr/>
            <Link to="/breakDown">Back </Link>
        </div>
  
    )
        
    
}
    
export default AddBreakdown ;