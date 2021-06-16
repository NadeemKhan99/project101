import React from 'react'
import Navbar from './navbar'
import pat from './../images/pat.jpg'
import khan from './../images/khan.JPG'
import aqeel from './../images/aqeel.JPG'
import ali from './../images/ali.jpeg'
import farhan from './../images/pp.jpeg'


import './../index'

function About() {
    return (
        <div>
            <Navbar />



            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">DocForU?</h1>
                            <p className="lead text-muted mb-0 text-justify">We are a non-profit organization working to make our country's health system better by the use of technology. We aim
		to provide fast and efficient appointment facility to patients across Pakistan.</p>
                 
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><img src={pat} alt="" width="500" className="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Ehtasham Hanif</h2>
                            <p className="font-italic text-muted mb-4 text-justify">Our mission is to bring millions of patients and thosands of doctors at one platform.</p>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
                        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Nadeem Khan</h2>
                            <p className="font-italic text-muted mb-4 text-justify">We are also working hard to make our health system autonomous by the use of AI.
                                     With AI in coming time people will be able
		                            be able to diagnose on their own. </p>
                        </div>
                    </div>
                </div>
            </div>










            <div className="bg-light py-5">
  <div className="container py-5">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
        <p className="font-italic text-muted">Meet our team and founders of this organization.</p>
      </div>
    </div>

    <div className="row text-center">
    
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4 pic_div"><img src={ali} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Ehtasham Hanif</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          {/* <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>
      

      
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4 pic_div"><img src={khan} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Nadeem Khan</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          {/* <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>
    


      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4 pic_div"><img src={aqeel} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Aqeel Ahmad Awan</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          {/* <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>


      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4 pic_div"><img src={farhan} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Muhammad Farhan</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          {/* <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>

    </div>
  </div>
</div>
















            










                </div>














    );
}

export default About;