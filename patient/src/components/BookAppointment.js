import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import "../styles/bookappointment.css"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify'
import axios from 'axios'



function BookAppointment() {


   const navigate = useNavigate()


   const checkhistoryexists = async (uid) => {

      try {
         const checkres = await axios.get(`http://localhost:8080/checkHistory/${uid}`)
         console.log('Does history exists :', checkres.data)
         return (checkres.data)
      }
      catch {
         toast.error("Something went wrong !!")
      }
   }


   const addappointment = async (appointment_entry) => {
 
       try {
          const res = await axios.post(`http://localhost:8080/addAppointment`, appointment_entry)
          console.log(res.data)
 
          if (res.data === true) {
             toast.success("Booking Successfull !!")
             navigate("/viewappointment")
          }
          else {
             toast.error("Something went wrong while booking appointment !!")
          }
       }
       catch {
          toast.error("Something went wrong while booking appointment !!")
       }
    }


   const checknotactive = async () => {
        
      try {

         let userid = sessionStorage.getItem('patienttoken')
         const checknotactiveres = await axios.get(`http://localhost:8080/checkStatus/${userid}`)
         console.log(checknotactiveres.data)

         return (checknotactiveres.data) 


      }
      catch {
         toast.error("Something went wrong while booking appointment !!")
      }
   }
   
   
   const bookfunc = (slotid) => {

      var userid = sessionStorage.getItem('patienttoken')

      checkhistoryexists(userid).then(aldreadyfilled => {

         console.log('Aldreadyfilled :', aldreadyfilled)


         let extrazero = ""
         if (selectedDate.getMonth() < 9) {
            extrazero = "0"
         }


         var entered_date = selectedDate.getFullYear() + "-" + extrazero + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate()

         if (aldreadyfilled === true) {



            const appointment_entry_data = {

               "patient": {
                  "patient_id": userid
               },
               "date": entered_date,
               "slot": {
                  "slot_id": slotid
               },
               "status": "Active"
            }


            console.log('Slot id booked is:', slotid)
            
            console.log('Appointment entry :',appointment_entry_data)

            //toast.success("Booking Successfull !!")
            addappointment(appointment_entry_data)

         }
         else {

            sessionStorage.setItem('appdate', entered_date)
            sessionStorage.setItem('appslot', slotid)
            navigate("/clinicalhistory")
         }
      })

   }


   const [timeslots, setTimeSlots] = useState([])

   const [selectedDate, setSelectedDate] = useState(new Date())


   //let timearr = ["9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30"]

   //let timearr = ["9:00", "9:30", "10:00", "10:30"]


   useEffect(() => {

      if (!sessionStorage.getItem('patienttoken')) {
         navigate("/")
      }

   })


   const gettimeslots = async (entereddate) => {

      try {
         const res = await axios.get(`http://localhost:8080/getSlotsByDate/${entereddate}`)
         console.log(res.data)
         setTimeSlots(res.data)
      }
      catch {
         toast.error("Something went wrong !!")
      }
   }


   const showslots = () => {

      console.log('Selected Date:', selectedDate)

      let extrazero = ""
      if (selectedDate.getMonth() < 9) {
         extrazero = "0"
      }


      let entered_date = selectedDate.getFullYear() + "-" + extrazero + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate()
      console.log('Selected Date in required format:', entered_date)
      gettimeslots(entered_date)
   }


   useEffect(() => {

      // var userid = sessionStorage.getItem('patienttoken')

      let extrazero = ""

      if (selectedDate.getMonth() < 9) {
         extrazero = "0"
      }

      let current_date = selectedDate.getFullYear() + "-" + extrazero + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate()

      console.log('Date on page loading in required format', current_date)

      gettimeslots(current_date)


   }, [])





   return (
      <div>
         <Header />

         <div id="bookappoint">

            <div id="top-section-book">

               <p>Book Appointment</p>
               <h2>Book Your Slot</h2>

            </div>

            <div id="dateselection">

               <h1>Select Date</h1>

               <form action="#" method="post" name="dateselectionform">

                  <DatePicker
                     selected={selectedDate}
                     onChange={date => setSelectedDate(date)}
                     className="datefield"
                     //   dateFormat='dd/MM/yyyy'
                     dateFormat='yyyy-MM-dd'
                     minDate={new Date()}
                     maxDate={(new Date().setDate(new Date().getDate() + 30))}
                     filterDate={date => date.getDay() !== 0}
                     disabledKeyboardNavigation
                     closeOnScroll={true}

                  />


                  <br />

                  <button type="button" id="datesubmitbutton" onClick={showslots}>Submit</button>


               </form>

            </div>

            <div id="timeslotselection">


               <h1>Select Time Slot</h1>

               <table className="table table-bordered table-striped table-hover">
                  <thead className="table-dark">
                     <tr>
                        <th className="to_align_text_in_center">Start Time</th>
                        <th className="to_align_text_in_center">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {

                        //   timearr.map((j)=>{
                        //        return(
                        //         <tr>
                        //            <td className="to_align_text_in_center">{j}</td>
                        //            <td className="to_align_text_in_center">
                        //               <button className="btn btn-success" onClick={myfunc} >Book Slot</button>
                        //            </td>
                        //         </tr>
                        //        )
                        //   })


                        timeslots.map((j) => {

                           return (

                              <tr key={j.slot_id}>
                                 <td className="to_align_text_in_center">{j.start_time}</td>
                                 <td className="to_align_text_in_center">
                                    <button className="btn btn-success" onClick={async () => {

                                       const checkresult = await checknotactive()

                                       console.log('Not active appointment:', checkresult)

                                       if(checkresult === true)
                                          {
                                              console.log("Patient has no active appointment")
                                              bookfunc(j.slot_id)
                                          }
                                       else
                                          {
                                               toast.warning("You aldready have an active appointment !!")
                                          }

                                    }
                                    }>Book Slot</button>
                                 </td>
                              </tr>
                           )
                        })

                     }

                  </tbody>
               </table>

            </div>


         </div>



      </div>
   )
}

export default BookAppointment