package com.Main.services;

import java.util.List;

import org.springframework.stereotype.Service;
import com.Main.entity.BreakDownAnlysis;

@Service
public interface BreakDownAnlysisService  {


	public List<BreakDownAnlysis> getBreakDownAnlysis();
	
	
	public BreakDownAnlysis getBreakDownAnlysis(long Id);
	
	public BreakDownAnlysis addBreakDownAnlysis(BreakDownAnlysis breakdownanlysis);
	
	public BreakDownAnlysis updateBreakDownAnlysis(BreakDownAnlysis breakdownanlysis);

	public void deleteBreakDownAnlysis(long parselLong);

	
	
}
