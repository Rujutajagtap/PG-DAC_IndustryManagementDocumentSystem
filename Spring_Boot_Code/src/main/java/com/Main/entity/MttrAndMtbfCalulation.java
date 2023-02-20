package com.Main.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class MttrAndMtbfCalulation {

	 @Id
	 @GeneratedValue(generator = "MttrMtbfCal_seq",strategy=GenerationType.SEQUENCE)
	 @SequenceGenerator(name = "MttrMtbfCal_seq",sequenceName = "MttrMtbfCal_seq",initialValue = 1)
	private long sr_no;    
	private String mc_id;
	private double mcr_rate_per_hour;    
	private double mc_up_time ;   
	private double	breakdown_time_hr;  
	private int num_of_breakdown;
	private double mttr;
	private double mtbf;
	private double production_loss;
	public MttrAndMtbfCalulation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MttrAndMtbfCalulation(long sr_no, String mc_id, double mcr_rate_per_hour, double mc_up_time,
			double breakdown_time_hr, int num_of_breakdown, double mttr, double mtbf, double production_loss) {
		super();
		this.sr_no = sr_no;
		this.mc_id = mc_id;
		this.mcr_rate_per_hour = mcr_rate_per_hour;
		this.mc_up_time = mc_up_time;
		this.breakdown_time_hr = breakdown_time_hr;
		this.num_of_breakdown = num_of_breakdown;
		this.mttr = mttr;
		this.mtbf = mtbf;
		this.production_loss = production_loss;
	}
	public long getSr_no() {
		return sr_no;
	}
	public void setSr_no(long sr_no) {
		this.sr_no = sr_no;
	}
	public String getMc_id() {
		return mc_id;
	}
	public void setMc_id(String mc_id) {
		this.mc_id = mc_id;
	}
	public double getMcr_rate_per_hour() {
		return mcr_rate_per_hour;
	}
	public void setMcr_rate_per_hour(double mcr_rate_per_hour) {
		this.mcr_rate_per_hour = mcr_rate_per_hour;
	}
	public double getMc_up_time() {
		return mc_up_time;
	}
	public void setMc_up_time(double mc_up_time) {
		this.mc_up_time = mc_up_time;
	}
	public double getBreakdown_time_hr() {
		return breakdown_time_hr;
	}
	public void setBreakdown_time_hr(double breakdown_time_hr) {
		this.breakdown_time_hr = breakdown_time_hr;
	}
	public int getNum_of_breakdown() {
		return num_of_breakdown;
	}
	public void setNum_of_breakdown(int num_of_breakdown) {
		this.num_of_breakdown = num_of_breakdown;
	}
	public double getMttr() {
		return mttr;
	}
	public void setMttr(double mttr) {
		this.mttr = mttr;
	}
	public double getMtbf() {
		return mtbf;
	}
	public void setMtbf(double mtbf) {
		this.mtbf = mtbf;
	}
	public double getProduction_loss() {
		return production_loss;
	}
	public void setProduction_loss(double production_loss) {
		this.production_loss = production_loss;
	}
	@Override
	public String toString() {
		return "MttrAndMtbfCalulation [sr_no=" + sr_no + ", mc_id=" + mc_id + ", mcr_rate_per_hour=" + mcr_rate_per_hour
				+ ", mc_up_time=" + mc_up_time + ", breakdown_time_hr=" + breakdown_time_hr + ", num_of_breakdown="
				+ num_of_breakdown + ", mttr=" + mttr + ", mtbf=" + mtbf + ", production_loss=" + production_loss + "]";
	}
	
	
	 
}