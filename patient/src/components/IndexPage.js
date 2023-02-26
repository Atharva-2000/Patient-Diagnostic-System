import React, { useEffect } from 'react'
import "../styles/indexstyle.css"
import { Link, useNavigate } from 'react-router-dom'


function IndexPage() {

  const navigate = useNavigate()

  useEffect(() => {
        
    if (sessionStorage.getItem('patienttoken'))
    {
        navigate("/patienthome")
    }

    if (sessionStorage.getItem('doctortoken'))
    {
      navigate('/doctorhome')
    }

  },[])

  return (
    <div className={"maindiv"}>
         <h1 align="center" className={"mainheading"}>My Clinic</h1>

         <div className={"container linkcontainer"}>
              <Link to="/login" className={"loglinkbtn"} style={{backgroundColor:"green"}}>Patient Login</Link> 
              <Link to="/doclogin" className={"loglinkbtn"} style={{backgroundColor:"red"}}>Doctor Login</Link> 
         </div>
    </div>
  )
}

export default IndexPage