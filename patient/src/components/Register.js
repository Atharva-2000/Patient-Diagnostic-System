import React, { useState, useEffect } from 'react'
import "../styles/register.css"
import backimage from "../assets/left.png.svg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify'
function Register() {

  const navigate = useNavigate()


  // const person = { name: '', username: '', age: '', occupation: '', email: '', phone: '', height: '', weight: '', states: '', city: '', street: '', zipcode: '', npass: '', cpass: '', gender: '' }

  const person = { first_name: '', last_name: '', username: '', age: '', occupation: '', email: '', phone: '', height: '', weight: '', states: 'Andhra Pradesh', city: '', street: '', zipcode: '', npass: '', cpass: '', gender: '' }

  const [formvalue, setFormvalue] = useState(person);


  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handleformvalue = (e) => {

    const { name, value } = e.target;

    setFormvalue({ ...formvalue, [name]: value });

  }

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formvalue)
    setFormerror(validationform(formvalue))
    setSubmit(true)
  }

  const validationform = (value) => {

    const errors = {};

    const regx1 = /^[A-Za-z\s]*$/;

    const regx2 = /^[A-Za-z]+$/;

    const regx3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const regx4 = /^[A-Za-z]+\w{3,16}$/;

    if (!value.first_name)
      errors.first_name = "Please enter first name !!"
    else if (!regx2.test(value.first_name))
      errors.first_name = "First name should be in characters !!"

    if (!value.last_name)
      errors.last_name = "Please enter last name !!"
    else if (!regx2.test(value.last_name))
      errors.last_name = "Last name should be in characters !!"

    if (!value.username)
      errors.username = "Please enter username !!"
    else if (!regx4.test(value.username))
      errors.username = "Invalid username !!"


    if (!value.age)
      errors.age = "Please enter age !!"
    else if (isNaN(value.age))
      errors.age = "Enter a numeric value !!"


    if (value.gender === "")
      errors.gender = "Please select gender !!"


    if (!regx1.test(value.occupation))
      errors.occupation = "Only characters and spaces allowed !!"

    if (!value.email)
      errors.email = "Please enter email !!"
    else if (!regx3.test(value.email))
      errors.email = "Enter valid email !!"

    if (!value.phone)
      errors.phone = "Please enter mobile number !!"
    else if (isNaN(value.phone) || value.phone.length !== 10)
      errors.phone = "Enter a 10-digit numeric value !!"

    if ((value.height) && (isNaN(value.height)))
      errors.height = "Enter a numeric value !!"

    if ((value.weight) && (isNaN(value.weight)))
      errors.weight = "Enter a numeric value !!"

    if (!value.city)
      errors.city = "Please enter city !!"
    else if (!regx2.test(value.city))
      errors.city = "City name should be in characters !!"

    if (!value.street)
      errors.street = "Please enter street !!"
    else if (!regx1.test(value.street))
      errors.street = "Only characters and spaces allowed !!"

    if (!value.zipcode)
      errors.zipcode = "Please enter zipcode !!"
    else if (isNaN(value.zipcode) || value.zipcode.length !== 6)
      errors.zipcode = "Enter a 6-digit numeric value !!"

    if (!value.npass)
      errors.npass = "Please enter password !!"
    else if (!isNaN(value.npass) || value.npass.length < 7) {
      errors.npass = ""

      let npassmsg1 = "Password cannot be fully numeric"
      let andmsg = " and "
      let npassmsg2 = "Minimum 7 characters required"
      let exclamsg = " !!"

      if (!isNaN(value.npass)) {
        errors.npass += npassmsg1
      }

      if (!isNaN(value.npass) && value.npass.length < 7) {
        errors.npass += andmsg
      }

      if (value.npass.length < 7) {
        errors.npass += npassmsg2
      }


      errors.npass += exclamsg


    }

    if (!value.cpass)
      errors.cpass = "Please re-enter password !!"
    else if (value.npass !== value.cpass)
      errors.cpass = "Both passwords must be same !!"


    return errors;
  }


  /* const validationform = (value) => {
     const errors = {};
 
     const regx1 = /^[A-Za-z\s]*$/;
 
     const regx2 = /^[A-Za-z]+$/;
 
     const regx3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
     const regx4 = /^[a-z]+([._-]*[a-z0-9]*)$/
 
     if (!value.name)
       errors.name = "Please enter name !!"
     else if (!regx1.test(value.name))
       errors.name = "Only characters and spaces allowed !!"
 
     if (!value.username)
       errors.username = "Please enter username !!"
     else if (!regx4.test(value.username))
       errors.username = "Invalid username !!"
   
 
     if (!value.age)
       errors.age = "Please enter age !!"
     else if (isNaN(value.age))
       errors.age = "Enter a numeric value !!"
 
     if (!regx1.test(value.occupation))
       errors.occupation = "Only characters and spaces allowed !!"
 
     if (!value.email)
       errors.email = "Please enter email !!"
     else if (!regx3.test(value.email))
       errors.email = "Enter valid email !!"
 
     if (!value.phone)
       errors.phone = "Please enter mobile number !!"
     else if (isNaN(value.phone) || value.phone.length !== 10)
       errors.phone = "Enter a 10-digit numeric value !!"
 
     if ((value.height) && (isNaN(value.height)))
       errors.height = "Enter a numeric value !!"
 
     if ((value.weight) && (isNaN(value.weight)))
       errors.weight = "Enter a numeric value !!"
 
     if (!value.city)
       errors.city = "Please enter city !!"
     else if (!regx2.test(value.city))
       errors.city = "City name should be in characters !!"
 
     if (!value.street)
       errors.street = "Please enter street !!"
     else if (!regx1.test(value.street))
       errors.street = "Only characters and spaces allowed !!"
 
     if (!value.zipcode)
       errors.zipcode = "Please enter zipcode !!"
     else if (isNaN(value.zipcode) || value.zipcode.length !== 6)
       errors.zipcode = "Enter a 6-digit numeric value !!"
 
     if (!value.npass)
       errors.npass = "Please enter password !!"
     else if (!isNaN(value.npass) || value.npass.length < 7) {
       errors.npass = ""
 
       let npassmsg1 = "Password cannot be fully numeric"
       let andmsg = " and "
       let npassmsg2 = "Minimum 7 characters required"
       let exclamsg = " !!"
 
       if (!isNaN(value.npass)) {
         errors.npass += npassmsg1
       }
 
       if (!isNaN(value.npass) && value.npass.length < 7) {
         errors.npass += andmsg
       }
 
       if (value.npass.length < 7) {
         errors.npass += npassmsg2
       }
 
 
       errors.npass += exclamsg
 
 
     }
 
     if (!value.cpass)
       errors.cpass = "Please re-enter password !!"
     else if (value.npass !== value.cpass)
       errors.cpass = "Both passwords must be same !!"
 
 
     return errors;
 
   }*/


  const registerPatient = async (patientdata) => {

    try {
      /*const headers = {
        'Content-Type': 'application/json'
      };*/

      //const res = await axios.post("http://localhost:8080/addPatient", patientdata, { headers })
      const res = await axios.post("http://localhost:8080/addPatient", patientdata)

      console.log(res.data)

      if (res.data === false) {
        toast.error("User is aldready registered !!")
      }
      else {
        toast.success("Sucessfully Registered !!")
        navigate("/login")
      }

    }
    catch
    {
      toast.error("Something went wrong !!")
    }
  }


  useEffect(() => {

    if (Object.keys(formerror).length === 0 && issubmit) {

      // alert("Form submitted successfully")
      console.log(formvalue);

      //const patientname = formvalue.name.split(' ')

      const persondetail = {

        // first_name: patientname[0],
        // last_name: patientname[1],
        first_name: formvalue.first_name,
        last_name: formvalue.last_name,
        username: formvalue.username,
        age: formvalue.age,
        occupation: formvalue.occupation,
        height: formvalue.height,
        weight: formvalue.weight,
        mobile_no: formvalue.phone,
        state: formvalue.states,
        city: formvalue.city,
        street: formvalue.street,
        gender: formvalue.gender,
        zip_code: formvalue.zipcode,
        password: formvalue.npass,
        email: formvalue.email

      }


      console.log("Data to be posted :", persondetail)

      registerPatient(persondetail)

      setSubmit(false)

      // navigate("/login")

    }
  }, [formvalue, formerror, issubmit])



  return (
    <div className={"signindiv"}>
      <div className="containereg">
        <div><Link to="/" className={"rethomelink"}><img src={backimage} alt="" />Return Home</Link></div>
        <div className="title">
          Patient Registration
        </div>
        <div className="content">
          <form name="registrationform" method="post" action="#" onSubmit={handlesubmit}>
            <div className="user-details">
              {/* <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" value={formvalue.name} name="name" onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.name}</label>
              </div> */}
              <div className="input-box">
                <span className="details">First Name</span>
                <input type="text" placeholder="Enter first name" value={formvalue.first_name} name="first_name" onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.first_name}</label>
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input type="text" placeholder="Enter last name" value={formvalue.last_name} name="last_name" onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.last_name}</label>
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" value={formvalue.username} name="username" onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.username}</label>
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input type="number" placeholder="Enter your age" name="age" value={formvalue.age} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.age}</label>
              </div>
              <div>
                <h6>Gender</h6>
                <div id="gender_field">
                  <div>
                    <input type="radio" name="gender" value="Male" onChange={handleformvalue} />
                    <label>Male</label><br />
                  </div>
                  <div>
                    <input type="radio" name="gender" value="Female" onChange={handleformvalue} />
                    <label>Female</label><br />
                  </div>
                </div>
                <label className={"err_msg"}>{formerror.gender}</label>
              </div>
              <div className="input-box">
                <span className="details">Occupation</span>
                <input type="text" placeholder="Enter your occupation" name="occupation" value={formvalue.occupation} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.occupation}</label>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" name="email" value={formvalue.email} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.email}</label>
              </div>
              <div className="input-box">
                <span className="details">Mobile Number</span>
                <input type="number" placeholder="Enter your number" name="phone" value={formvalue.phone} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.phone}</label>
              </div>
              <div className="input-box">
                <span className="details">Height (in cm)</span>
                <input type="number" placeholder="Enter your height" name="height" value={formvalue.height} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.height}</label>
              </div>
              <div className="input-box">
                <span className="details">Weight</span>
                <input type="number" placeholder="Enter your weight" name="weight" value={formvalue.weight} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.weight}</label>
              </div>
              <div className="input-box">
                <span className="details">State</span>
                <select name="states" onChange={handleformvalue}>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujurat">Gujurat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerela">Kerela</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Pondichery">Pondichery</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="West Bengal">West Bengal</option>



                </select>

              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input type="text" placeholder="Enter your city" name="city" value={formvalue.city} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.city}</label>
              </div>
              <div className="input-box">
                <span className="details">Street</span>
                <input type="text" placeholder="Enter your street" name="street" value={formvalue.street} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.street}</label>
              </div>
              <div className="input-box">
                <span className="details">Zipcode</span>
                <input type="number" placeholder="Enter your zipcode" name="zipcode" value={formvalue.zipcode} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.zipcode}</label>
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" name="npass" value={formvalue.npass} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.npass}</label>
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input type="password" placeholder="Confirm your password" name="cpass" value={formvalue.cpass} onChange={handleformvalue} /><br />
                <label className={"err_msg"}>{formerror.cpass}</label>
              </div>

            </div>
            {/* <div className="gender-details">
                        <input type="radio" name="gender" id="dot-1"/>
                        <input type="radio" name="gender" id="dot-2"/>
                        <span className="gender-title">Gender</span>
                        <div className="category">
                            <label>
                                <span className="dot one"></span>
                                <span className="gender">Male</span>
                            </label>
                            <label>
                                <span className="dot two"></span>
                                <span className="gender">Female</span>
                            </label>
                        </div>
                    </div>  */}

            {/* <div>
                        <h6>Gender</h6>
                        <input type="radio" name="gender" value="Male" onChange={ handleformvalue} />
                        <label>Male</label><br/>
                        <input type="radio" name="gender" value="Female" onChange={ handleformvalue} />
                        <label>Female</label><br/>
                    </div> */}

            <div className="button">
              <input type="submit" value="Register" />
            </div>

            <div>
              <p>Aldready have an account?   <Link to="/login">Click here to Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register