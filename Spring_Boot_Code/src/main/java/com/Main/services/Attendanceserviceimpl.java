package com.Main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.dao.AttendanceDao;
import com.Main.entity.Attendance;

@Service
public class Attendanceserviceimpl implements AttendanceService {

	@Autowired
	private AttendanceDao attendanceDao;
	@Override
	public List<Attendance> getAttendance() {
		// TODO Auto-generated method stub
		return attendanceDao.findAll();
	}

	@Override
	public Attendance getByIdAttendance(long Id) {
 
		Attendance entity=	attendanceDao.getById(Id);
		return  entity;
	}

	@Override
	public Attendance addAttendance(Attendance attendance) {
		attendanceDao.save(attendance);
		return attendance;
	}

	@Override
	public Attendance updateAttendance(Attendance attendance) {
		attendanceDao.save(attendance);
		return attendance;
	}

	@Override
	public void deleteAttendance(long parselLong) {
		Attendance entity=attendanceDao.getById(parselLong);
		  attendanceDao.delete(entity);
		
	}
}

 