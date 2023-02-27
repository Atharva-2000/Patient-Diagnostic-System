import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import "../styles/pagenotfound.css"

function PageNotFound() {

    const navigate = useNavigate()

    const gobackfunc = ()=>{
        navigate(-1)
    }

  return (
        <div id="error_page">
            <section class="page_404">
              <center>
               <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="col-sm-10 col-sm-offset-1 text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center">404</h1>
                                </div>
                                <div class="content_box_404">
                                    <h4>Looks Like You're Lost</h4>
                                    <p>The page you are looking for is not available</p>
                                    <Link to="/" className="err_go_back" >Go to Home</Link>
                                    <button className="err_go_back" onClick={gobackfunc} >Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </center>
            </section>
       </div>
  )
}

export default PageNotFound