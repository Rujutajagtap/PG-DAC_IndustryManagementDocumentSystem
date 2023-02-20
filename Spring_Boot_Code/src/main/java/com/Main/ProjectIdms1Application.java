package com.Main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
//@EntityScan({"com.Main.entity.Attendance", "com.Main.entity.BreakDownAnlysis"})
public class ProjectIdms1Application {

	public static void main(String[] args) {
		SpringApplication.run(ProjectIdms1Application.class, args);
	}

}
