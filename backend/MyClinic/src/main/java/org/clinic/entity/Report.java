package org.clinic.entity;

 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

 

@Entity
@Table(name = "reports")
public class Report {
    
    @Id
    @Column(name = "id")
    private int report_id;
    
    @OneToOne(targetEntity = Appointment.class)
    @JoinColumn(name = "appointment_id")
    Appointment appointment;
    
    @ManyToOne(targetEntity = Patient.class)
    @JoinColumn(name = "patient_id")
    Patient patient;
    
    @Column(name = "temperature")
    private float temperature;
    
    @Column(name = "pulse")
    private int pulse;
    
    @Column(name = "prescription")
    private String prescripton;
    
    @Column(name = "diagnosis")
    private String diagnosis;
    
    @Column(name = "remark")
    private String remark;
    
    @Column(name = "symptoms")
    private String symptoms;
    
    @Column(name = "oxygen_level")
    private int oxygen_level;
    
    @Column(name = "blood_pressure")
    private int blood_pressure;
    
    public Report() {
        
    }

 

    public Report(int report_id, Appointment appointment, Patient patient, float temperature, int pulse, String prescripton,
            String diagnosis, String remark, String symptoms, int oxygen_level, int blood_pressure) {
        this.report_id = report_id;
        this.appointment = appointment;
        this.patient = patient;
        this.temperature = temperature;
        this.pulse = pulse;
        this.prescripton = prescripton;
        this.diagnosis = diagnosis;
        this.remark = remark;
        this.symptoms = symptoms;
        this.oxygen_level = oxygen_level;
        this.blood_pressure = blood_pressure;
    }

 

    public int getReport_id() {
        return report_id;
    }

 

    public void setReport_id(int report_id) {
        this.report_id = report_id;
    }

 

    public Appointment getAppointment() {
        return appointment;
    }

 

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }

 

    public Patient getPatient() {
        return patient;
    }

 

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

 

    public float getTemperature() {
        return temperature;
    }

 

    public void setTemperature(float temperature) {
        this.temperature = temperature;
    }

 

    public int getPulse() {
        return pulse;
    }

 

    public void setPulse(int pulse) {
        this.pulse = pulse;
    }

 

    public String getPrescripton() {
        return prescripton;
    }

 

    public void setPrescripton(String prescripton) {
        this.prescripton = prescripton;
    }

 

    public String getDiagnosis() {
        return diagnosis;
    }

 

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

 

    public String getRemark() {
        return remark;
    }

 

    public void setRemark(String remark) {
        this.remark = remark;
    }

 

    public String getSymptoms() {
        return symptoms;
    }

 

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }
    

 

    public int getOxygen_level() {
        return oxygen_level;
    }

 

    public void setOxygen_level(int oxygen_level) {
        this.oxygen_level = oxygen_level;
    }

 

    public int getBlood_pressure() {
        return blood_pressure;
    }

 

    public void setBlood_pressure(int blood_pressure) {
        this.blood_pressure = blood_pressure;
    }

 

    @Override
    public String toString() {
        return "Report [report_id=" + report_id + ", appointment=" + appointment + ", patient=" + patient
                + ", temperature=" + temperature + ", pulse=" + pulse + ", prescripton=" + prescripton + ", diagnosis="
                + diagnosis + ", remark=" + remark + ", symptoms=" + symptoms + ", oxygen_level=" + oxygen_level
                + ", blood_pressure=" + blood_pressure + "]";
    }

 

}