package org.clinic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "history")
public class History {
	
	@Id
	@Column(name = "id")
	private int history_id;
	
	@OneToOne(targetEntity = Patient.class)
	@JoinColumn(name = "patient_id")
	Patient patient;
	
	@Column(name = "illness")
	private String illness;
	
	@Column(name = "allergy")
	private String allergy;
	
	@Column(name = "dieting")
	private String dieting;
	
	@Column(name = "surgery")
	private String surgery;
	
	@Column(name = "sleep")
	private String sleep;
	
	@Column(name = "drink")
	private String drink;
	
	@Column(name = "stress")
	private String stress;
	
	@Column(name = "blood")
	private String blood;
	
	@Column(name = "other_doctor_problems")
	private String other_doctor_problems;

	public History() {
	}

	public History(int history_id, Patient patient, String illness, String allergy, String dieting, String surgery,
			String sleep, String drink, String stress, String blood, String other_doctor_problems) {
		this.history_id = history_id;
		this.patient = patient;
		this.illness = illness;
		this.allergy = allergy;
		this.dieting = dieting;
		this.surgery = surgery;
		this.sleep = sleep;
		this.drink = drink;
		this.stress = stress;
		this.blood = blood;
		this.other_doctor_problems = other_doctor_problems;
	}

	public int getHistory_id() {
		return history_id;
	}

	public void setHistory_id(int history_id) {
		this.history_id = history_id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public String getIllness() {
		return illness;
	}

	public void setIllness(String illness) {
		this.illness = illness;
	}

	public String getAllergy() {
		return allergy;
	}

	public void setAllergy(String allergy) {
		this.allergy = allergy;
	}

	public String getDieting() {
		return dieting;
	}

	public void setDieting(String dieting) {
		this.dieting = dieting;
	}

	public String getSurgery() {
		return surgery;
	}

	public void setSurgery(String surgery) {
		this.surgery = surgery;
	}

	public String getSleep() {
		return sleep;
	}

	public void setSleep(String sleep) {
		this.sleep = sleep;
	}

	public String getDrink() {
		return drink;
	}

	public void setDrink(String drink) {
		this.drink = drink;
	}

	public String getStress() {
		return stress;
	}

	public void setStress(String stress) {
		this.stress = stress;
	}

	public String getBlood() {
		return blood;
	}

	public void setBlood(String blood) {
		this.blood = blood;
	}
	
	public String getOther_doctor_problems() {
		return other_doctor_problems;
	}

	public void setOther_doctor_problems(String other_doctor_problems) {
		this.other_doctor_problems = other_doctor_problems;
	}

	@Override
	public String toString() {
		return "History [history_id=" + history_id + ", patient=" + patient + ", illness=" + illness + ", allergy="
				+ allergy + ", dieting=" + dieting + ", surgery=" + surgery + ", sleep=" + sleep + ", drink=" + drink
				+ ", stress=" + stress + ", blood=" + blood + ", other_doctor_problems=" + other_doctor_problems + "]";
	}

	
	
}
