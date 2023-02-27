package org.clinic.repository;

import java.util.List;

import org.clinic.entity.Appointment;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface AppointmentRepository extends CrudRepository<Appointment, Integer> {

//	@Modifying(clearAutomatically = true)
//	@Transactional
//	@Query(value = "INSERT INTO appointment (patient_id, slot_id) VALUES(:patient_id, :slot_id)",nativeQuery = true)
//	void addpatientandslot(int patient_id,int slot_id);

//	@Modifying
//	@Query(value = "INSERT INTO appointment (id, patient_id, slot_id, status) VALUES (:appointment_id, :patient_id, :slot_id, :status)", nativeQuery = true)
//	void addAppointment(@Param("appointment_id") int appointment_id, @Param("patient_id") int patient_id, @Param("slot_id") int slot_id, @Param("status") String status);

	@Query(value = "SELECT * FROM clinic.appointment WHERE patient_id = :patient_id AND status = 'Active'", nativeQuery = true)
	Appointment getAppointmentByPatientId(int patient_id);

	@Query(value = "SELECT COUNT(*) FROM clinic.appointment WHERE (status=\"Active\" AND patient_id= :patient_id);", nativeQuery = true)
	int checkStatus(int patient_id);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM clinic.appointment WHERE patient_id = :patient_id AND status = 'Active'", nativeQuery = true)
	void deleteAppointment(int patient_id);

	@Query(value = "SELECT id FROM clinic.appointment WHERE patient_id = :patient_id AND status = 'Active'", nativeQuery = true)
	int getAppointmentIdByPatientId(int patient_id);

	@Query(value = "SELECT * FROM clinic.appointment WHERE status = 'Active' AND date >= CURDATE();", nativeQuery = true)
	List<Appointment> getAllAppointment();
	// @Query(value = "SELECT * FROM clinic.appointment WHERE status = 'Active' AND
	// date = (SELECT CURDATE()) AND slot_id IN (SELECT clinic.slot.id FROM
	// clinic.slot WHERE start_time > CURTIME());", nativeQuery = true)

	@Query(value = "SELECT * FROM clinic.appointment WHERE status = 'Active' AND date = CURDATE();", nativeQuery = true)
	List<Appointment> getTodaysAppointment();

}
