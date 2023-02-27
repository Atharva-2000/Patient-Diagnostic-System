import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "../styles/header.css"

function DoctorHeader() {

  const navigate = useNavigate()

  const logout_func = () => {

    sessionStorage.removeItem('doctortoken')
    //alert("Doctor logged out !!")
    navigate("/")
  }


  return (
    <div className="menu-bar">
    <input id="nav-toggle" type="checkbox"/>
    <h1 className="logo"><span>My Clinic</span></h1>

    <ul>

      <li><Link to="/doctorhome">Home</Link></li>

      <li><Link to="/appointmentlist">Appointments</Link></li>

      <li><Link to="/doctorprofile">Profile</Link></li>

      <li><Link onClick={logout_func}>Logout <i className="fa fa-sign-out" aria-hidden="true"></i></Link></li>

      {/*<li><Link to="*">Profile</Link></li>

      <li><a href="#">Appointments <i className="fa fa-caret-down" aria-hidden="true"></i></a>
          <div className="dropdown-menu">
              <ul>
                <li><Link to="/bookappointment">Book Appointment</Link></li>
                <li><Link to="/viewappointment">View Appointments</Link></li>
              </ul>
            </div>
      </li> 
      
  <li><Link to="/contact">Contact Us</Link></li>

      <li><a href="#"><i className="fa fa-user-circle-o" id="user-icon" aria-hidden="true"></i></a>
          <div className="dropdown-menu">
              <ul>
                <li><Link to="*">Profile</Link></li>
                <li><Link to="/">Logout <i className="fa fa-sign-out" aria-hidden="true"></i></Link></li>
              </ul>
            </div>
  </li>*/}

    </ul>
    <label htmlFor="nav-toggle" id="icon-burger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </label>
  </div>

  )
}

export default DoctorHeader