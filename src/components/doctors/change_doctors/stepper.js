import React, { Fragment } from 'react'
import { useFormik, Field } from "formik";
import {Link} from 'react-router-dom'
import * as yup from "yup";
import "./../../../index.css"
import Navbar from './../../navbar'
import axios from 'axios'

function SignupForm({ preValues }) {



    const formik = useFormik({
        initialValues: {
            name: sessionStorage.getItem("name"),
            email: sessionStorage.getItem("email"),
            city: sessionStorage.getItem("city"),
            phone: sessionStorage.getItem("phone"),
            address: sessionStorage.getItem("address"),
            speciality: sessionStorage.getItem("speciality"),
            experience: sessionStorage.getItem("experience"),
            qualification: sessionStorage.getItem("qualification"),
            fees: sessionStorage.getItem("fees"),
            clinic: sessionStorage.getItem("clinic"),
            doctor_id: sessionStorage.getItem("doctor_id")
        },
        onSubmit: values => {

             sessionStorage.setItem("name",values.name)
            sessionStorage.setItem("city",values.city)
            sessionStorage.setItem("phone",values.phone)
            sessionStorage.setItem("address",values.address)
            sessionStorage.setItem("speciality",values.speciality)
            sessionStorage.setItem("experience",values.experience)
            sessionStorage.setItem("qualification",values.qualification)
            sessionStorage.setItem("fees",values.fees)
            sessionStorage.setItem("clinic",values.clinic)

            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }
    

    
            axios.post(
                'http://localhost/back_end/update_doctor_data.php', values, headers
            ).then(
                res => {
                        alert(res.data.id)    
                }
            );








        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            city: yup.string().matches("^[a-zA-Z]{3,}$", "Only use text must be greater than 3 words").required("This field is required!"),
            phone: yup.string().matches("^[1-9]{1}[0-9]{9}$", "Start number with 1-9 and must 10 digit long").required("This field is required!"),
            address: yup.string().required("This field is required!"),
            clinic: yup.string().matches("^[a-zA-Z ]{1,}", "Only use alphabets and space!").required("This field is required!"),
            fees: yup.number().min(0, "Too short").max(10000, "Too long").required("This field is required!"),
            experience: yup.number().max(60, "Too long").required("This field is required!"),
            speciality: yup.string().matches("[^none]", "This field is required").required("This field is required!"),
            qualification: yup.string().matches("^[a-zA-Z, ]*[a-zA-Z]$", "Only use space, comma, text").required("This field is required!")
        })
    })





    return (

        <Fragment>
            <Navbar />

            <div className="doctor_form">
                <form onSubmit={formik.handleSubmit}>

                    <h3 className="title">Update</h3>
                    <div className="mb-2 p-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} id="name" placeholder="Enter name" />
                        {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={formik.values.email} onChange={formik.handleChange} disabled id="email" placeholder="Enter email" />
                        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                    </div>
                        {/* hidden doctor id */}
                        <input type="text" className="form-control" value={formik.values.doctor_id} hidden onChange={formik.handleChange} disabled id="ID" placeholder="Enter email" />
                

                    <div className="mb-2 p-2">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" value={formik.values.city} onChange={formik.handleChange} id="city" placeholder="Enter city name" />
                        {formik.errors.city ? <div className="error">{formik.errors.city}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="phone" className="form-label">Cell #</label>
                        <input type="text" className="form-control" value={formik.values.phone} onChange={formik.handleChange} id="phone" placeholder="+92 xxxxxxxxxx" />
                        {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" value={formik.values.address} onChange={formik.handleChange} id="address" placeholder="Enter Address" />
                        {formik.errors.address ? <div className="error">{formik.errors.address}</div> : ""}
                    </div>




                    <div className="mb-2 p-2">
                        <label htmlFor="clinic" className="form-label">Clinic Name</label>
                        <input type="text" className="form-control" value={formik.values.clinic} onChange={formik.handleChange} id="clinic" placeholder="Enter clinic name" />
                        {formik.errors.clinic ? <div className="error">{formik.errors.clinic}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="experience" className="form-label">Experience</label>
                        <input type="number" className="form-control" value={formik.values.experience} onChange={formik.handleChange} id="experience" placeholder="Enter experience in Years" />
                        {formik.errors.experience ? <div className="error">{formik.errors.experience}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="fees" className="form-label">Fees</label>
                        <input type="number" className="form-control" value={formik.values.fees} onChange={formik.handleChange} id="fees" placeholder="Enter fees in rupees" />
                        {formik.errors.fees ? <div className="error">{formik.errors.fees}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="speciality" className="form-label">Speciality</label>
                        <select className="form-select" id="speciality" value={formik.values.speciality} onChange={formik.handleChange} aria-label="Default select example">
                            <option value="none">Select Specialist</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="child specialist">Child Specialist</option>
                            <option value="gynecologist">Gynecologist</option>
                            <option value="orthopadic surgeon">Orthopadic Surgeon</option>
                            <option value="endocrinlogist">Endocrinlogist</option>
                        </select>
                        {formik.errors.speciality ? <div className="error">{formik.errors.speciality}</div> : ""}
                    </div>

                    <div className="mb-2 p-2">
                        <label htmlFor="qualification" className="form-label">Qualification</label>
                        <input type="text" className="form-control" value={formik.values.qualification} onChange={formik.handleChange} id="qualification" placeholder="MBBS" />
                        {formik.errors.qualification ? <div className="error">{formik.errors.qualification}</div> : ""}
                    </div>



                    <div className="mb-6 p-2 register_button">
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-success float-right">Update</button>
                            </div>
                            <div className="col">
                            <Link to="/update_password" className="btn btn-primary back float-right">Change Password</Link>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </Fragment>
    );
}


export default SignupForm;