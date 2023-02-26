import React, {useEffect} from 'react'
import DoctorHeader from './DoctorHeader'
import "../styles/examine.css"
import { useNavigate } from 'react-router-dom'
import ViewHistory from './ViewHistory'
import ExaminationForm from './ExaminationForm'
import PatientBasicDetails from './PatientBasicDetails'

function Examine() {

     const navigate = useNavigate()

     const examine_goback = ()=>{

          sessionStorage.removeItem('apppatientid')
          navigate("/appointmentlist");
    }
    


    useEffect(() => {

        if (!sessionStorage.getItem('doctortoken')) {
            navigate("/")
        }
    })
    

  return (
    <div>
         <DoctorHeader/>

         <div id="examine">

              {/* <div id="examine_sidebar">
             
              </div>

              <div id="examine_content">

              </div> */}
                
               <div id="examine_backbutton">
                    <button type="button" className="bg-primary btn" onClick={examine_goback}><i className="fa fa-chevron-left" aria-hidden="true"></i>   <strong>Back</strong></button>
               </div>

                <div className="container mt-4">
                
                <ul className="nav nav-tabs upper_examine_nav" role="tablist">
                    <li className="nav-item col-3">
                        <a className="nav-link active" data-bs-toggle="tab" href="#patient_personal_details">Patient's Basic Details</a>
                    </li>
                    <li className="nav-item col-3">
                        <a className="nav-link" data-bs-toggle="tab" href="#patient_clinical_history">Patient's Clinical History</a>
                    </li>
                    <li className="nav-item col-3">
                       <a className="nav-link" data-bs-toggle="tab" href="#patient_examination_form">Patient Examination Form</a>
                    </li>
                </ul>

                
                <div className="tab-content">
                    <div id="patient_personal_details" className="container tab-pane active mt-4"><br/>
                        <PatientBasicDetails/>
                    </div>
                    <div id="patient_clinical_history" className="container tab-pane fade mt-4"><br/> 
                         <ViewHistory/>
                    </div>
                    <div id="patient_examination_form" className="container tab-pane fade mt-4"><br/>
                       <center>
                           <ExaminationForm/>
                       </center>     
                    </div>
                </div>
                </div>


         </div>

    </div>
  )
}

export default Examine