package org.clinic.controller;

//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpSession;

import org.clinic.Login;
import org.clinic.entity.Doctor;
import org.clinic.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorController {

	@Autowired
	private DoctorService service;

//	@Autowired
//	HttpSession session;

	@RequestMapping(method = RequestMethod.GET, value = "getDoctor")
	public Doctor getDoctor() {
		int id = 1;
		return service.getDoctor(id);
	}

	@RequestMapping(method = RequestMethod.GET, value = "getDocPassword")
	public String getDocPassword() {
		return service.getDocPassword();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/doctorLogin")
	public boolean login(@RequestBody Login login/* HttpServletRequest request */) {
//		session = request.getSession();
		return service.login(login/* , session */);
	}

	@RequestMapping(method = RequestMethod.GET, value = "getDocFirstName")

	public String getDocFirstName() {
		return service.getDocFirstName();
	}
}
