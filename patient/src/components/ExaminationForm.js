import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../styles/examinationform.css"

function ExaminationForm() {

        const navigate = useNavigate()

        const examinationdetails = { pulse: '', blood_pressure: '', oxygen: '', temperature: '', symptoms: '', diagnosis: '', prescription: '', remarks: '' }

        const [formvalue, setFormvalue] = useState(examinationdetails)

        const handleformvalue = (e) => {

                const { name, value } = e.target;

                setFormvalue({ ...formvalue, [name]: value })

        }

        const getAppointmentId = async(patid) => {
              
                try {
                       
                        const res = await axios.get(`http://localhost:8080/getAppointmentIdByPatientId/${patid}`)   
                        console.log(res.data)
                        return (res.data)
                }
                catch {
                     toast.error("Something went wrong !!")
                }
        }

        const sendexaminationformdata = async (examdata) => {
                
                try {
                        const res = await axios.post(`http://localhost:8080/addReport`, examdata)  
                        console.log(res.data)

                        if (res.data === true) {
                                toast.success("Data submitted successfully !!")
                                sessionStorage.removeItem('apppatientid')
                                navigate("/appointmentlist")
                        }
                        else {
                            toast.error("Something went wrong while submitting data..")    
                        }
                                
                }
                catch {
                    toast.error("Something went wrong while submitting data..")
                }
        }

        const handlesubmit = async(e) => {

                e.preventDefault()

                var patientid = sessionStorage.getItem('apppatientid')

                var appointmentid = await getAppointmentId(patientid)


                const examination_data = {
                        
                        "appointment": {
                                "appointment_id": appointmentid
                        },
                        "patient": {
                                "patient_id": patientid
                        },
                        "temperature": formvalue.temperature,
                        "pulse": formvalue.pulse,
                        "prescripton": formvalue.prescription,
                        "diagnosis": formvalue.diagnosis,
                        "remark": formvalue.remarks,
                        "symptoms": formvalue.symptoms,
                        "oxygen_level": formvalue.oxygen,
                        "blood_pressure": formvalue.blood_pressure
                }
                
        
                sendexaminationformdata(examination_data)
              
               // alert("Form submitted !!!")
        }


        return (
                <div>

                        <div id="examination_form">

                                <h3>Fill in the following details</h3>
                                <form method="post" name="checkupform" onSubmit={handlesubmit} >

                                        <div className="chekup_individual_field">
                                                <h5>Enter Pulse Rate :</h5>
                                                <input type="text" name="pulse" id="pulse" onChange={handleformvalue} required />
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Blood Pressure (in mmHg) :</h5>
                                                <input type="text" name="blood_pressure" id="bp" onChange={handleformvalue} required />
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Oxygen Level (in %) :</h5>
                                                <input type="text" name="oxygen" id="oxygen" onChange={handleformvalue} required />
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Temperature (in °F) :</h5>
                                                <input type="text" name="temperature" id="temperature" onChange={handleformvalue} required />
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Probable Symptoms :</h5>
                                                <textarea rows="*" cols="*" id="symptoms" name="symptoms" onChange={handleformvalue} required ></textarea>
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Diagnosis :</h5>
                                                <textarea rows="*" cols="*" id="diagnosis" name="diagnosis" onChange={handleformvalue} required ></textarea>
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Enter Prescription :</h5>
                                                <textarea rows="*" cols="*" id="prescription" name="prescription" onChange={handleformvalue} required ></textarea>
                                        </div>

                                        <div className="chekup_individual_field">
                                                <h5>Remarks :</h5>
                                                <textarea rows="*" cols="*" id="remarks" name="remarks" onChange={handleformvalue} required ></textarea>
                                        </div>

                                        <center>
                                                <button type="submit" id="chekupsubmit" className="bg-primary btn">Submit</button>
                                        </center>

                                </form>

                        </div>

                </div>
        )
}

export default ExaminationForm