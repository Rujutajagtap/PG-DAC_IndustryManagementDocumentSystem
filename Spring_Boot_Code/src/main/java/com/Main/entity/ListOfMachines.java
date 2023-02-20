package com.Main.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class ListOfMachines {

	 @Id
	 @GeneratedValue(generator = "BdAnly_seq",strategy=GenerationType.SEQUENCE)
	 private Long sr_no; 
	 private String  mc_id;
	 private String  name_of_machine;
	 private String   make; 
	 private String code_num; 
	 private Date  mfd_date;
	public ListOfMachines() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ListOfMachines(Long sr_no, String mc_id, String name_of_machine, String make, String code_num,
			Date mfd_date) {
		super();
		this.sr_no = sr_no;
		this.mc_id = mc_id;
		this.name_of_machine = name_of_machine;
		this.make = make;
		this.code_num = code_num;
		this.mfd_date = mfd_date;
	}
	public Long getSr_no() {
		return sr_no;
	}
	public void setSr_no(Long sr_no) {
		this.sr_no = sr_no;
	}
	public String getMc_id() {
		return mc_id;
	}
	public void setMc_id(String mc_id) {
		this.mc_id = mc_id;
	}
	public String getName_of_machine() {
		return name_of_machine;
	}
	public void setName_of_machine(String name_of_machine) {
		this.name_of_machine = name_of_machine;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getCode_num() {
		return code_num;
	}
	public void setCode_num(String code_num) {
		this.code_num = code_num;
	}
	public Date getMfd_date() {
		return mfd_date;
	}
	public void setMfd_date(Date mfd_date) {
		this.mfd_date = mfd_date;
	}
	@Override
	public String toString() {
		return "ListOfMachines [sr_no=" + sr_no + ", mc_id=" + mc_id + ", name_of_machine=" + name_of_machine
				+ ", make=" + make + ", code_num=" + code_num + ", mfd_date=" + mfd_date + "]";
	}
	 
	 
	 
	 
	 
	 
	 
}
