import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/editpatientprofile.css"
import Header from './Header'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function EditPatientProfile() {

   const navigate = useNavigate()

   //const person = { first_name:'Atharva', last_name:'Dhamke', username:'Atharva2000', age:'22', occupation:'Software Engineer', email:'dhamkeatharva@gmail.com', mobile_no:'8788061737', height:'157', weight:'62', state:'Maharashtra', city:'Pune', street:'Bibvewadi', zip_code:'411037'}

   const person = { first_name: '', last_name: '', username: '', age: '', occupation: '', email: '', mobile_no: '', height: '', weight: '', state: 'Andhra Pradesh', city: '', street: '', zip_code: '' }

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


   /*const checkuser = async (usernam) => {

      try {

         const rescheckuser = await axios.get(`http://localhost:8080/checkUser/${usernam}`)

         console.log(rescheckuser.data)

         return (rescheckuser.data)

      }
      catch {
         toast.error("Something went wrong !!")
      }
   }*/


   const validationform = (value) => {

      const errors = {};

      const regx1 = /^[A-Za-z\s]*$/;

      const regx2 = /^[A-Za-z]+$/;

      const regx3 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const regx4 = /^[A-Za-z]+\w{3,16}$/;


      if (!regx2.test(value.first_name))
         errors.first_name = "Invalid firstname !!";

      if (!regx2.test(value.last_name))
         errors.last_name = "Invalid lastname !!";

      if (!regx4.test(value.username))
         errors.username = "Invalid username !!";
    
      if (isNaN(value.age) || (value.age < 1 || value.age > 120))
         errors.age = "Invalid age !!";

      if (!regx1.test(value.occupation))
         errors.occupation = "Invalid occupation !!";

      if (!regx3.test(value.email))
         errors.email = "Invalid email !!";

      if (isNaN(value.mobile_no) || value.mobile_no.length !== 10)
         errors.mobile_no = "Invalid phone!!";

      if ((value.height) && ((isNaN(value.height)) || (value.height < 30 || value.height > 300)))
         errors.height = "Invalid height !!";

      if ((value.weight) && ((isNaN(value.weight)) || (value.weight < 4 || value.weight > 700)))
         errors.weight = "Invalid weight !!";

      if (!regx2.test(value.city))
         errors.city = "Invalid city !!";

      if (!regx1.test(value.street))
         errors.street = "Invalid street !!";

      if (isNaN(value.zip_code) || value.zip_code.length !== 6)
         errors.zip_code = "Invalid zip_code !!";


      return errors;
   }


   const getPatientProfile = async (patid) => {

      try {

         const res = await axios.get(`http://localhost:8080/getPatient/${patid}`)
         // console.log(res.data)
         setFormvalue(res.data)

      }
      catch {
         toast.error("Something went wrong !!")
      }
   }


   const editPatientProfile = async (patid, patdata) => {

      try {

         const res = await axios.put(`http://localhost:8080/updatePatient/${patid}`, patdata)
         console.log(res.data)

         if (res.data === true) {
            await getPatientProfile(patid)
            toast.success("Updated Succesfully !!")
            // navigate("/patientprofile")
         }
         else {
            toast.error("Some error occured while updating data... !!")
         }
      }
      catch {
         toast.error("Something went wrong !!")
      }
   }


   /*useEffect(() => {

      if (!sessionStorage.getItem('patienttoken')) {
         navigate("/")
      }
      else {
         var userid = sessionStorage.getItem('patienttoken')
         getPatientProfile(userid)

      }
   }, [])*/

   useEffect(() => {
      if (!sessionStorage.getItem('patienttoken')) {
         navigate("/")
      }
   })


   useEffect(() => {

      if (sessionStorage.getItem('patienttoken')) {
         var userid = sessionStorage.getItem('patienttoken')
         getPatientProfile(userid)
      }

   }, [])


   useEffect(() => {

     
      if (Object.keys(formerror).length === 0 && issubmit) {

         // alert("Form submitted successfully")
         console.log(formvalue);
         var userid = sessionStorage.getItem('patienttoken')
         editPatientProfile(userid, formvalue)
         setSubmit(false)

         //  getPatientProfile(userid)

      }
   }, [formvalue, formerror, issubmit])



   return (
      <div>
         <Header />

         <div className="editpatientprofilepage">


            <div id="editdetails">

               <h1 align="center">Edit Profile</h1>


               <div className="editinfo">
                  {/* <center>
                        <div className="editentry">
                              <h4><span>First Name :   </span> <span>Atharva Dhamke</span></h4>
                              <button>Edit</button>

                        </div>
                        <div className="editentry">
                        <h4><span>First Name :   </span> <span>Atharva Dhamke</span></h4>
                              <button>Edit</button>
                        </div>


                        <div className="editentry">
                        <h4><span>First Name :   </span> <span>Atharva Dhamke</span></h4>
                              <button>Edit</button>
                        </div>



                        <div className="editentry">
                        <h4><span>First Name :   </span> <span>Atharva Dhamke</span></h4>
                              <button>Edit</button>
                        </div>


                        <div className="editentry">
                        <h4><span>First Name :   </span> <span>Atharva Dhamke</span></h4>
                              <button>Edit</button>
                        </div>

                        </center> */}


                  {/* <form action="#" method="post" name="editform"> */}

                  <form action="#" method="post" name="editform" onSubmit={handlesubmit}>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="first_name" className="form-label"><strong>First Name :  </strong></label>
                        <input type="text" className="form-control" id="first_name" name="first_name" placeholder={formvalue.first_name} value={formvalue.first_name} onChange={handleformvalue} required />
                        <span>{formerror.first_name}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="last_name" className="form-label"><strong>Last Name :  </strong></label>
                        <input type="text" className="form-control" id="last_name" name="last_name" placeholder={formvalue.last_name} value={formvalue.last_name} onChange={handleformvalue} required />
                        <span>{formerror.last_name}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="username" className="form-label"><strong>Username :  </strong></label>
                        <input type="text" className="form-control" id="username" name="username" placeholder={formvalue.username} value={formvalue.username} onChange={handleformvalue} required />
                        <span>{formerror.username}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="age" className="form-label"><strong>Age : </strong></label>
                        <input type="text" className="form-control" id="age" name="age" placeholder={formvalue.age} value={formvalue.age} onChange={handleformvalue} required />
                        <span>{formerror.age}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="occupation" className="form-label"><strong>Occupation :  </strong></label>
                        <input type="text" className="form-control" id="occupation" name="occupation" placeholder={formvalue.occupation} value={formvalue.occupation} onChange={handleformvalue} required />
                        <span>{formerror.occupation}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="height" className="form-label"><strong>Height : </strong></label>
                        <input type="text" className="form-control" id="height" name="height" placeholder={formvalue.height} value={formvalue.height} onChange={handleformvalue} required />
                        <span>{formerror.height}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="weight" className="form-label"><strong>Weight : </strong></label>
                        <input type="text" className="form-control" id="weight" name="weight" placeholder={formvalue.weight} value={formvalue.weight} onChange={handleformvalue} required />
                        <span>{formerror.weight}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="email" className="form-label"><strong>Email : </strong></label>
                        <input type="text" className="form-control" id="email" name="email" placeholder={formvalue.email} value={formvalue.email} onChange={handleformvalue} required />
                        <span>{formerror.email}</span>
                     </div>


                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="mobile_no" className="form-label"><strong>Phone : </strong></label>
                        <input type="text" className="form-control" id="mobile_no" name="mobile_no" placeholder={formvalue.mobile_no} value={formvalue.mobile_no} onChange={handleformvalue} required />
                        <span>{formerror.mobile_no}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="state" className="form-label"><strong>State : </strong></label>
                        <input type="text" className="form-control" id="state" name="state" placeholder={formvalue.state} disabled />
                        <select name="state" onChange={handleformvalue}>
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
                        <span></span>
                     </div>


                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="city" className="form-label"><strong>City : </strong></label>
                        <input type="text" className="form-control" id="city" name="city" placeholder={formvalue.city} value={formvalue.city} onChange={handleformvalue} required />
                        <span>{formerror.city}</span>
                     </div>


                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="street" className="form-label"><strong>Street : </strong></label>
                        <input type="text" className="form-control" id="street" name="street" placeholder={formvalue.street} value={formvalue.street} onChange={handleformvalue} required />
                        <span>{formerror.street}</span>
                     </div>

                     <div className="mb-3 mt-3 editentry">
                        <label htmlFor="zip_code" className="form-label"><strong>Zip Code : </strong></label>
                        <input type="text" className="form-control" id="zip_code" name="zip_code" placeholder={formvalue.zip_code} value={formvalue.zip_code} onChange={handleformvalue} required />
                        <span>{formerror.zip_code}</span>
                     </div>

                     <div className="container mt-3">

                        <div className="d-grid">
                           <center>
                              <button type="submit" className="btn btn-primary btn-block"><b>Update  Details</b></button>
                              {/* <input type="submit" className="btn btn-primary btn-block" value="Update Details" /> */}
                           </center>
                        </div>

                     </div>

                  </form>

               </div>


               {/* <div className="container mt-3">
                        
                       <div className="d-grid">
                          <center>
                            <button type="submit" className="btn btn-primary btn-block"><b>Update  Details</b></button>
                          </center>
                       </div>

                    </div> */}


            </div>


         </div>

      </div>
   )
}

export default EditPatientProfile