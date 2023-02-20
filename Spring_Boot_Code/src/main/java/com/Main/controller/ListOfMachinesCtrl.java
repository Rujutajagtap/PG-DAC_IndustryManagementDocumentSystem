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

import com.Main.entity.ListOfMachines;
import com.Main.services.ListOfMachinesService;
@CrossOrigin()
@RestController
public class ListOfMachinesCtrl {

	@Autowired
	private ListOfMachinesService listOfMachinesService;
	
	@GetMapping("/ListOfMachinePage")
	public String MainPages() {
		return "wellcome to Industry document managment system ListOfMachine Page ";
		
	}
	
	// get all  data 
	
	@GetMapping("/ListOfMachiness")
	public List<ListOfMachines> getListOfMachines(){
		return this.listOfMachinesService.getListOfMachines();
		
	}
	 
	// get by sr_no  data 
		@GetMapping("/ListOfMachiness/{sr_no}")
		public Long getListOfMachines(@PathVariable long sr_no) {
			return  this.listOfMachinesService.getListOfMachines(sr_no).getSr_no();
			
		}
	
	//ListOfMachiness   using  post
	
	@PostMapping(path="/ListOfMachiness",consumes="application/json")
	public ListOfMachines addBreakDownAnlysis(@RequestBody ListOfMachines listOfMachines  ) {
		return this.listOfMachinesService.addListOfMachines(listOfMachines);
		
	}
	//ListOfMachiness update using put
	
	@PutMapping("/ListOfMachiness")
	public ListOfMachines updateBreakDownAnlysis(@RequestBody ListOfMachines listOfMachines) {
		return this.listOfMachinesService.updateListOfMachines(listOfMachines);
		
	}
	
	//delete ListOfMachiness   using delete
	@DeleteMapping("/ListOfMachiness/{sr_no}")
	public ResponseEntity<HttpStatus> deleteListOfMachines(@PathVariable String sr_no){
		try {
			this.listOfMachinesService.deleteListOfMachines(Long.parseLong(sr_no));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
}
