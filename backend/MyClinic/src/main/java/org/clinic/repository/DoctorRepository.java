package org.clinic.repository;

import org.clinic.entity.Doctor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface DoctorRepository extends CrudRepository<Doctor, Integer>{
	@Query(value="SELECT password FROM doctor", nativeQuery=true)
	String getPassword();

	@Query(value="SELECT * FROM doctor WHERE user_name = :username", nativeQuery=true)
	Doctor findByUsername(String username);
}
