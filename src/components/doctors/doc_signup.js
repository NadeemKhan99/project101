import React, { Fragment } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../../index.css"
import axios from 'axios';
import Appp from './appp'

function DocSignup() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            city: "",
            phone: "",
            address: "",
            user: "doctor",
            clinic: "",
            experience: "",
            fees: "",
            speciality: "",
            qualification: "",
            mon_shifts: "",
            mon_shifts_array: []
        },
        onSubmit: (values) => {
            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }



            axios.post(
                'http://localhost/back_end/go.php', values, headers
            ).then(
                res => {
                    console.log(res.data)
                }
            );

        },
        validationSchema: yup.object({
            name: yup.string().matches("^[a-zA-Z ]{1,}[^0-9]$", "Invalid name, only use text").required("This field is required!"),
            email: yup.string().email("Invalid Email").required("This field is required!"),
            password: yup.string().min(6, "Must be greater than 5 digits").max(10, "Must be less than 11 digits").required("This field is required!"),
            city: yup.string().matches("^[a-zA-Z]{3,}$", "Only use text must be greater than 3 words").required("This field is required!"),
            phone: yup.string().matches("^[1-9]{1}[0-9]{9}$", "Start number with 1-9 and must 10 digit long").required("This field is required!"),
            address: yup.string().required("This field is required!"),
            clinic: yup.string().matches("^[a-zA-Z ]{1,}", "Only use alphabets and space!").required("This field is required!"),
            fees: yup.number().min(0, "Too short").max(10000, "Too long").required("This field is required!"),
            experience: yup.number().max(60, "Too long").required("This field is required!"),
            speciality: yup.string().matches("^[a-zA-Z, ]*[a-zA-Z]$", "Only use space, comma, text").required("This field is required!"),
            qualification: yup.string().matches("^[a-zA-Z, ]*[a-zA-Z]$", "Only use space, comma, text").required("This field is required!"),
            shifts: yup.number("Must be number!").min(0, "Too short").max(3, "Too long").required("This field is required!")

        })
    })


    // const submithandler = (event) =>{
    //         event.preventDefault();
    //         console.log(first)
    //         console.log(second)


    //     var headers = {
    //         "Content-Type": "application/json;charset=UTF-8",
    //     }



    //     axios.post(
    //         'http://localhost/back_end/connection.php',{id:1,namee:"nadeem"}, headers
    //     ).then(
    //         res =>{
    //             console.log(res.data.id)
    //         }
    //     );



    // }

    const onChangeTickets = (e) =>{
        const tickets = [formik.values.tickets];
        const numberOfTickets = e.target.value || 0;
    
        tickets.splice(0, tickets.length)
        for (let i = 0; i < numberOfTickets; i++) {
            tickets.push({ start: '', end: '' });
        }
    
        formik.values.tickets = tickets
    
        console.log(formik.values.tickets)
        formik.values.mon_shifts.onChange(e)
    }



    return (
        <div className="doctor_form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register</h3>
                <input type="text" className="visually-hidden" value={formik.values.user} onChange={formik.handleChange} id="user" />
                <div className="mb-2 p-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" values={formik.values.name} onChange={formik.handleChange} autoFocus id="name" placeholder="Enter name" />
                    {formik.errors.name ? <div className="error">{formik.errors.name}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" values={formik.values.email} onChange={formik.handleChange} id="email" placeholder="Enter email" />
                    {formik.errors.email ? <div className="error">{formik.errors.email}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" values={formik.values.password} onChange={formik.handleChange} id="password" placeholder="Enter password" />
                    {formik.errors.password ? <div className="error">{formik.errors.password}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" values={formik.values.city} onChange={formik.handleChange} id="city" placeholder="Enter city name" />
                    {formik.errors.city ? <div className="error">{formik.errors.city}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="phone" className="form-label">Cell #</label>
                    <input type="text" className="form-control" values={formik.values.phone} onChange={formik.handleChange} id="phone" placeholder="+92 xxxxxxxxxx" />
                    {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" values={formik.values.address} onChange={formik.handleChange} id="address" placeholder="Enter Address" />
                    {formik.errors.address ? <div className="error">{formik.errors.address}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="clinic" className="form-label">Clinic Name</label>
                    <input type="text" className="form-control" values={formik.values.clinic} onChange={formik.handleChange} id="clinic" placeholder="Enter clinic name" />
                    {formik.errors.clinic ? <div className="error">{formik.errors.clinic}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <input type="number" className="form-control" values={formik.values.experience} onChange={formik.handleChange} id="experience" placeholder="Enter experience in Years" />
                    {formik.errors.experience ? <div className="error">{formik.errors.experience}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="fees" className="form-label">Fees</label>
                    <input type="number" className="form-control" values={formik.values.fees} onChange={formik.handleChange} id="fees" placeholder="Enter fees in rupees" />
                    {formik.errors.fees ? <div className="error">{formik.errors.fees}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="speciality" className="form-label">Speciality</label>
                    <input type="text" className="form-control" values={formik.values.speciality} onChange={formik.handleChange} id="speciality" placeholder="gynalogist,orthologist,brain tumor" />
                    {formik.errors.speciality ? <div className="error">{formik.errors.speciality}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <input type="text" className="form-control" values={formik.values.qualification} onChange={formik.handleChange} id="qualification" placeholder="MBBS,MBA,CSS" />
                    {formik.errors.qualification ? <div className="error">{formik.errors.qualification}</div> : ""}
                </div>

                <Appp/>
{/* 
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-4 col-sm-10">
                            <h4>Monday</h4>
                        </div>
                        <div className="col col-lg-8">
                            <input type="number" className="form-control" values={formik.values.mon_shifts} onChange={e => onChangeTickets(e)} id="mon_shifts" placeholder="Enter # of shifts per data less than 4" />
                            {formik.errors.mon_shifts ? <div className="error">{formik.errors.mon_shifts}</div> : ""}
                        </div>
                    </div>
                

                </div> */}

                <div className="mb-6 p-2 register_button">
                    <button type="submit" className="btn btn-success">Register</button>
                </div>
            </form>
        </div>
    );
}

export default DocSignup;