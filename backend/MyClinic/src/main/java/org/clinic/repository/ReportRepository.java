package org.clinic.repository;

import java.util.List;

import org.clinic.entity.Report;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

public interface ReportRepository extends CrudRepository<Report, Integer> {

	@Modifying
	@Transactional
	@Query(value = "UPDATE clinic.appointment SET status = 'Done' WHERE id = :appointment_id", nativeQuery = true)
	void updateStatus(int appointment_id);

	@Query(value = "SELECT * FROM clinic.reports WHERE (clinic.reports.appointment_id IN ( SELECT clinic.appointment.id FROM clinic.appointment WHERE clinic.appointment.status = 'Done' ) AND patient_id = :patient_id)", nativeQuery = true)
	List<Report> getReportsByPatientId(int patient_id);
	
	@Query(value = "SELECT * FROM clinic.reports WHERE appointment_id = :appointment_id" , nativeQuery = true)
	Report getReport(int appointment_id);
}
