import React, { useRef, useEffect, useState } from 'react'
import "../styles/report.css"
import Header from './Header'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Report() {

    const printRef = useRef()

    const navigate = useNavigate()


    const [myreport, setMyReport] = useState(null)


    const handleDownloadPdf = async () => {

        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Report.pdf');
    };

    const getMyreport = async () => {

        try {

            var appointid = sessionStorage.getItem('patappointid')
            const res = await axios.get(`http://localhost:8080/getReport/${appointid}`)
            console.log("My report : ", res)

            setMyReport(res.data)
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

            getMyreport()

        }

    })

    return myreport?(

        <div>

            <Header />

            <div id="patient_report" ref={printRef}>

                <h2>Diagnostic Report</h2>


                <div id="patient_personal_details_report">

                    <div className="patient_personal_details_report_col">

                        <div className="patient_personal_details_report_col_heading">
                            <p><strong>Patient Name</strong></p>
                            <p><strong>Age</strong></p>
                            <p><strong>Gender</strong></p>
                        </div>

                        <div className="patient_personal_details_report_col_description">
                            <p> : {myreport.patient.first_name + " " + myreport.patient.last_name}</p>
                            <p> : {myreport.patient.age} years</p>
                            <p> : {myreport.patient.gender}</p>
                        </div>

                    </div>

                    <div className="patient_personal_details_report_col">

                        <div className="patient_personal_details_report_col_heading">
                            <p><strong>Doctor Name</strong></p>
                            <p><strong>Appointment Date</strong></p>
                            <p><strong>Appointment Time</strong></p>
                        </div>

                        <div className="patient_personal_details_report_col_description">
                            <p> : Dr. Harish Goel</p>
                            <p> : {myreport.appointment.date.substring(8, 10) + "/" + myreport.appointment.date.substring(5, 7) + "/" + myreport.appointment.date.substring(0, 4)}</p>
                            <p> : {myreport.appointment.slot.start_time}</p>
                        </div>
                    </div>

                </div>


                <div id="report_checkup_details">

                    <center>
                        <h3><strong>Results</strong></h3>
                    </center>


                    <div id="measurements" className="report_checkup_details_section">

                        <h4>Measurements</h4>


                        <table className="table table-striped table-hover table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Parameter</th>
                                    <th>Result</th>
                                    <th>Normal Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Temperature</strong></td>
                                    <td>{myreport.temperature}°F<sup></sup></td>
                                    <td>97°F to 99°F</td>
                                </tr>
                                <tr>
                                    <td><strong>Oxygen Level</strong></td>
                                    <td>{myreport.oxygen_level}%</td>
                                    <td>95% to 100%</td>
                                </tr>
                                <tr>
                                    <td><strong>Pulse Rate</strong></td>
                                    <td>{myreport.pulse} bpm</td>
                                    <td>60 to 100 bpm</td>
                                </tr>
                                <tr>
                                    <td><strong>Blood Pressure</strong></td>
                                    <td>{myreport.blood_pressure} mmHg</td>
                                    <td>90 to 120 mmHg</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>



                    <div className="report_checkup_details_section">

                        <h4>Symptoms</h4>

                        <p>{myreport.symptoms}</p>

                    </div>


                    <div className="report_checkup_details_section">

                        <h4>Diagnosis</h4>

                        <p>{myreport.diagnosis}</p>

                    </div>


                    <div className="report_checkup_details_section">

                        <h4>Prescription</h4>

                        <p>
                            {myreport.prescripton}
                        </p>

                    </div>



                    <div className="report_checkup_details_section">

                        <h4>Remarks</h4>

                        <p>
                            {myreport.remark}
                        </p>

                    </div>


                </div>

            </div>


            <center>
                <button type="button" className="btn bg-primary" id="downloadbutton" onClick={handleDownloadPdf}>Download Report</button>
            </center>

        </div>

    ): null
}

export default Report