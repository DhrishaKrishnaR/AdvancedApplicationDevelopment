package com.birthday.aad.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.aad.Entity.Login;



public interface LoginRepository extends JpaRepository<Login,Integer> {

	
}
