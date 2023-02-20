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

 
import com.Main.entity.MttrAndMtbfCalulation;
import com.Main.services.MttrAndMtbfCalulationService;
@CrossOrigin()
@RestController
public class MttrAndMtbfCalulationCtrl {

	@Autowired
	private MttrAndMtbfCalulationService mttrAndMtbfCalulationService;
	
	@GetMapping("/MttrAndMtbfCalulationPage")
	public String MainPages() {
		return "wellcome to Industry document managment system MttrAndMtbfCalulation Page ";		
	}
	
	// get all  data 
	
	@GetMapping("/MttrAndMtbfCalulations")
	public List<MttrAndMtbfCalulation> getMttrAndMtbfCalulation(){
		return this.mttrAndMtbfCalulationService.getMttrAndMtbfCalulation();
		
	}
	// get by sr_no  data 
	@GetMapping("/MttrAndMtbfCalulations/{sr_no}")
	public Long getMttrAndMtbfCalulation(@PathVariable long sr_no) {
		return  this.mttrAndMtbfCalulationService.getMttrAndMtbfCalulation(sr_no).getSr_no();
		
	}
	
	//ListOfMachiness   using  post
	
	@PostMapping(path="/MttrAndMtbfCalulations",consumes="application/json")
	public MttrAndMtbfCalulation addMttrAndMtbfCalulation(@RequestBody MttrAndMtbfCalulation mttrAndMtbfCalulation  ) {
		return this.mttrAndMtbfCalulationService.addMttrAndMtbfCalulation(mttrAndMtbfCalulation);
		
	}
	
	//MttrAndMtbfCalulation update using put
	
	@PutMapping("/MttrAndMtbfCalulations")
	public MttrAndMtbfCalulation updateMttrAndMtbfCalulation(@RequestBody MttrAndMtbfCalulation mttrAndMtbfCalulation) {
		return this.mttrAndMtbfCalulationService.updateMttrAndMtbfCalulation(mttrAndMtbfCalulation);
		
	}
	
	//delete MttrAndMtbfCalulation   using delete
	@DeleteMapping("/MttrAndMtbfCalulations/{sr_no}")
	public ResponseEntity<HttpStatus> deleteMttrAndMtbfCalulation(@PathVariable String sr_no){
		
			this.mttrAndMtbfCalulationService.deleteMttrAndMtbfCalulation(Long.parseLong(sr_no));
			return new ResponseEntity<>(HttpStatus.OK);
	
	}
	
}








 