import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "../styles/myreports.css"
import Header from './Header'

function MyReports() {

    const navigate = useNavigate()

    const click_to_view_report = (appointmentid) => {

        sessionStorage.setItem('patappointid', appointmentid)

       /* let aid = sessionStorage.getItem('patappointid')

        alert("Appointment id selected :" + aid)*/

        navigate("/report")

    }


    const [myreportlist, setMyreportlist] = useState([])
    const [dataexists, setDataExists] = useState(false)

    var i = 0


    const getmyreportlist = async (patid) => {

        try {
            const res = await axios.get(`http://localhost:8080/getReportsByPatientId/${patid}`)
            console.log(res.data)

            if (res.data.length !== 0) {
                setDataExists(true)
                setMyreportlist(res.data)
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

    })

    useEffect(() => {

        if (sessionStorage.getItem('patienttoken')) {
            var userid = sessionStorage.getItem('patienttoken')
            getmyreportlist(userid)
        }
        else {
            navigate("/")
        }

        if (sessionStorage.getItem('patappointid'))
         {
            sessionStorage.removeItem('patappointid')
         }

    }, [])

    return (
        <div>
            <Header />
            <div id="myreports">

                <div id="top-section-myreports">
                    <h1>My Reports</h1>
                    <p>View your medical reports</p>
                </div>


                <div id="myreportslist">

                    {dataexists ? <table className="table table-bordered table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th className="to_align_text_in_center">Sr.No</th>
                                <th className="to_align_text_in_center">Appointment Date</th>
                                <th className="to_align_text_in_center">Appointment Time</th>
                                <th className="to_align_text_in_center">Doctor Name</th>
                                <th className="to_align_text_in_center">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myreportlist.map((j) => {

                                    i++;

                                    return (
                                        <tr key={i}>
                                            <td className="to_align_text_in_center">{i}</td>
                                            <td className="to_align_text_in_center">{j.appointment.date.substring(8, 10) + "/" + j.appointment.date.substring(5, 7) + "/" + j.appointment.date.substring(0, 4)}</td>
                                            <td className="to_align_text_in_center">{j.appointment.slot.start_time}</td>
                                            <td className="to_align_text_in_center">Dr. Harish Goel</td>
                                            <td className="to_align_text_in_center">
                                                <button className="btn btn-primary"
                                                    onClick={() => {
                                                        click_to_view_report(j.appointment.appointment_id)
                                                    }} >View Report</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                            {/* <tr>
                                        <td className="to_align_text_in_center">1</td>
                                        <td className="to_align_text_in_center">5/3/2023</td>
                                        <td className="to_align_text_in_center">11:00</td>
                                        <td className="to_align_text_in_center">Dr. Harish Goel</td>
                                        <td className="to_align_text_in_center"><button className="btn btn-primary" onClick={click_to_view_report} >View Report</button></td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">2</td>
                                        <td className="to_align_text_in_center">14/2/2023</td>
                                        <td className="to_align_text_in_center">10:30</td>
                                        <td className="to_align_text_in_center">Dr. Harish Goel</td>
                                        <td className="to_align_text_in_center"><button className="btn btn-primary" onClick={click_to_view_report} >View Report</button></td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">3</td>
                                        <td className="to_align_text_in_center">10/1/2023</td>
                                        <td className="to_align_text_in_center">12:00</td>
                                        <td className="to_align_text_in_center">Dr. Harish Goel</td>
                                        <td className="to_align_text_in_center">
                                        <button className="btn btn-primary"
                                          onClick={() => {
                                             click_to_view_report()
                                          }} >View Report</button>
                                       </td>
                                   </tr>
                                 */}

                        </tbody>
                    </table> : <h3 align="center">No Data Available</h3>}


                </div>



            </div>


        </div>
    )
}

export default MyReports