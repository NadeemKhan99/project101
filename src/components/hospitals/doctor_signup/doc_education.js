import React, { Fragment, useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../../../index.css"

import { get_specialist } from './../../api_requests/login'
import axios from 'axios';

function EducationForm({ submit, setformValuesEducation, formValuesEducation, back_slots }) {

    let [myspecialist, setspecialist] = useState("")

    let hospital_id_get = sessionStorage.getItem("hospital_id")


    const formik = useFormik({
        initialValues: {

            // clinic: formValuesEducation.clinic,
            experience: formValuesEducation.experience,
            fees: formValuesEducation.fees,
            speciality: formValuesEducation.speciality,
            qualification: formValuesEducation.qualification,
        }
        ,
        onSubmit: (values) => {

            submit(2)
            setformValuesEducation({ ...values })


        },
        validationSchema: yup.object({
            // clinic: yup.string().matches("^[a-zA-Z ]{1,}", "Only use alphabets and space!").required("This field is required!"),
            fees: yup.number().min(0, "Too short").max(10000, "Too long").required("This field is required!"),
            experience: yup.number().max(60, "Too long").required("This field is required!"),
            speciality: yup.string().matches("[^none]", "This field is required").required("This field is required!"),
            qualification: yup.string().matches("^[a-zA-Z, ]*[a-zA-Z)]$", "Only use space, comma, text").required("This field is required!")

        })
    })



    //  --------------- getting specilists data-------------

    //   for cancelation of appointment

    useEffect(() => {
        async function appointment_del(id) {
            let real_data = await get_specialist(id);

            setspecialist(real_data);
        }
        appointment_del(hospital_id_get);
    }, [hospital_id_get]);



    let i = 0;
    let rows = []
    while (i < myspecialist.length) {
        rows.push(i)
        i++
    }





    // if(myspecialist)
    // {

    //     let my_data = 

    // }




    return (
        <div className="doctor_form">
            <form onSubmit={formik.handleSubmit}>
                <h3>Education Info</h3>

                {/* <div className="mb-2 p-2">
                    <label htmlFor="clinic" className="form-label">Clinic Name</label>
                    <input type="text" className="form-control" value={formik.values.clinic} onChange={formik.handleChange} id="clinic" placeholder="Enter clinic name" />
                    {formik.errors.clinic ? <div className="error">{formik.errors.clinic}</div> : ""}
                </div> */}

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
                        {
                            rows.map((data, key) => {
                                return (
                                    <Fragment key={key}>
                                        <option value={myspecialist[key]}>{myspecialist[key]}</option>
                                    </Fragment>
                                )


                            })
                        }

                    </select>
                    {formik.errors.speciality ? <div className="error">{formik.errors.speciality}</div> : ""}
                </div>

                <div className="mb-2 p-2">
                    <label htmlFor="qualification" className="form-label">Qualification</label>
                    <input type="text" className="form-control" value={formik.values.qualification} onChange={formik.handleChange} id="qualification" placeholder="MBBS" />
                    {formik.errors.qualification ? <div className="error">{formik.errors.qualification}</div> : ""}
                </div>

                <div className="row">

                    <div className="col">
                        <button onClick={() => submit(0)} className="btn btn-secondary float-left" >Back</button>
                    </div>
                    <div className="col register_button">

                        <button type="submit" className="btn btn-success flat-right">Next</button>

                    </div>
                </div>
            </form>


            <button className="btn btn-success back" onClick={() => back_slots(false)}>Search Doctor</button>
        </div>
    );
}

export default EducationForm;