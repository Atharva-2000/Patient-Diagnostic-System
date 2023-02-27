package org.clinic.repository;

import javax.transaction.Transactional;

import org.clinic.entity.Patient;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PatientRepository extends CrudRepository<Patient, Integer>{
	
	@Query(value="SELECT p.password FROM patients p WHERE p.user_name = :username", nativeQuery=true)
	String fetchPassword(@Param("username") String username);

	@Query(value="SELECT * FROM patients WHERE user_name = :username", nativeQuery=true)
	Patient findByUsername(String username);
	
	@Query(value="SELECT p.first_name FROM patients p WHERE p.id = :patient_id", nativeQuery=true)
	String getFirstName(@Param("patient_id") int patient_id);

	 

	@Query(value="SELECT p.id FROM patients p WHERE p.user_name = :username", nativeQuery=true)
	String getIdByUsername(@Param("username") String username);
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE patients SET first_name = :first_name , last_name = :last_name , user_name = :username , age = :age , height = :height , weight = :weight , occupation = :occupation , email_id = :email , mobile_no = :mobile_no , state = :state , city = :city , street = :street , zip_code = :zip_code WHERE id = :patient_id", nativeQuery = true)
	void updatePatient(@Param("patient_id") int patient_id, @Param("first_name") String first_name,
	@Param("last_name") String last_name, @Param("username") String username, @Param("age") int age,
	@Param("height") float height, @Param("weight") float weight, @Param("occupation") String occupation,
	@Param("email") String email, @Param("mobile_no") String mobile_no, @Param("state") String state,
	@Param("city") String city, @Param("street") String street, @Param("zip_code") String zip_code);
}