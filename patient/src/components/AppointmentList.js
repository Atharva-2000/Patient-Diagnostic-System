import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/appointmentlist.css"
import DoctorHeader from './DoctorHeader'
import TodayAppointment from './TodayAppointment'
import AllAppointment from './AllAppointment'

function AppointmentList() {

   const navigate = useNavigate()

   useEffect(() => {

      if (!sessionStorage.getItem('doctortoken')) {
         navigate("/")
      }
   })

   return (
      <div>
         <DoctorHeader />

         <div id="doctorappointmentlist">

            <div className="gen_sec_head">
               <h2>My Schedule</h2>
            </div>


            <div className="container mt-5">


               <ul className="nav nav-tabs" role="tablist" id="appointtabs">
                  <li className="nav-item">
                     <a className="nav-link active" data-bs-toggle="tab" href="#todayappointmentlist">Today's Appointment</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" data-bs-toggle="tab" href="#allappointmentlist">All Appointments</a>
                  </li>
               </ul>


               <div className="tab-content">
                  <div id="todayappointmentlist" className="container tab-pane active"><br />
                     <TodayAppointment />
                  </div>
                  <div id="allappointmentlist" className="container tab-pane fade"><br />
                     <AllAppointment />
                  </div>
               </div>
            </div>



         </div>

      </div>
   )
}

export default AppointmentList