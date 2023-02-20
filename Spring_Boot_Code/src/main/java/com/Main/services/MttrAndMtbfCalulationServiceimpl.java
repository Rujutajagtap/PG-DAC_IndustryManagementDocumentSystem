package com.Main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.dao.MttrAndMtbfCalulationDao;
import com.Main.entity.MttrAndMtbfCalulation;

@Service
public class MttrAndMtbfCalulationServiceimpl implements MttrAndMtbfCalulationService{

	@Autowired
	private MttrAndMtbfCalulationDao mttrAndMtbfCalulationDao;

	@Override
	public List<MttrAndMtbfCalulation> getMttrAndMtbfCalulation() {
		// TODO Auto-generated method stub
		return mttrAndMtbfCalulationDao.findAll();
	}

	@Override
	public MttrAndMtbfCalulation getMttrAndMtbfCalulation(long Id) {
		// TODO Auto-generated method stub
		return mttrAndMtbfCalulationDao.getOne(Id);
	}

	@Override
	public MttrAndMtbfCalulation addMttrAndMtbfCalulation(MttrAndMtbfCalulation mttrAndMtbfCalulation) {
		mttrAndMtbfCalulationDao.save(mttrAndMtbfCalulation);
		return mttrAndMtbfCalulation;
	}

	@Override
	public MttrAndMtbfCalulation updateMttrAndMtbfCalulation(MttrAndMtbfCalulation mttrAndMtbfCalulation) {
		mttrAndMtbfCalulationDao.save(mttrAndMtbfCalulation);
		
		return mttrAndMtbfCalulation;
	}

	@Override
	public void deleteMttrAndMtbfCalulation(long parselLong) {
 
		MttrAndMtbfCalulation entity=mttrAndMtbfCalulationDao.getById(parselLong);
		mttrAndMtbfCalulationDao.delete(entity);
	}
}
