package com.Main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Main.entity.Attendance;
import com.Main.services.AttendanceService;

@CrossOrigin()
@RestController
public class AttendanceCtrl {

	@Autowired
	private AttendanceService attendanceService;
	
	
	@GetMapping("/Attendances")
	public List<Attendance> getAttendances(){
		return this.attendanceService.getAttendance();
		
	}
	
	// get specific data by id 
	
	@GetMapping("/Attendances/{id}")
	public Long getAttendances(@PathVariable long id) {
		return  this.attendanceService.getByIdAttendance(id).getId();
		
		//getOne(id).get();
		//return this.findById().get();
	}
	
	//addattendance   using  post
	
	@PostMapping(path="/Attendances",consumes="application/json")
	public Attendance addAttendance(@RequestBody Attendance attendance  ) {
		return this.attendanceService.addAttendance(attendance);
		
	}
	//attendance update using put
	
	@PutMapping("/Attendances")
	public Attendance updateAttendance(@RequestBody Attendance attendance) {
		return this.attendanceService.updateAttendance(attendance);
		
	}
	@DeleteMapping("/Attendancesdel/{id}")
	public ResponseEntity<HttpStatus> deleteAttendance(@PathVariable String id){
	
		this.attendanceService.deleteAttendance(Long.parseLong(id));
		return new ResponseEntity<>(HttpStatus.OK);
	}
}


















 
	 
	
	


