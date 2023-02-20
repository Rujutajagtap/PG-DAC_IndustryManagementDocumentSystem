package com.Main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.dao.ListOfMachinesDao;
import com.Main.entity.ListOfMachines;

@Service
public class ListOfMachinesServiceimpl implements ListOfMachinesService {

	@Autowired
	private ListOfMachinesDao listOfMachinesDao;
	 
	
	@Override
	public List<ListOfMachines> getListOfMachines() {
		// TODO Auto-generated method stub
		return  listOfMachinesDao.findAll();
	}

	@Override
	public ListOfMachines getListOfMachines(long Id) {
		// TODO Auto-generated method stub
		ListOfMachines entity=listOfMachinesDao.getById(Id);
		
		return entity;
		//return listOfMachinesDao.getOne(Id);
		 
				
	}

	@Override
	public ListOfMachines addListOfMachines(ListOfMachines listOfMachines) {
		listOfMachinesDao.save(listOfMachines);
		return listOfMachines;
	}
	@Override
	public ListOfMachines updateListOfMachines(ListOfMachines listOfMachines) {
		listOfMachinesDao.save(listOfMachines);
		return listOfMachines;
	}

	@Override
	public void deleteListOfMachines(long parselLong) {
		ListOfMachines entity=listOfMachinesDao.getById(parselLong);
		
		listOfMachinesDao.delete(entity);
	}

}
