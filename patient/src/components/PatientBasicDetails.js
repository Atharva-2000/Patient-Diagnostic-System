import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import "../styles/patientbasicdetails.css"

function PatientBasicDetails() {

   const [patientdetail, setPatientDetail] = useState({})


   const getpatientbasicdetails = async () => {

      try {

         let patientid = sessionStorage.getItem('apppatientid')
         const res = await axios.get(`http://localhost:8080/getPatient/${patientid}`)
         console.log('Patient basic details',res.data)

         setPatientDetail(res.data)
      }
      catch {
         toast.error("Something went wrong !!")
      }
   }

   useEffect(() => {
      
      getpatientbasicdetails()

   })

   return (
      <div>
         <div id="patient_basic_details">

            <div id="patient_user_icon">
               {/* <center><i className="fa fa-user-circle-o" id="pui" aria-hidden="true"></i></center> */}
               <center>
                  <img src="https://cdn4.iconfinder.com/data/icons/travello-basic-ui-1/64/Profile-128.png" alt="No icon" />
               </center>
            </div>

            <div id="basic_patient_details">

               <div className="basic_patient_details_col">
                  <h5>Name : <span>{patientdetail.first_name + " " + patientdetail.last_name}</span></h5>
                  <h5>Age : <span>{patientdetail.age}</span></h5>
                  <h5>Height : <span>{patientdetail.height}cm</span></h5>
                  <h5>Weight : <span>{patientdetail.weight}kg</span></h5>
               </div>

               <div className="basic_patient_details_col">
                  <h5>Occupation : <span>{patientdetail.occupation}</span></h5>
                  <h5>Gender : <span>{patientdetail.gender}</span></h5>
                  <h5>Residence : <span>{patientdetail.city + ", " + patientdetail.state}</span></h5>
                  <h5>Mobile: <span>{patientdetail.mobile_no}</span></h5>
               </div>
            </div>

         </div>
      </div>
   )
}

export default PatientBasicDetails