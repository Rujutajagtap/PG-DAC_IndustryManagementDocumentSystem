package com.Main.dao;

 
import org.springframework.data.jpa.repository.JpaRepository;

import com.Main.entity.Attendance;

public interface AttendanceDao extends JpaRepository<Attendance, Long>{

}
