package com.Main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Main.dao.BreakDownAnlysisDao;
import com.Main.entity.BreakDownAnlysis;

@Service
public class BreakDownAnlysisServiceimpl implements BreakDownAnlysisService{
	
	@Autowired
	private BreakDownAnlysisDao breakdownanlysisDao;
	@Override
	public List<BreakDownAnlysis> getBreakDownAnlysis() {
		// TODO Auto-generated method stub
		return breakdownanlysisDao.findAll();
	}

	@Override
	public BreakDownAnlysis getBreakDownAnlysis(long Id) {
		// TODO Auto-generated method stub
		return breakdownanlysisDao.getOne(Id);
	}

	@Override
	public BreakDownAnlysis addBreakDownAnlysis(BreakDownAnlysis breakdownanlysis) {
		breakdownanlysisDao.save(breakdownanlysis);
		return breakdownanlysis;
	}

	@Override
	public BreakDownAnlysis updateBreakDownAnlysis(BreakDownAnlysis breakdownanlysis) {
		breakdownanlysisDao.save(breakdownanlysis);
		return breakdownanlysis;
	}

	@Override
	public void deleteBreakDownAnlysis(long parselLong) {
		BreakDownAnlysis entity=breakdownanlysisDao.getById(parselLong);
		
		breakdownanlysisDao.delete(entity);
		
	}

	 
}
