package org.clinic.controller;

import org.clinic.Login;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;
import org.clinic.entity.Patient;
import org.clinic.services.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PatientsController {

	@Autowired
	private PatientsService service;
	
//	@Autowired
//	HttpSession session;

	@RequestMapping(method = RequestMethod.POST, value = "/addPatient")
	public boolean addPatient(@RequestBody Patient patient) {
		System.out.println("request : add Patient");
		boolean response = service.addPatient(patient);
		return response;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/getPassword/{username}")
	public String getPassword(@PathVariable String username) {
		return service.getPassword(username);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/updatePatient/{patient_id}")

	public boolean updatePatient(@PathVariable int patient_id,@RequestBody Patient patient) {

	return service.updatePatient(patient_id,patient);

	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getPatient/{patient_id}")
	public Patient getPatient(@PathVariable int patient_id) {
		return service.getPatient(patient_id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/patientLogin")
	public boolean login(@RequestBody Login login/*, HttpServletRequest request*/) {
//		String username = login.getUsername();
//		session = request.getSession();
//		session.getAttribute("username");
//		session.setAttribute("username",username);
		return service.login(login/*,session*/);
	}
	
//	@RequestMapping(method = RequestMethod.POST, value = "/logout")
//	public void logout(HttpServletRequest request) {
////		session = request.getSession();
////		session.removeAttribute("username");
//		session.removeAttribute("patient_id");
//		session.removeAttribute("doctor_id");
//		session.invalidate();
//	}
	
//	@RequestMapping(method = RequestMethod.GET, value = "/getSession")
//
//	public int getSession(HttpServletRequest request) {
//
//	session = request.getSession();
//
//	System.out.println(session.getAttribute("patient_id"));
//
//	return (int) session.getAttribute("patient_id");
//
//	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/getFirstName/{patient_id}")

	public String getFirstName(@PathVariable int patient_id) {

	return service.getFirstName(patient_id);

	}

	 

	@RequestMapping(method = RequestMethod.GET, value = "/getIdByUsername/{username}")

	public String getIdByUsername(@PathVariable String username) {

	return service.getIdByUsername(username);

	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/checkUser/{username}")

	public boolean checkUser(@PathVariable String username) {
		boolean result = service.checkUser(username);
		System.out.println(result);
		return result;

	}
}