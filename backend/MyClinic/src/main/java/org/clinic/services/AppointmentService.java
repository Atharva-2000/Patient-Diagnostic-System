package org.clinic.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.clinic.entity.Appointment;
import org.clinic.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {

	@Autowired
	private AppointmentRepository repo;

	public boolean addAppointment(Appointment appointment) {
		for (Appointment med : repo.findAll()) {

			if (med.getDate().equals(appointment.getDate())
					&& med.getSlot().getStart_time().equals(appointment.getSlot().getStart_time())) {
				return false;
			}
		}
//		int appointment_id = appointment.getAppointment_id();
//		int patient_id = appointment.getPatient().getPatient_id();
//		int slot_id = appointment.getSlot().getSlot_id();
//		String status = appointment.getStatus();
//		repo.addAppointment(appointment_id, patient_id, slot_id, status);

//		String apt = new Gson().toJson(appointment);
//		JSONObject obj = new JSONObject(apt);
//		int appointment_id = obj.getInt("appointment_id");
//		int patient_id = obj.getJSONObject("patient").getInt("patient_id");
//		int slot_id = obj.getJSONObject("slot").getInt("slot_id");
//		System.out.println(apt);
//		
//		System.out.println("Patient = "+obj.getJSONObject("patient").getInt("patient_id"));
//		System.out.println("Slot = "+obj.getJSONObject("slot").getInt("slot_id"));
//		repo.addpatientandslot(patient_id,slot_id);
		repo.save(appointment);
		return true;
	}

	public Appointment getAppointment(int id) {
		return repo.findById(id).get();
	}

	public Appointment getAppointmentByPatientId(int patient_id) {

		return repo.getAppointmentByPatientId(patient_id);

	}

	public boolean checkStatus(int appointment_id) {

		int count = repo.checkStatus(appointment_id);

		if (count == 0) {

			return true;

		}

		return false;

	}

	public boolean deleteAppointment(int patient_id) {

		try {

			repo.deleteAppointment(patient_id);

			System.out.println("Successfully Deleted");

		}

		catch (Exception e) {

			System.out.println("Something went wrong");

			e.printStackTrace();

			return false;

		}

		return true;

	}

	public List<Appointment> getAppointmentWithDate() {

		List<Appointment> list = new ArrayList<>();

		for (Appointment apt : repo.findAll()) {

			if (apt.getStatus().equals("Active")) {

				list.add(apt);
			}
		}

		return list;

	}

	public List<Appointment> getTodaysAppointment() {
		return repo.getTodaysAppointment();
	}

	public int getAppointmentIdByPatientId(int patient_id) {

		return repo.getAppointmentIdByPatientId(patient_id);

	}

	public List<Appointment> getAllAppointment() {
		return repo.getAllAppointment();
	}
}
