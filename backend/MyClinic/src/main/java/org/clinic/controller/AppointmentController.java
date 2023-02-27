package org.clinic.controller;

import java.sql.Date;
import java.util.List;

import org.clinic.entity.Appointment;
import org.clinic.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AppointmentController {

	@Autowired
	private AppointmentService service;

	@RequestMapping(method = RequestMethod.POST, value = "/addAppointment")
	public boolean addAppointment(@RequestBody Appointment appointment) {
		return service.addAppointment(appointment);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getAppointment/{id}")
	public Appointment getAppointment(@PathVariable int id) {
		return service.getAppointment(id);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getAppointmentByPatientId/{patient_id}")

	public Appointment getAppointmentByPatientId(@PathVariable int patient_id) {

		return service.getAppointmentByPatientId(patient_id);

	}

	@RequestMapping(method = RequestMethod.GET, value = "/checkStatus/{patient_id}")

	public boolean checkStatus(@PathVariable int patient_id) {

		return service.checkStatus(patient_id);

	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/deleteAppointment/{patient_id}")

	public boolean deleteAppointment(@PathVariable int patient_id) {

		return service.deleteAppointment(patient_id);

	}

	@RequestMapping(method = RequestMethod.GET, value = "/getAllAppointment")
	public List<Appointment> getAllAppointment() {
		return service.getAllAppointment();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getTodaysAppointment")
	public List<Appointment> getTodaysAppointment() {
		return service.getTodaysAppointment();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getAppointmentIdByPatientId/{patient_id}")
	public int getAppointmentIdByPatientId(@PathVariable int patient_id) {

		return service.getAppointmentIdByPatientId(patient_id);

	}
}
