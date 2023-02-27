package org.clinic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctor")
public class Doctor {
	
	@Id
	@Column(name = "id")
	private int doctor_id;
	
	@Column(name = "first_name")
	private String first_name;
	
	@Column(name = "last_name")
	private String last_name;
	
	@Column(name = "email_id")
	private String email;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "mobile_no")
	private String mobile_no;
	
	@Column(name = "user_name")
	private String user_name;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "qualification")
	private String qualification;
	
	@Column(name = "experience")
	private int experience;
	
	public Doctor() {
		
	}

	public Doctor(int doctor_id, String first_name, String last_name, String email, int age, String mobile_no,
			String user_name, String password, String qualification, int experience) {
		this.doctor_id = doctor_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.age = age;
		this.mobile_no = mobile_no;
		this.user_name = user_name;
		this.password = password;
		this.qualification = qualification;
		this.experience = experience;
	}
	
	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	@Override
	public String toString() {
		return "Doctor [doctor_id=" + doctor_id + ", first_name=" + first_name + ", last_name=" + last_name + ", email="
				+ email + ", age=" + age + ", mobile_no=" + mobile_no + ", user_name=" + user_name + ", password="
				+ password + ", qualification=" + qualification + ", experience=" + experience + "]";
	}
	
}
