import Navbar from './navbar'
import React, { Fragment } from 'react'
import { useFormik,Field } from "formik";
import * as yup from "yup";
import "./../index.css"
import axios from 'axios';

function Contact() {



    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
        },
        onSubmit: values => {
           
            


            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }



            axios.post(
                'http://localhost/back_end/contact.php', values, headers
            ).then(
                res => {
                    alert(res.data.id)
                    
                }
            );

        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            address: yup.string().required("This field is required!")
        })
    })











    return(
        <div>
            <Navbar/>

        
    <div className="review_form float-center">

        <h2 className="title">Contact us</h2>

        <div className="fcf-form-wrap">
            <div id="fcf-form">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-2 p-2">
                    <label htmlFor="name" className="form-label float-left"><b>Name</b></label>
                    <input type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} id="name" placeholder="Enter name" />
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="email" className="form-label float-left"><b>Email</b></label>
                    <input type="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} id="email" placeholder="Enter email" />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="address" className="form-label float-left"><b>Message</b></label>
                    <textarea className="form-control" value={formik.values.address} onChange={formik.handleChange} id="address" placeholder="Enter Message..."></textarea>
                    {formik.errors.address ? <div className="error">{formik.errors.address}</div> : ""}
                </div>


                <div className="mb-6 p-2 register_button">
                    <button type="submit" className="btn btn-success">Send</button>
                </div>
            </form>
            </div>
        </div>
    </div>


        </div>
    );
}

export default Contact;





