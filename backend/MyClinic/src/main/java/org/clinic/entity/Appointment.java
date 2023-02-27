package org.clinic.entity;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "appointment")
public class Appointment {
	
	@Id
	@Column(name = "id")
	private int appointment_id;
	
	@ManyToOne(targetEntity = Patient.class)
	@JoinColumn(name = "patient_id")
	Patient patient;
	
	
	@Column(name = "date")
	private Date date;
	
	@OneToOne(targetEntity = Slot.class)
	@JoinColumn(name = "slot_id")
	Slot slot;
	
	@Column(name = "status")
	private String status;
	
	public Appointment() {
		
	}

	public Appointment(int appointment_id, Patient patient, Date date, Slot slot, String status) {
		this.appointment_id = appointment_id;
		this.patient = patient;
		this.date = date;
		this.slot = slot;
		this.status = status;
	}

	public int getAppointment_id() {
		return appointment_id;
	}

	public void setAppointment_id(int appointment_id) {
		this.appointment_id = appointment_id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Slot getSlot() {
		return slot;
	}

	public void setSlot(Slot slot) {
		this.slot = slot;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Appointment [appointment_id=" + appointment_id + ", patient=" + patient + ", date=" + date + ", slot="
				+ slot + ", status=" + status + "]";
	}
	
}