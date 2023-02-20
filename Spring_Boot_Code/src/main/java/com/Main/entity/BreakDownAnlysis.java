package com.Main.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
@Entity
public class BreakDownAnlysis {

	@Id	
	@GeneratedValue(generator = "BdAnly_seq",strategy=GenerationType.SEQUENCE)
	@SequenceGenerator(name = "BdAnly_seq",sequenceName = "BdAnly_seq",initialValue = 1)
	private Long sr_no;
	private String mc_id;
	private Date date;
	private String shift;
	private String bdtime;
	private String bdhrs;
	private String natureofbreakedown;
	private String actiontaken;
	private String spearused;
	private String sprearcost;
	private String techicionname;
	private String remark;
	public BreakDownAnlysis() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BreakDownAnlysis(Long sr_no, String mc_id, Date date, String shift, String bdtime, String bdhrs,
			String natureofbreakedown, String actiontaken, String spearused, String sprearcost, String techicionname,
			String remark) {
		super();
		this.sr_no = sr_no;
		this.mc_id = mc_id;
		this.date = date;
		this.shift = shift;
		this.bdtime = bdtime;
		this.bdhrs = bdhrs;
		this.natureofbreakedown = natureofbreakedown;
		this.actiontaken = actiontaken;
		this.spearused = spearused;
		this.sprearcost = sprearcost;
		this.techicionname = techicionname;
		this.remark = remark;
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getShift() {
		return shift;
	}
	public void setShift(String shift) {
		this.shift = shift;
	}
	public String getBdtime() {
		return bdtime;
	}
	public void setBdtime(String bdtime) {
		this.bdtime = bdtime;
	}
	public String getBdhrs() {
		return bdhrs;
	}
	public void setBdhrs(String bdhrs) {
		this.bdhrs = bdhrs;
	}
	public String getNatureofbreakedown() {
		return natureofbreakedown;
	}
	public void setNatureofbreakedown(String natureofbreakedown) {
		this.natureofbreakedown = natureofbreakedown;
	}
	public String getActiontaken() {
		return actiontaken;
	}
	public void setActiontaken(String actiontaken) {
		this.actiontaken = actiontaken;
	}
	public String getSpearused() {
		return spearused;
	}
	public void setSpearused(String spearused) {
		this.spearused = spearused;
	}
	public String getSprearcost() {
		return sprearcost;
	}
	public void setSprearcost(String sprearcost) {
		this.sprearcost = sprearcost;
	}
	public String getTechicionname() {
		return techicionname;
	}
	public void setTechicionname(String techicionname) {
		this.techicionname = techicionname;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	@Override
	public String toString() {
		return "BreakDownAnlysis [sr_no=" + sr_no + ", mc_id=" + mc_id + ", date=" + date + ", shift=" + shift
				+ ", bdtime=" + bdtime + ", bdhrs=" + bdhrs + ", natureofbreakedown=" + natureofbreakedown
				+ ", actiontaken=" + actiontaken + ", spearused=" + spearused + ", sprearcost=" + sprearcost
				+ ", techicionname=" + techicionname + ", remark=" + remark + "]";
	}
	
	
}
