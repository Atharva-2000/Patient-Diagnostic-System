import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import "../styles/clinicalhistory.css"
import { toast } from 'react-toastify'
import axios from 'axios'

function ClinicalHistory() {

    const navigate = useNavigate()


    const historydetail = { illness: [], surgery: '', allergy: '', stress: '', sleep: '', medprob: '', diet: '', drink: '', transfusion: '' }

    //const histdetail = { illness : [], surgery:'', allergy:'', stress:'', sleep:'', medprob:'', diet:'', drink:'', transfusion:''  }

    const [formvalue, setFormvalue] = useState(historydetail)

    const [ill, setIll] = useState([])


    const handleillness = (e) => {

        const { value, checked } = e.target;

        if (checked) {
            setIll([...ill, value])
        }
        else {
            setIll(ill.filter((e) => (e !== value)))
        }

        console.log("Illness", ill)

        setFormvalue({ ...formvalue, illness: ill })
    }


    const handleformvalue = (e) => {

        const { name, value } = e.target;
        setFormvalue({ ...formvalue, [name]: value });

    }


    const addappointment = async (appointment_entry) => {

        try {
            const res = await axios.post(`http://localhost:8080/addAppointment`, appointment_entry)
            console.log(res.data)

            if (res.data === true) {

                toast.success("Booking Successfull !!")

                sessionStorage.removeItem('appdate')
                sessionStorage.removeItem('appslot')

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



    const sendhistory = async (pathistdetail) => {

        try {

            console.log('Finally the patient history data to be submiited:', pathistdetail)

            const res = await axios.post('http://localhost:8080/addHistory', pathistdetail)
            console.log(res.data)

            if (res.data === true) {

                let userid = sessionStorage.getItem('patienttoken')
                let appointmentdate = sessionStorage.getItem('appdate')
                let appointmentslotid = sessionStorage.getItem('appslot')


                const appointment_entry_data = {

                    "patient": {
                        "patient_id": userid
                    },
                    "date": appointmentdate,
                    "slot": {
                        "slot_id": appointmentslotid
                    },
                    "status": "Active"
                }

                addappointment(appointment_entry_data)

            }
            else {
                toast.error("Something went wrong while submitting clinical history !!")
            }
        }
        catch {
            toast.error("Something went wrong !!")
        }
    }


    const handlesubmit = (e) => {
        e.preventDefault()
        console.log("After submitting", ill)

    
        var allillness = ""

        var i = 0

        for (i = 0; i < ill.length; i++)
        {
            allillness = allillness + ill[i]
            
            if (i !== (ill.length - 1))
            {
                allillness = allillness + ", "
            }
        }

        i = 0

        let userid = sessionStorage.getItem('patienttoken')

        const histdetail_to_be_sent = {

            "patient": {
                "patient_id": userid
            },

            "illness": allillness,
            "surgery": formvalue.surgery,
            "allergy": formvalue.allergy,
            "stress": formvalue.stress,
            "sleep": formvalue.sleep,
            "other_doctor_problems": formvalue.medprob,
            "dieting": formvalue.diet,
            "drink": formvalue.drink,
            "blood": formvalue.transfusion
        }

        console.log(formvalue)
        console.log("Same data again", histdetail_to_be_sent)

        sendhistory(histdetail_to_be_sent)
        //toast.success("Booking Successfull !")
    }


    useEffect(() => {

        if (!sessionStorage.getItem('patienttoken')) {
            navigate("/")
        }

    })

    return (
        <div>

            <Header />

            <div id="clinichistory">


                <div className="gen_sec_head">
                    <h2>Clinical History</h2>
                </div>


                <div id="historyform">

                    <h3>Fill in the following details</h3>

                    <form name="clinicalhistoryform" method="post" onSubmit={handlesubmit}>


                        <div className="history_individual_field">
                            <h5>1)  Any previous illness ?</h5>
                            <div className="multiple_fields">

                                <div className="multiple_fields_col">

                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="arthritis" name="arthritis" value="arthritis" onChange={handleillness} />
                                        <label htmlFor="arthritis">Arthritis</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="bleeding" name="bleeding" value="bleeding" onChange={handleillness} />
                                        <label htmlFor="bleeding">Bleeding Disorder</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="diabetes" name="diabetes" value="diabetes" onChange={handleillness} />
                                        <label htmlFor="diabetes">Diabetes</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="glaucoma" name="glaucoma" value="glaucoma" onChange={handleillness} />
                                        <label htmlFor="glaucoma">Glaucoma</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="stomach" name="stomach" value="stomach" onChange={handleillness} />
                                        <label htmlFor="stomach">Stomach Problems</label>
                                    </div>

                                </div>

                                <div className="multiple_fields_col">

                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="kidney" name="kidney" value="kidney" onChange={handleillness} />
                                        <label htmlFor="kidney">Kidney Problems</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="liver" name="liver" value="liver" onChange={handleillness} />
                                        <label htmlFor="liver">Liver Disease</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="lung" name="lung" value="lung" onChange={handleillness} />
                                        <label htmlFor="lung">Lung Problems</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="hiv" name="hiv" value="hiv" onChange={handleillness} />
                                        <label htmlFor="hiv">HIV/AIDS</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="cancer" name="cancer" value="cancer" onChange={handleillness} />
                                        <label htmlFor="cancer">Cancer</label>
                                    </div>

                                </div>

                                <div className="multiple_fields_col">

                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="thyroid" name="thyroid" value="thyroid" onChange={handleillness} />
                                        <label htmlFor="thyroid">Thyroid Disease</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="seizures" name="seizures" value="seizures" onChange={handleillness} />
                                        <label htmlFor="seizures">Seizures</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="skin" name="skin" value="skin" onChange={handleillness} />
                                        <label htmlFor="skin">Skin Problems</label>
                                    </div>
                                    <div className="multiple_fields_options">
                                        <input type="checkbox" id="stroke" name="stroke" value="stroke" onChange={handleillness} />
                                        <label htmlFor="stroke">Stroke</label>
                                    </div>

                                </div>

                            </div>
                        </div>



                        <div className="history_individual_field">
                            <h5>2)  Have you had any past surgeries ?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="surgyes" name="surgery" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="surgyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="surgno" name="surgery" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="surgno">No</label>
                                </div>
                            </div>
                        </div>


                        <div className="history_individual_field">
                            <h5>3)  Are you allergic to anything? If yes then mention</h5>
                            <input type="text" name="allergy" id="allergy" value={formvalue.allergy} onChange={handleformvalue} />
                        </div>


                        <div className="history_individual_field">
                            <h5>4)  Do you feel stressed ?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="stressyes" name="stress" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="stressyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="stressno" name="stress" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="stressno">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="history_individual_field">
                            <h5>5)  Do you have trouble sleeping?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="sleepyes" name="sleep" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="sleepyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="sleepno" name="sleep" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="sleepno">No</label>
                                </div>
                            </div>
                        </div>


                        <div className="history_individual_field">
                            <h5>6)  List any medical problems that other doctors have  diagnosed</h5>
                            <textarea name="medprob" id="medprob" value={formvalue.medprob} onChange={handleformvalue}></textarea>
                        </div>


                        <div className="history_individual_field">
                            <h5>7)  Are you dieting?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="dietyes" name="diet" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="dietyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="dietno" name="diet" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="dietno">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="history_individual_field">
                            <h5>8)  Do you drink alcohol or any other hard drinks ?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="drinkyes" name="drink" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="drinkyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="drinkno" name="drink" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="drinkno">No</label>
                                </div>
                            </div>
                        </div>

                        <div className="history_individual_field">
                            <h5>9)  Have you ever had a blood transfusion?</h5>
                            <div className="individual_field_yes_no">
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="transfusionyes" name="transfusion" value="Yes" onChange={handleformvalue} required />
                                    <label htmlFor="transfusionyes">Yes</label>
                                </div>
                                <div className="individual_field_yes_no_options">
                                    <input type="radio" id="transfusionno" name="transfusion" value="No" onChange={handleformvalue} required />
                                    <label htmlFor="transfusionno">No</label>
                                </div>
                            </div>
                        </div>

                        <center>
                            <button type="submit" id="historysubmit" className="btn btn-primary">Submit</button>
                        </center>

                    </form>

                </div>

            </div>


        </div>
    )
}

export default ClinicalHistory