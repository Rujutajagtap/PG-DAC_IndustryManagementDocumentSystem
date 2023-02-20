package com.Main.services;

import java.util.Collection;

import com.Main.entity.Login;
import com.Main.entity.User;
import com.Main.exception.UserException;


public interface UserService {
	
	 int createUser(User user) throws UserException;
	
	 User fetchUserById(int user_id) throws UserException;
	 
	 User validate(Login login);
	 int deleteUser(Long parselLong); //throws UserException;
	
	 public Collection<User> fetchAllUsers();
	
}
