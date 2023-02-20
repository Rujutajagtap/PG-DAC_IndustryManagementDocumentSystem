//import { Route, Routes } from 'react-router';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Audit from './components/Audit';
import Maintainance from './components/Maintainance';
import MachineList from './components/MachineList';
import Break from './components/Break';
import Managerdept from './components/Managerdept';
import MachineDetails from './components/MachineDetails';
import AddMachineDetails from './components/AddMachineDetails';
import NotFound from "./components/NotFound";
import MttrAndMtbf from './components/MttrAndMtbf';
import AddMttrAndMtbf from './components/AddMttrAndMtbf';
import AddAttendance from "./components/AddAttendance";
import EmpAttendance from "./components/EmpAttendance";
import BreakDown from "./components/BreakDown";
import AddBreakdown from "./components/AddBreakdown";
import Manager from "./components/Manager";

import UserList from "./components/UserList";
import ViewAttendance from "./components/ViewAttendance";
//import ViewManagerService from "./services/ViewManagerService";

function App() {
  return (
    
    
      <Routes>
        
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/audit" element={<Audit/>} />
        <Route path="/maintainance" element={<Maintainance/>} />
        {/* <Route path="/viewAttendance" element={<ViewAttendance/>} />       */}
        <Route path="/UserList" element={<UserList/>} />

        <Route path="/managerdept" element={<Managerdept/>} />  
        <Route path="/manager" element={<Manager/>} />
        <Route path="/viewAttendance" element={<ViewAttendance/>} /> 
        <Route  path="/viewAttendance/edit/:id" element={<ViewAttendance/>} />
       
        

        <Route path="/empAttendance" element={<EmpAttendance/>} />
        <Route path="/addAttendance" element={<AddAttendance/>} />
        <Route  path="/Attendances/edit/:id" element={<AddAttendance/>} />
       
        <Route path="/machineList" element={<MachineList/>} />  
        <Route path="/machineDetails" element={<MachineDetails/>} /> 
        <Route  path="/addMachineDetails" element={<AddMachineDetails/>} />
        <Route  path="/ListOfMachiness/Mdedit/:sr_no" element={<AddMachineDetails/>} />

        <Route  path="/mttrAndMtbf" element={<MttrAndMtbf/>} />
        <Route  path="/addMttrAndMtbf" element={<AddMttrAndMtbf/>} />
        <Route  path="/MttrAndMtbfCalulations/Medit/:sr_no" element={<AddMttrAndMtbf/>} />

        <Route  path="/breakDown" element={<BreakDown/>} />
        <Route  path="/addBreakdown" element={<AddBreakdown/>} />
        <Route  path="/BreakDownAnlysiss/Bkedit/:sr_no" element={<AddBreakdown/>} /> 
        
        <Route  path="*" element={<NotFound/>} />
        <Route path="/break" element={<Break/>} /> 
       
        
      </Routes>
    
    
  );
}

export default App;




 
 