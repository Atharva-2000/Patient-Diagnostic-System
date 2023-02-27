package org.clinic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.clinic.encryption.Encryption;

@Entity
@Table(name = "patients")
public class Patient {

	@Id
	@Column(name = "id")
	private int patient_id;

	@Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;

	@Column(name = "user_name")
	private String username;

	@Column(name = "age")
	private int age;

	@Column(name = "occupation")
	private String occupation;

	@Column(name = "height")
	private float height;

	@Column(name = "weight")
	private float weight;

	@Column(name = "mobile_no")
	private String mobile_no;

	@Column(name = "state")
	private String state;

	@Column(name = "city")
	private String city;

	@Column(name = "street")
	private String street;

	@Column(name = "gender")
	private String gender;

	@Column(name = "zip_code")
	private String zip_code;

	@Column(name = "password")
	private String password;

	@Column(name = "email_id")
	private String email;

	public Patient() {

	}

	public Patient(int patient_id, String first_name, String last_name, String username, int age, String occupation,
			float height, float weight, String mobile_no, String state, String city, String street, String gender,
			String zip_code, String password, String email) {
		this.patient_id = patient_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.age = age;
		this.occupation = occupation;
		this.height = height;
		this.weight = weight;
		this.mobile_no = mobile_no;
		this.state = state;
		this.city = city;
		this.street = street;
		this.gender = gender;
		this.zip_code = zip_code;
		this.password = password;
		this.email = email;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public float getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public String getMobile_no() {
		return mobile_no;
	}

	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getZip_code() {
		return zip_code;
	}

	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}

	public String getPassword() {
		return password;

	}

	public void setPassword(String password) {
		String encryptedString = Encryption.encrypt(password, "secretKey") ;
		this.password = encryptedString;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "patient [patient_id=" + patient_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", username=" + username + ", age=" + age + ", occupation=" + occupation + ", height=" + height
				+ ", weight=" + weight + ", mobile_no=" + mobile_no + ", state=" + state + ", city=" + city
				+ ", street=" + street + ", gender=" + gender + ", zip_code=" + zip_code + ", password=" + password
				+ ", email=" + email + "]";
	}

}
