import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../styles/appointmentlist.css"


function AllAppointment() {

    const navigate = useNavigate()


    const gotoexamine = (patid) => {

        sessionStorage.setItem('apppatientid', patid)
        navigate("/examine")
    }




    // const patientlist = [
    //     {
    //         firstname: "Atharva",
    //         lastname: "Dhamke",
    //         appointment_date: "22/2/2023",
    //         appointment_time: "10:00"
    //     },

    //     {
    //         firstname: "Saurabh",
    //         lastname: "Kamble",
    //         appointment_date: "22/2/2023",
    //         appointment_time: "10:30"
    //     },

    //     {
    //         firstname: "Tushar",
    //         lastname: "Salunke",
    //         appointment_date: "22/2/2023",
    //         appointment_time: "11:00"
    //     },

    //     {
    //         firstname: "Navneet",
    //         lastname: "Davang",
    //         appointment_date: "23/2/2023",
    //         appointment_time: "11:30"
    //     }
    // ]

    const [patients, setPatients] = useState([])
    const [dataexists, setDataExists] = useState(false)

    var i = 0
    // const [patientname, setPatientname] = useState("")

    // var i = 0

    // const handlesubmitname = (e) => {

    //     e.preventDefault()


    //     i = 0

    //     if (patientname === "") {
    //         setPatients(patientlist)
    //     }
    //     else {
    //         var pname = patientname.split(" ");

    //         if (pname.length === 1) {
    //             pname[0] = pname[0].trim()
    //             setPatients(patientlist.filter((g) => ((g.firstname === pname[0]) || (g.lastname === pname[0]))))
    //         }
    //         else if (pname.length === 2) {
    //             pname[0] = pname[0].trim()
    //             pname[1] = pname[1].trim()
    //             setPatients(patientlist.filter((g) => ((g.firstname === pname[0]) && (g.lastname === pname[1]))))
    //         }

    //     }



    // }


    const fetchallappointment = async () => {

        try {
            const res = await axios.get(`http://localhost:8080/getAllAppointment`)
            console.log(res.data)

            if (res.data.length !== 0) {

                setDataExists(true)
                setPatients(res.data)
            }
            else {
                setDataExists(false)
            }

        }
        catch {
            toast.error("Something went wrong !!")
        }
    }


    const rejectappointment = async (patid) => {
        try {

            const cancelcheck = await axios.delete(`http://localhost:8080/deleteAppointment/${patid}`)
            console.log('Rejectcheck value:', cancelcheck.data)

            if (cancelcheck.data === true) {

                toast.success("Rejected Successfully !!")
                fetchallappointment()
            }
            else {
                toast.error("Something went wrong while rejecting the appointment !!")
            }

        }
        catch {
            toast.error("Something went wrong while rejecting the appointment !!")
        }
    }



    useEffect(() => {

        fetchallappointment()
    })


    return (
        <div>

            <div id="appointment_mid_sec">


                {/* <div className="search_bar">
                    <form name="searchbyname" method="post" onSubmit={handlesubmitname}>
                        <input type="text" name="name" id="name" placeholder="Search by patient name . . . ." autoComplete="off"
                            onChange={(e) => {
                                setPatientname((e.target.value))
                            }}

                        // onFocus={(e)=>{
                        //    e.target.placeholder=""
                        // }}

                        // onBlur={(e)=>{
                        //   e.target.placeholder="Search by patient name . . . ."
                        // }}

                        />
                        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div> */}

            </div>


            {dataexists ? <table className="table table-bordered table-hover table-striped" id="appointmentlisttables">

                <thead className="table-dark">

                    <tr>
                        <th className="to_align_text_in_center">Sr.No</th>
                        <th className="to_align_text_in_center">Patient Name</th>
                        <th className="to_align_text_in_center">Date</th>
                        <th className="to_align_text_in_center">Time</th>
                        <th className="to_align_text_in_center">Action</th>
                    </tr>

                </thead>

                <tbody>

                    {

                        patients.map((p) => {

                            i++
                            return (
                                <tr key={i}>
                                    <td className="to_align_text_in_center">{i}</td>
                                    <td className="to_align_text_in_center">{p.patient.first_name}  {p.patient.last_name}</td>
                                    <td className="to_align_text_in_center">{p.date.substring(8, 10) + "/" + p.date.substring(5, 7) + "/" + p.date.substring(0, 4)}</td>
                                    <td className="to_align_text_in_center">{p.slot.start_time}</td>
                                    <td className="to_align_text_in_center">
                                        <button className="btn btn-success action_button" onClick={() => {
                                            gotoexamine(p.patient.patient_id)
                                        }} >Examine</button>
                                        <button className="btn btn-danger" onClick={() => {
                                            rejectappointment(p.patient.patient_id)
                                        }} >Reject</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table> : <h3 align="center">No Data Available</h3>}

        </div>
    )
}

export default AllAppointment