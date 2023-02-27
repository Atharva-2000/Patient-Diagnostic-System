package org.clinic.controller;

import java.util.List;

import org.clinic.entity.Report;
import org.clinic.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReportController {
	@Autowired
	private ReportService service;

	@RequestMapping(method = RequestMethod.POST, value = "/addReport")
	public boolean addReport(@RequestBody Report report) {
		return service.addReport(report);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getReport/{id}")
	public Report getReport(@PathVariable int id) {
		return service.getReport(id);

	}

	@RequestMapping(method = RequestMethod.GET, value = "/getReportsByPatientId/{patient_id}")
	public List<Report> getReportsByPatientId(@PathVariable int patient_id) {
		return service.getReportsByPatientId(patient_id);
	}
}
