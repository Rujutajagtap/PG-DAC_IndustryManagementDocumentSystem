package com.Main.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.Main.entity.ListOfMachines;
import com.Main.entity.MttrAndMtbfCalulation;

	@Service
	public interface MttrAndMtbfCalulationService {

	public List<MttrAndMtbfCalulation> getMttrAndMtbfCalulation();
	
	public MttrAndMtbfCalulation getMttrAndMtbfCalulation(long Id);
	
	public MttrAndMtbfCalulation addMttrAndMtbfCalulation(MttrAndMtbfCalulation mttrAndMtbfCalulation);
	
	public MttrAndMtbfCalulation updateMttrAndMtbfCalulation(MttrAndMtbfCalulation mttrAndMtbfCalulation);

	public void deleteMttrAndMtbfCalulation(long parselLong);
}
