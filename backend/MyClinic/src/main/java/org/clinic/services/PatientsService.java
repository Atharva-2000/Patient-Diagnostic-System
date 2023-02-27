package org.clinic.services;

//import javax.servlet.http.HttpSession;

import org.clinic.Login;
import org.clinic.encryption.Encryption;
import org.clinic.entity.Patient;
import org.clinic.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientsService {

	@Autowired
	private PatientRepository repo;

	public boolean addPatient(Patient patient) {

		for (Patient med : repo.findAll()) {

			if (med.getUsername().equals(patient.getUsername())) {
				return false;
			}
		}

		repo.save(patient);
		return true;
	}

	public String getPassword(String username) {
		String password = repo.fetchPassword(username);
		String decryptedString = Encryption.decrypt(password, "secretKey");
		if (password == null) {
			return "user not found";
		}
		return decryptedString;
	}

	public boolean updatePatient(int patient_id, Patient patient) {

		try {

			Patient dbpatient = repo.findById(patient_id).get();

			String first_name = patient.getFirst_name();

			String last_name = patient.getLast_name();

			String username = patient.getUsername();

			int age = patient.getAge();

			String occupation = patient.getOccupation();

			float height = patient.getHeight();

			float weight = patient.getWeight();

			String email = patient.getEmail();

			String mobile_no = patient.getMobile_no();

			String state = patient.getState();

			String city = patient.getCity();

			String street = patient.getStreet();

			String zip_code = patient.getZip_code();

			// System.out.println("first_name = "+first_name);

			// System.out.println("last_name = "+last_name);

			// System.out.println("username = "+username);

			// System.out.println("age = "+age);

			// System.out.println("occupation = "+occupation);

			// System.out.println("height = "+height);

			// System.out.println("weight = "+weight);

			// System.out.println("email = "+email);

			// System.out.println("mobile_no = "+mobile_no);

			// System.out.println("state = "+state);

			// System.out.println("city = "+city);

			// System.out.println("street = "+street);

			// System.out.println("zip_code = "+zip_code);

			//

			// System.out.println("*********************************************");

			if (first_name == null) {

				first_name = dbpatient.getFirst_name();

			}

			if (last_name == null) {

				last_name = dbpatient.getLast_name();

			}

			if (username == null) {

				username = dbpatient.getUsername();

			}

//		if (age == 0) {
//
//		age = dbpatient.getAge();
//
//		}

//		if (height == 0.00) {
//
//		height = dbpatient.getHeight();
//
//		}

//		if (weight == 0.00) {
//
//		weight = dbpatient.getWeight();
//
//		}

			if (occupation == null) {

				occupation = dbpatient.getOccupation();

			}

			if (email == null) {

				email = dbpatient.getEmail();

			}

			if (mobile_no == null) {

				mobile_no = dbpatient.getMobile_no();

			}

			if (state == null) {

				state = dbpatient.getState();

			}

			if (city == null) {

				city = dbpatient.getCity();

			}

			if (street == null) {

				street = dbpatient.getStreet();

			}

			if (zip_code == null) {

				zip_code = dbpatient.getZip_code();

			}

			// System.out.println("first_name = "+first_name);

			// System.out.println("last_name = "+last_name);

			// System.out.println("username = "+username);

			// System.out.println("age = "+age);

			// System.out.println("occupation = "+occupation);

			// System.out.println("height = "+height);

			// System.out.println("weight = "+weight);

			// System.out.println("email = "+email);

			// System.out.println("mobile_no = "+mobile_no);

			// System.out.println("state = "+state);

			// System.out.println("city = "+city);

			// System.out.println("street = "+street);

			// System.out.println("zip_code = "+zip_code);

			repo.updatePatient(patient_id, first_name, last_name, username, age, height, weight, occupation, email,

					mobile_no, state, city, street, zip_code);

		}

		catch (Exception e) {

			return false;

		}

		return true;

	}

	public Patient getPatient(int patient_id) {
		try {
			return repo.findById(patient_id).get();
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("patient_id is not present");
			return null;
		}
	}

	public boolean login(Login login/* , HttpSession session */) {
		Patient patient = repo.findByUsername(login.getUsername());

		if (patient == null) {
			return false;
		}

		String password = repo.fetchPassword(patient.getUsername());
		String decryptedString = Encryption.decrypt(password, "secretKey");
//		 int patient_id = patient.getPatient_id();
//		 session.getAttribute("patient_id");
//		 session.setAttribute("patient_id", patient_id);

		if (!decryptedString.equals(login.getPassword())) {
			return false;
		}

		return true;
	}

	public String getFirstName(int patient_id) {
		// session = request.getSession();

		// int id = (int) session.getAttribute("patient_id");
		// System.out.println(patient_id);
		return repo.getFirstName(patient_id);

		// Patient patient = repo.findById(patient_id).get();
		// return patient.getFirst_name();
	}

	public String getIdByUsername(String username) {
		return repo.getIdByUsername(username);
	}

	public boolean checkUser(String username) {

		System.out.println(username);
		for (Patient med : repo.findAll()) {

			System.out.println("med : " + med.getUsername());
			if (med.getUsername().equals(username)) {
				return true;

			}

		}

		return false;

	}

}