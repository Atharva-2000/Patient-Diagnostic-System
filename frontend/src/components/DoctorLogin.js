import React, { useState, useEffect } from 'react'
import "../styles/loginstyle.css"
import backimage from "../assets/left.png.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function DoctorLogin() {

    const navigate = useNavigate()

    const ddetail = { username: '', password: '' }

    const [doctordetail, setDoctorDetail] = useState(ddetail)

    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);



    const handledata = (e) => {

        const { name, value } = e.target;

        setDoctorDetail({ ...doctordetail, [name]: value })

    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setFormerror(validationform(doctordetail))
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


    const logindoctor = async (docdata) => {

        try {

            const res = await axios.post("http://localhost:8080/doctorLogin", docdata)
            console.log(docdata)
            console.log(res)

            if (res.data === false) {
                toast.error("Invalid username or password !!")
            }
            else {
                
                sessionStorage.setItem('doctortoken','docid')
                navigate("/doctorhome")
            }
        }
        catch {
            toast.error("Something went wrong !!")
        }
    }


    useEffect(() => {      
        if (sessionStorage.getItem('doctortoken')) {
             navigate('/doctorhome')
        }
    },[])



    useEffect(() => {

        if (Object.keys(formerror).length === 0 && issubmit) {

            console.log(doctordetail);

            logindoctor(doctordetail)

            setSubmit(false)

            setDoctorDetail({ username: '', password: '' })



        }
    }, [doctordetail, formerror, issubmit])


    //let backimage = require('../assets/left.png.svg')

    return (
        <div className={"patientlogmaindiv"}>
            <section className={"sectiondiv"}>

                <div className={"imgBx"}>
                    {/* <img src="../assets/medicineimage.jpg" alt="MedImage"/> */}

                </div>

                <div className={"contentBx"}>


                    <div className={"formBx"}>

                        <div className="top_link"><Link to="/" className={"rethomelink"}><img src={backimage} alt="" />Return Home</Link></div>

                        <h2>Doctor Login</h2>

                        <form action="" method="post" name="doctorloginform" onSubmit={handlesubmit}>

                            <div className={"inputBx"}>

                                <span>Username</span>
                                <input type="text" name="username" value={doctordetail.username} onChange={handledata} required /><br />
                                <label className={"error_msg"}><strong>{formerror.username}</strong></label>
                            </div>

                            <div className={"inputBx"}>

                                <span>Password</span>
                                <input type="password" name="password" value={doctordetail.password} onChange={handledata} required />

                            </div>


                            <div className={"inputBx"}>

                                <input type="submit" value="Log In" />

                            </div>

                        </form>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default DoctorLogin