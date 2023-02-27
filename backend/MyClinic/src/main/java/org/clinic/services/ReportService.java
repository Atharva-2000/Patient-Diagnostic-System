package org.clinic.services;

import java.util.List;

import org.clinic.entity.Report;
import org.clinic.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
	@Autowired
	private ReportRepository repo;

	public boolean addReport(Report report) {

		try {

			repo.save(report);

		}

		catch (Exception e) {

			e.printStackTrace();

			return false;

		}

		int appointment_id = report.getAppointment().getAppointment_id();

		repo.updateStatus(appointment_id);

		System.out.println("aptid " + appointment_id);

		return true;

	}

	public Report getReport(int appointment_id) {
		return repo.getReport(appointment_id);
	}

	public List<Report> getReportsByPatientId(int patient_id) {
		return repo.getReportsByPatientId(patient_id);
	}
}
