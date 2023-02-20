import React from "react";
import {useEffect} from React

useEffect(() => {
    if (id) {
        attendanceService.get(id)
            .then(attendance => {
                setShift(attendance.data.shift);
                setEmpid(attendance.data.empId);
                setEmpname(attendance.data.empName);
                setRemark(attendance.data.remark);
                setDate(attendance.data.date);
              
     });

     
    }})