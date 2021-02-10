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
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image_hos} className="d-block w-100 tales" alt="Doctor" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Hospitals</h5>
                            <p>Find nearest hospitals.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={image_doc} className="d-block w-100 tales" alt="Doctor" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Doctors</h5>
                            <p>Find nearest doctors.</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <img src={image_lab} className="d-block w-100 tales" alt="Doctor" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Labs</h5>
                            <p>Make lab tests to your nearest lab.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>

                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </Fragment>
    )
}

export default Slide;