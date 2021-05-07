import React from 'react'
import Navbar from './navbar'

function Contact() {
    return(
        <div>
            <Navbar/>

        
    <div className="review_form float-center">

        <h2 className="title">Contact us</h2>

        <div className="fcf-form-wrap">
            <div id="fcf-form">
                <form className="fcf-form-className">

                    <div className="fcf-field">
                        <label htmlFor="Name" className="fcf-label has-text-weight-normal">Your name</label>
                        <div className="fcf-control">
                            <input type="text" name="Name" id="Name" className="fcf-input is-full-width"
                                data-validate-field="Name"/>
                        </div>
                    </div>
                    <div className="fcf-field">
                        <label htmlFor="Email" className="fcf-label has-text-weight-normal">Your email address</label>
                        <div className="fcf-control">
                            <input type="email" name="Email" id="Email" className="fcf-input is-full-width"
                                data-validate-field="Email"/>
                        </div>
                    </div>
                    <div className="fcf-field">
                        <label htmlFor="Phone" className="fcf-label has-text-weight-normal">Your phone number (optional)</label>
                        <div className="fcf-control">
                            <input type="text" name="Phone" id="Phone" className="fcf-input is-full-width"
                                data-validate-field="Phone"/>
                        </div>
                    </div>
                    <div className="fcf-field">
                        <label htmlFor="Message" className="fcf-label has-text-weight-normal">Your message</label>
                        <div className="fcf-control">
                            <textarea name="Message" id="Message" className="fcf-textarea" rows="5"
                                data-validate-field="Message"></textarea>
                        </div>
                    </div>
                    <div id="fcf-status" className="fcf-status"></div>
                    <div className="fcf-field">
                        <div className="fcf-buttons">
                            <button id="fcf-button" type="submit" className="btn btn-success fcf-button is-link is-medium is-fullwidth">Send
                                Message</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>


        </div>
    );
}

export default Contact;