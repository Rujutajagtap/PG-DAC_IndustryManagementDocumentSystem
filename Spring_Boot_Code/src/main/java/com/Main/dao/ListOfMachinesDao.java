package com.Main.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Main.entity.ListOfMachines;

public interface ListOfMachinesDao extends JpaRepository< ListOfMachines, Long> {

}
