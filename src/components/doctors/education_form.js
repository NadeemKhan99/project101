import React, { Fragment } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../../index.css"
import axios from 'axios';

function EducationForm({ submit, setformValuesEducation, formValuesEducation }) {

    const formik = useFormik({
        initialValues: {

            clinic: formValuesEducation.clinic,
            experience: formValuesEducation.experience,
            fees: formValuesEducation.fees,
            speciality: formValuesEducation.speciality,
            qualification: formValuesEducation.qualification,
        }
        ,
        onSubmit: (values) => {

            submit(2)
            setformValuesEducation({ ...values })




            // var headers = {
            //     "Content-Type": "application/json;charset=UTF-8",
            // }



            // axios.post(
            //     'http://localhost/back_end/go.php', values, headers
            // ).then(
            //     res => {
            //         console.log(res.data)
            //     }
            // );

        },
        validationSchema: yup.object({
            clinic: yup.string().matches("^[a-zA-Z ]{1,}", "Only use alphabets and space!").required("This field is required!"),
            fees: yup.number().min(0, "Too short").max(10000, "Too long").required("This field is required!"),
            experience: yup.number().max(60, "Too long").required("This field is required!"),
            speciality: yup.string().matches("[^none]", "This field is required").required("This field is required!"),
            qualification: yup.string().matches("^[a-zA-Z,.() ]*[a-zA-Z]$", "Only use space, comma, text").required("This field is required!")

        })
    })








    return (
        <div className="doctor_form">
            <form onSubmit={formik.handleSubmit}>
                <h3 align="center">Education Info</h3>

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

                            <button className="btn btn-primary" onClick={() => submit(0)} >Back</button>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-success float-right">Next</button>
                        </div>
                    </div>



                </div>
            </form>

        </div>
    );
}

export default EducationForm;