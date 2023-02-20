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

import com.Main.entity.BreakDownAnlysis;
import com.Main.services.BreakDownAnlysisService;
@CrossOrigin()
@RestController
public class BreakDownAnlysisCtrl {

	@Autowired
	private BreakDownAnlysisService breakdownanlysisService;
	
	
	@GetMapping("/MainPages")
	public String MainPages() {
		return "wellcome to Industry document managment system ";
		
	}
	
	// get all  data 
	
	@GetMapping("/BreakDownAnlysiss")
	public List<BreakDownAnlysis> getBreakDownAnlysis(){
		return this.breakdownanlysisService.getBreakDownAnlysis();
		
	}
	
//	// get specific data by id 
//	
//	@GetMapping("/BreakDownAnlysiss/{sr_no}")
//	public  BreakDownAnlysis getBreakDownAnlysis(@PathVariable String sr_no) {
//		return this.breakdownanlysisService.getBreakDownAnlysis(Long.parseLong(sr_no));
//		
//	}
	
	// get by sr_no  data 
			@GetMapping("/BreakDownAnlysiss/{sr_no}")
			public Long getBreakDownAnlysis(@PathVariable long sr_no) {
				return  this.breakdownanlysisService.getBreakDownAnlysis(sr_no).getSr_no();
				
			}
	
	
	
	//breakdownanlysis   using  post
	
	@PostMapping(path="/BreakDownAnlysiss",consumes="application/json")
	public BreakDownAnlysis addBreakDownAnlysis(@RequestBody BreakDownAnlysis breakdownanlysis)
	{
		return this.breakdownanlysisService.addBreakDownAnlysis(breakdownanlysis);
		
	}
	//attendance update using put
	
	@PutMapping("/BreakDownAnlysiss")
	public BreakDownAnlysis updateBreakDownAnlysis(@RequestBody BreakDownAnlysis breakdownanlysis) {
		return this.breakdownanlysisService.updateBreakDownAnlysis(breakdownanlysis);
		
	}
	
	//delete attendance   using delete
	@DeleteMapping("/BreakDownAnlysiss/{sr_no}")
	public ResponseEntity<HttpStatus> deleteBreakDownAnlysis(@PathVariable String sr_no){
		try {
			this.breakdownanlysisService.deleteBreakDownAnlysis(Long.parseLong(sr_no));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
}
