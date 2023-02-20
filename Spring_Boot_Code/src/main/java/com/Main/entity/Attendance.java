package com.Main.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
public class Attendance {

	@Id	
	@GeneratedValue(generator = "Attendance_seq",strategy=GenerationType.SEQUENCE)
	@SequenceGenerator(name = "Attendance_seq",sequenceName = "Attendance_seq",initialValue = 1)
	private Long id;
	private String shift;
	
	@Column(unique=true)
	private String empId;
	private String empName;
	private boolean remark;
	private Date date;
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Attendance(Long id, String shift, String empId, String empName, boolean remark, Date date) {
		super();
		this.id = id;
		this.shift = shift;
		this.empId = empId;
		this.empName = empName;
		this.remark = remark;
		this.date = date;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getShift() {
		return shift;
	}
	public void setShift(String shift) {
		this.shift = shift;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public boolean isRemark() {
		return remark;
	}
	public void setRemark(boolean remark) {
		this.remark = remark;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Attendance [id=" + id + ", shift=" + shift + ", empId=" + empId + ", empName=" + empName + ", remark="
				+ remark + ", date=" + date + "]";
	}
 
 
	
	
	
}
