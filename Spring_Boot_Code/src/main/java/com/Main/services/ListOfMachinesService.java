package com.Main.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Main.entity.ListOfMachines;

 

	@Service
	public interface ListOfMachinesService {


	public List<ListOfMachines> getListOfMachines();
	
	public ListOfMachines getListOfMachines(long Id);
	
	public ListOfMachines addListOfMachines(ListOfMachines listOfMachines);
	
	public ListOfMachines updateListOfMachines(ListOfMachines listOfMachines);

	public void deleteListOfMachines(long parselLong);
	
}
