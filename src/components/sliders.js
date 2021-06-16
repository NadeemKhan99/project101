import React, { Fragment } from 'react'
import './../index.css'
import image_hos from './../images/hos.jpg'
import image_doc from './../images/doc.jpg'
import image_lab from './../images/lab.jpg'
// import image_search from './../images/search.jpg'

function Slide() {
    return (
        <Fragment>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image_hos} className="d-block w-100 tales" alt="Doctor" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hospitals</h5>
                            <p>Hospitals can register themselves</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={image_doc} className="d-block w-100 tales" alt="Doctor" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Doctors</h5>
                            <p>Make Appointments with doctors</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={image_lab} className="d-block w-100 tales" alt="Doctor" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Labs</h5>
                            <p>Make Appointments with Labs</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>

                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </Fragment>
    )
}

export default Slide;