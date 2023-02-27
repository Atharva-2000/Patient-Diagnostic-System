import React, { useEffect, useState } from 'react'
import DoctorHeader from './DoctorHeader'
import "../styles/doctorprofile.css"
import maleprofile from "../assets/doctoricon.png"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


function DoctorProfile() {

   const navigate = useNavigate()
     
     const [doctordetail, setDoctorDetail] = useState({})
     

     const getDoctorProfile = async () => {
           
          try {
               const res = await axios.get(`http://localhost:8080/getDoctor`)  
               console.log(res.data)
               setDoctorDetail(res.data)
          }
          catch {
               toast.error("Something went wrong !!")
          }
     }
     
   useEffect(() => {
        if (!sessionStorage.getItem('doctortoken')) {
             navigate("/")
        }
        else {
                getDoctorProfile()
        }
   })


  return (
    <div>

        <DoctorHeader/>

        <div className="doctorprofilepage">

            <div id="doctorcontent">

                 <center>
                     <img src={maleprofile} alt="unavailable"/>
                 </center>

                 <div className="doctorcontent-field">
                           <h5>Name : <span>Dr. {doctordetail.first_name + " " + doctordetail.last_name}</span></h5>
                 </div>

                 <div className="doctorcontent-field">
                           <h5>Qualification : <span>{doctordetail.qualification}</span></h5>
                 </div>

                 <div className="doctorcontent-field">
                           <h5>Experience : <span>{doctordetail.experience}</span></h5>
                 </div>

                 <div className="doctorcontent-field">
                           <h5>Age : <span>{doctordetail.age}</span></h5>
                 </div>

                 <div className="doctorcontent-field">
                           <h5>Email : <span>{doctordetail.email}</span></h5>
                 </div>

                 <div className="doctorcontent-field">
                           <h5>Phone : <span>{doctordetail.mobile_no}</span></h5>
                 </div>



            </div>

        </div>

        

    </div>
  )
}

export default DoctorProfile