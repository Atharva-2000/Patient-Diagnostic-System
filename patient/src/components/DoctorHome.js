import React, { useEffect, useState } from 'react'
import DoctorHeader from './DoctorHeader'
import "../styles/doctorhome.css"
import doctorimage from "../assets/doctor2.jpg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

function DoctorHome() {

  const navigate = useNavigate()
  
  const gotoappointmentlist = () => {
    
    navigate("/appointmentlist")
  }


  const [doctorname, setDoctorName] = useState('')


  const getdoctorname = async () => {
    
    try {

      const res = await axios.get(`http://localhost:8080/getDocFirstName`)

      console.log(res.data)

      setDoctorName(res.data)
  
    }
    catch {
       toast.error("Something went wrong !!")
    }
  }
  
  useEffect(() => {
    
    if (!sessionStorage.getItem('doctortoken'))
    {
       navigate("/")
    }
    else
    {
         getdoctorname()
    }

  })


  return (
    <div>
        <DoctorHeader/>
        <div id="doctor_home">

          <main>
            <section id="left-sect">
            <h3>Welcome {doctorname}</h3>
                <h2>Making Health Care Better Together</h2>
                <button onClick={gotoappointmentlist}>
                    View Appointment List
                </button>
            </section>

            <section id="right-sect">
                <figure>
                    <img id="mydocimage" src={doctorimage} alt={"not loaded"}/>
                </figure>
            </section>
          </main>
 

        </div>
    </div>
  )
}

export default DoctorHome