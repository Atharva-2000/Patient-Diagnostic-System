import React, { useEffect, useState } from 'react'
import Header from './Header'
import "../styles/viewappointment.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function ViewAppointment() {

  const navigate = useNavigate()

  const [apppointmentdate, setAppointmentDate] = useState('')
  const [appointmenttime, setAppointmentTime] = useState('')
  const [dataexists, setDataExists] = useState(false)



  const cancelappointment = async (uid) => {

    try {

      const cancelcheck = await axios.delete(`http://localhost:8080/deleteAppointment/${uid}`)
      console.log('Cancelcheck value:', cancelcheck.data)

      if (cancelcheck.data === true) {

        toast.success("Cancelled Successfully !!")
        viewmyappointment(uid)
      }
      else {
        toast.error("Something went wrong while cancelling the appointment !!")
      }

    }
    catch {
      toast.error("Something went wrong while cancelling the appointment !!")
    }
  }


  const viewmyappointment = async (patid) => {

    try {
      const res = await axios.get(`http://localhost:8080/getAppointmentByPatientId/${patid}`)
      console.log(res.data)

      if (res.data) {

        setDataExists(true)
        let appointdate = (res.data.date).substring(8, 10) + "/" + (res.data.date).substring(5, 7) + "/" + (res.data.date).substring(0, 4)
        setAppointmentDate(appointdate)
        setAppointmentTime(res.data.slot.start_time)

      }
      else {
        setDataExists(false)
      }

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

      viewmyappointment(userid)

    }

  })





  return (
    <div>
      <Header />

      <div id="viewappoint">

        <div id="top-section-view">


          <h3>View Appointments</h3>

        </div>


        <div id="myappointments">


          <div className="gen_sec_head">
            <h2>My Appointments</h2>
          </div>
          {

            dataexists ? <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th className="to_align_text_in_center">Doctor Name</th>
                  <th className="to_align_text_in_center">Date</th>
                  <th className="to_align_text_in_center">Time</th>
                  <th className="to_align_text_in_center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="to_align_text_in_center">Dr. Harish Goel</td>
                  <td className="to_align_text_in_center">{apppointmentdate} </td>
                  <td className="to_align_text_in_center">{appointmenttime}</td>
                  <td className="to_align_text_in_center">
                    <button
                      className="btn btn-danger"
                      onClick={() => {

                        let userid = sessionStorage.getItem('patienttoken')

                        cancelappointment(userid)

                      }}
                    >Cancel</button>
                  </td>
                </tr>

              </tbody>
            </table> : <h3 align="center">No Data Available</h3>
          }
        </div>

      </div>

    </div>
  )
}

export default ViewAppointment