import React, { useState, useEffect } from 'react'
import "../styles/loginstyle.css"
import backimage from "../assets/left.png.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function PatientLogin() {

    const navigate = useNavigate()


    const pdetail = { username: '', password: '' }

    const [patientdetail, setPatientDetail] = useState(pdetail)

    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);



    const handledata = (e) => {

        const { name, value } = e.target;

        setPatientDetail({ ...patientdetail, [name]: value })

    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setFormerror(validationform(patientdetail))
        setSubmit(true)

    }


    const validationform = (value) => {
        const errors = {};

        const regx = /^[A-Za-z]+\w{3,16}$/;


        if (!regx.test(value.username)) {
            errors.username = "Invalid username !!"
        }



        return errors;

    }


    const getidbyusername = async (user_name) => {

        try {
            const resid = await axios.get(`http://localhost:8080/getIdByUsername/${user_name}`)
            console.log(resid.data)

            return (resid.data)
        }
        catch {
            toast.error("Something went wrong !!")
        }

    }

    const loginpatient = async (patdata) => {

        try {

            const res = await axios.post("http://localhost:8080/patientLogin", patdata)
            console.log(patdata)
            console.log(res)

            if (res.data === false) {
                toast.error("Invalid username or password !!")
            }
            else {

                let patientid = await getidbyusername(patdata.username)
                sessionStorage.setItem('patienttoken', patientid)
                navigate("/patienthome")
            }
        }
        catch {
            toast.error("Something went wrong !!")
        }
    }


    useEffect(() => {
        if (sessionStorage.getItem('patienttoken')) {
            navigate("/patienthome")
        }
    },[])


    useEffect(() => {

        if (Object.keys(formerror).length === 0 && issubmit) {

            console.log(patientdetail);

            loginpatient(patientdetail)

            setSubmit(false)

            setPatientDetail({ username: '', password: '' })

            //   navigate("/patienthome")

        }
    }, [patientdetail, formerror, issubmit])





    //let backimage = require('../assets/left.png.svg')

    return (
        <div className={"patientlogmaindiv"}>
            <section className={"sectiondiv"}>

                <div className={"imgBx"}>
                    {/* <img src="../assets/medicineimage.jpg" alt="MedImage"/> */}

                </div>

                <div className={"contentBx"}>


                    <div className={"formBx"}>

                        {/* <div className="top_link"><a href="#"><img src={backimage} alt=""/>Return Home</a></div> */}

                        <div className="top_link"><Link to="/" className={"rethomelink"}><img src={backimage} alt="" />Return Home</Link></div>

                        <h2>Patient Login</h2>

                        <form action="" method="post" name="patientloginform" onSubmit={handlesubmit}>

                            <div className={"inputBx"}>

                                <span>Username</span>
                                <input type="text" name="username" value={patientdetail.username} onChange={handledata} required /><br />
                                <label className={"error_msg"}><strong>{formerror.username}</strong></label>
                            </div>

                            <div className={"inputBx"}>

                                <span>Password</span>
                                <input type="password" name="password" value={patientdetail.password} onChange={handledata} required />

                            </div>


                            <div className={"inputBx"}>

                                <input type="submit" value="Log In" />

                            </div>

                            <div className="inputBx">

                                <p>Don't have a account?<Link to="/register">Sign up</Link></p>

                            </div>

                        </form>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default PatientLogin