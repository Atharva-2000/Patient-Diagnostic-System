import React, {useEffect} from 'react'
import Header from './Header'
import "../styles/contact.css"
import { useNavigate } from 'react-router-dom'

function Contact() {

 const navigate = useNavigate()

  useEffect(() => {

    if (!sessionStorage.getItem('patienttoken')) {
      navigate("/")
    }

  })


  return (
    <div>
        <Header/>

        <div className="top-section">
             
                    <p>Contact Us</p>
                    <h2>Get In Touch</h2>
        </div>


        <div className="mid-section">

              <div className="mid-section-item">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <h5>Call Us</h5>
                    <p>+91 9776545351</p>
              </div>

              <div className="mid-section-item">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <h5>Timings</h5>
                    <p>Mon to Sat,  9am-1pm and 6-9pm</p>
              </div>

              <div className="mid-section-item">
                     <i className="fa fa-envelope" aria-hidden="true"></i>
                     <h5>Email Us</h5>
                     <p><em>myclinic@gmail.com</em></p>
              </div>

              <div className="mid-section-item">
                     <i className="fa fa-map-marker" aria-hidden="true"></i>
                     <h5>Location</h5>
                     <p>Gujurat Colony, Kothrud, Pune</p>
              </div>

        </div>


        <div className="location">
           <center>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4981339412993!2d73.80745431375881!3d18.506378437417244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb999b22489%3A0x116691893059d518!2sGujrat%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672399820502!5m2!1sen!2sin"></iframe>
           </center>
        </div>
        
    </div>
  )
}

export default Contact