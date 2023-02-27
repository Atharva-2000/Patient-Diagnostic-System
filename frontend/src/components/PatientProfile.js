import React, { useState, useEffect } from 'react'
import Header from './Header'
import "../styles/patientprofile.css"
import maleprofile from "../assets/maleprofileimage.webp"
import femaleprofile from "../assets/femaleprofileimage.webp"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function PatientProfile() {

       const navigate = useNavigate()

       const [patientdetail, setPatientDetail] = useState({})


       const getPatientProfile = async (patid) => {

              try {

                     const res = await axios.get(`http://localhost:8080/getPatient/${patid}`)
                     console.log(res.data)
                     setPatientDetail(res.data)

              }
              catch {
                     toast.error("Something went wrong !!")
              }
       }

       useEffect(() => {

              if (!sessionStorage.getItem('patienttoken')) {
                     navigate("/")
              }
              else {
                     var userid = sessionStorage.getItem('patienttoken')
                     getPatientProfile(userid)
              }

       })





       return (
              <div>
                     <Header />


                     <div className="patientprofilepage">


                            {/* const {first_name, last_name, age, email, mobile_no, gender, occupation, height, weight, state, city} = patientdetail */}
                     

                            <div id="patientcontent">
                                   <center>
                                          {/* <img src={maleprofile} alt="unavailable" /> */}
                                          <img src={ patientdetail.gender==="Male" ? maleprofile : femaleprofile } alt="unavailable" />
                                   </center>

                                   <div className="patientcontent-field">
                                          <h5>Name : <span>{patientdetail.first_name + " " + patientdetail.last_name}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Age : <span>{patientdetail.age}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>E-mail id : <span>{patientdetail.email}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Mobile : <span>{patientdetail.mobile_no}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Gender : <span>{patientdetail.gender}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Occupation : <span>{patientdetail.occupation}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Height : <span>{patientdetail.height} cm</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>Weight : <span>{patientdetail.weight} kg</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>State : <span>{patientdetail.state}</span></h5>
                                   </div>

                                   <div className="patientcontent-field">
                                          <h5>City : <span>{patientdetail.city}</span></h5>
                                   </div>

                            </div>
                     </div>
              </div>
       )
}

export default PatientProfile