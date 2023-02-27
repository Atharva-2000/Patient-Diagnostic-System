package org.clinic.services;

//import javax.servlet.http.HttpSession;

import org.clinic.Login;
import org.clinic.encryption.Encryption;
import org.clinic.entity.Doctor;
import org.clinic.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

	@Autowired
	private DoctorRepository repo;

//	@Autowired
//	HttpSession session;

	public Doctor getDoctor(int id) {
		return repo.findById(id).get();
	}

	public String getDocPassword() {
		String password = repo.getPassword();
		String decryptedString = Encryption.decrypt(password, "secretKey");
		return decryptedString;
	}

	public boolean login(Login login/* , HttpSession session */) {

		Doctor doctor = repo.findByUsername(login.getUsername());

		if (doctor == null) {

			return false;

		}

		String password = repo.getPassword();

		String decryptedString = Encryption.decrypt(password, "secretKey");

//		int doctor_id = doctor.getDoctor_id();

//		session.getAttribute("doctor_id");

//		session.setAttribute("doctor_id", doctor_id);

		if (!decryptedString.equals(login.getPassword())) {

			return false;

		}

		return true;

	}

	public String getDocFirstName() {
		Doctor doctor = repo.findById(1).get();
		String name = doctor.getFirst_name();
		return name;
	}

}