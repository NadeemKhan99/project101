import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../../../index.css"
// import MultiSelect from "react-multi-select-component";

function EducationForm({ submit, setformValuesEducation, formValuesEducation }) {


    // let [dataa,setdata] = useState([])


    const formik = useFormik({
        initialValues: {

            hospital: formValuesEducation.hospital,
            numberDoctor: formValuesEducation.numberDoctor,
            speciality: []
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
            hospital: yup.string().matches("^[a-zA-Z ]{1,}", "Only use alphabets and space!").required("This field is required!"),
            numberDoctor: yup.number().min(0, "Too short").max(10000, "Too long").required("This field is required!")

        })
    })


    function handle_submit(event){
        let values = event.target.value



        if(event.target.checked)
        {
            formik.values.speciality.push(values)
        }
        else{
            formik.values.speciality.splice(values,1) 
        }

        // setdata(formik.values.speciality)
        
    }












    return (
        <div className="doctor_form">
            <form onSubmit={formik.handleSubmit}>
                <h3 align="center">Hospital Info</h3>

                <div className="mb-2 p-2">
                    <label htmlFor="hospital" className="form-label"><b>Hospital Name</b></label>
                    <input type="text" className="form-control" value={formik.values.hospital} onChange={formik.handleChange} id="hospital" placeholder="Enter hospital name" />
                    {formik.errors.hospital ? <div className="error">{formik.errors.hospital}</div> : ""}
                </div>


                <div className="mb-2 p-2">
                    <label htmlFor="numberDoctor" className="form-label"><b>Number of doctors</b></label>
                    <input type="number" className="form-control" value={formik.values.numberDoctor} onChange={formik.handleChange} id="numberDoctor" placeholder="Enter number of doctors!" />
                    {formik.errors.numberDoctor ? <div className="error">{formik.errors.numberDoctor}</div> : ""}
                </div>

                <div className="mb-2 p-2">

                <label htmlFor="speciality" className="form-label"><b>Disease Treated</b></label>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Immunologists" onChange={(e)=>handle_submit(e)} id="Immunologists"/>
                                    <label className="form-check-label" htmlFor="Immunologists">
                                        Immunologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Anesthesiologists" onChange={(e)=>handle_submit(e)} id="Anesthesiologists" />
                                    <label className="form-check-label" htmlFor="Anesthesiologists">
                                    Anesthesiologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Hematologists" onChange={(e)=>handle_submit(e)} id="Hematologists" />
                                    <label className="form-check-label" htmlFor="Hematologists">
                                    Hematologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Gynecologists" onChange={(e)=>handle_submit(e)} id="Gynecologists" />
                                    <label className="form-check-label" htmlFor="Gynecologists">
                                    Gynecologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Oncologists" onChange={(e)=>handle_submit(e)} id="Oncologists" />
                                    <label className="form-check-label" htmlFor="Oncologists">
                                    Oncologists
                                    </label>
                            </div>
                        </div>


                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Cardiologists" onChange={(e)=>handle_submit(e)} id="Cardiologists"/>
                                    <label className="form-check-label" htmlFor="Cardiologists">
                                    Cardiologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Dermatologists" onChange={(e)=>handle_submit(e)} id="Dermatologists" />
                                    <label className="form-check-label" htmlFor="Dermatologists">
                                    Dermatologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Nephrologists" onChange={(e)=>handle_submit(e)} id="Nephrologists" />
                                    <label className="form-check-label" htmlFor="Nephrologists">
                                    Nephrologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Ophthalmologists" onChange={(e)=>handle_submit(e)} id="Ophthalmologists" />
                                    <label className="form-check-label" htmlFor="Ophthalmologists">
                                    Ophthalmologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Physiatrists" onChange={(e)=>handle_submit(e)} id="Physiatrists" />
                                    <label className="form-check-label" htmlFor="Physiatrists">
                                    Physiatrists
                                    </label>
                            </div>
                        </div>


                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Endocrinologists" onChange={(e)=>handle_submit(e)} id="Endocrinologists"/>
                                    <label className="form-check-label" htmlFor="Endocrinologists">
                                    Endocrinologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Gastroenterologists" onChange={(e)=>handle_submit(e)} id="Gastroenterologists" />
                                    <label className="form-check-label" htmlFor="Gastroenterologists">
                                    Gastroenterologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Neurologists" onChange={(e)=>handle_submit(e)} id="Neurologists" />
                                    <label className="form-check-label" htmlFor="Neurologists">
                                    Neurologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Urologists" onChange={(e)=>handle_submit(e)} id="Urologists" />
                                    <label className="form-check-label" htmlFor="Urologists">
                                    Urologists
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Rheumatologists" onChange={(e)=>handle_submit(e)} id="Rheumatologists" />
                                    <label className="form-check-label" htmlFor="Rheumatologists">
                                    Rheumatologists
                                    </label>
                            </div>
                        </div>

                        

                     </div>

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