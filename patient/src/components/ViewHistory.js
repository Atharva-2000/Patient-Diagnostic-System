import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import "../styles/viewhistory.css"


function ViewHistory() {

  /* const history = { illness : ["Arthritis", "Diabetes", "Kidney Problems", "Liver Disease"], surgery:'Yes', allergy:'Cough', stress:'No', sleep:'No', medprob:'High blood pressure', diet:'Yes', drink:'No', transfusion:'No'  }
   

   var last_elem = history.illness[history.illness.length-1]

   var comma = ", "*/
    
    
    const [history, setHistory] = useState({})


    const getpatienthistory = async() => {
        
        try {
            let patientid = sessionStorage.getItem('apppatientid')
            const res = await axios.get(`http://localhost:8080/getHistory/${patientid}`)
            console.log('Patient history data', res.data)
            
            setHistory(res.data)
        }
        catch {
            toast.error("Something went wrong !!")
        }
    }

    useEffect(() => {
        
        getpatienthistory()

    })

  return (

   <div>


        <div id="viewhistory">
                  
                    <table className="table table-bordered table-hover table-striped">
                            <thead className="table-dark">
                                    <tr>
                                        <th className="to_align_text_in_center">Sr.No</th>
                                        <th className="to_align_text_in_center">Question Asked</th>
                                        <th className="to_align_text_in_center">Patient's Response</th>
                                    </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="to_align_text_in_center">1.</td>
                                        <td className="to_align_text_in_center">Any previous illness ?</td>
                                        <td className="to_align_text_in_center">{

                                            // history.illness.map((i)=>{
                                            //   if(i===last_elem)
                                            //      comma=" "
                                            //     return (i+comma)
                                            // })
                                                 history.illness
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">2.</td>
                                        <td className="to_align_text_in_center">Have you had any past surgeries ?</td>
                                        <td className="to_align_text_in_center">{history.surgery}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">3.</td>
                                        <td className="to_align_text_in_center">Are you allergic to anything?</td>
                                        <td className="to_align_text_in_center">{history.allergy}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">4.</td>
                                        <td className="to_align_text_in_center">Do you feel stressed ?</td>
                                        <td className="to_align_text_in_center">{history.stress}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">5.</td>
                                        <td className="to_align_text_in_center">Do you have trouble sleeping?</td>
                                        <td className="to_align_text_in_center">{history.sleep}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">6.</td>
                                        <td className="to_align_text_in_center">List any medical problems that other doctors have diagnosed</td>
                                        <td className="to_align_text_in_center">{history.other_doctor_problems}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">7.</td>
                                        <td className="to_align_text_in_center">Are you dieting?</td>
                                        <td className="to_align_text_in_center">{history.dieting}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">8.</td>
                                        <td className="to_align_text_in_center">Do you drink alcohol or any other hard drinks ?</td>
                                        <td className="to_align_text_in_center">{history.drink}</td>
                                    </tr>
                                    <tr>
                                        <td className="to_align_text_in_center">9.</td>
                                        <td className="to_align_text_in_center">Have you ever had a blood transfusion?</td>
                                        <td className="to_align_text_in_center">{history.blood}</td>
                                    </tr>
        
                            </tbody>
                        </table>
        
            </div>

   </div>


    
  )
}

export default ViewHistory