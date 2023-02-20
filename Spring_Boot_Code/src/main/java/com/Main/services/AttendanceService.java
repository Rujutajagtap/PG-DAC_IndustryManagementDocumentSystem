package com.Main.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Main.entity.Attendance;

 
@Service
public interface AttendanceService {


	public List<Attendance> getAttendance();
	
	public Attendance getByIdAttendance(long Id);
	
	public Attendance addAttendance(Attendance attendance);
	
	public Attendance updateAttendance(Attendance attendance);

	public void deleteAttendance(long parselLong);


	 
	
}
