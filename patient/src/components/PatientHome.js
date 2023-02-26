import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/home.css"
import doctorimage from "../assets/doctor.png"
import Header from './Header'
import axios from 'axios'
import { toast } from 'react-toastify'

function PatientHome() {

  const navigate = useNavigate()

  const gotomakeappointment = () => {
    navigate("/bookappointment")
  }


  const [patientName, setPatientName] = useState('');


  const getUserFirstName = async (patid) => {

    try {

      const res = await axios.get(`http://localhost:8080/getFirstName/${patid}`)
      console.log(res.data)
      setPatientName(res.data)

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
      getUserFirstName(userid)
    }

  })

  return (
    <div >

      <Header />

      <div id="content">
        <main>
          <section className="left-sec">
            <h3>Welcome {patientName}</h3>
            <h2> We Are Here For Your Care</h2>
            <h1>  We The Best Doctors</h1>
            <p>We are here for your care 24/7. Any help just call us.</p>
            <button onClick={gotomakeappointment}>
              Book Appointment
            </button>
          </section>

          <section className="right-sec">
            <figure>
              <img className="mimage" src={doctorimage} alt={"not loaded"} />
            </figure>
          </section>
        </main>
      </div>


    </div>
  )
}

export default PatientHome