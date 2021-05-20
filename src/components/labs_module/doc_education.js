import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import "./../../index.css"
// import MultiSelect from "react-multi-select-component";

function EducationForm({ submit, setformValuesEducation}) {


    // let [dataa,setdata] = useState([])


    const formik = useFormik({
        initialValues: {
            speciality: []
        }
        ,
        onSubmit: (values) => {

            submit(2)
            setformValuesEducation({ ...values })


        },
        validationSchema: yup.object({

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
                <h3 align="center">Lab Info</h3>

                <div className="mb-2 p-2">

                <label htmlFor="speciality" className="form-label"><b>Services</b></label>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Radiology" onChange={(e)=>handle_submit(e)} id="Radiology"/>
                                    <label className="form-check-label" htmlFor="Radiology">
                                        Radiology
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Pathology" onChange={(e)=>handle_submit(e)} id="Pathology" />
                                    <label className="form-check-label" htmlFor="Pathology">
                                    Pathology
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="CT Scan" onChange={(e)=>handle_submit(e)} id="CT Scan" />
                                    <label className="form-check-label" htmlFor="CT Scan">
                                    CT Scan
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="ETT" onChange={(e)=>handle_submit(e)} id="ETT" />
                                    <label className="form-check-label" htmlFor="ETT">
                                    ETT
                                    </label>
                            </div>
                
                        </div>


                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="X-Ray" onChange={(e)=>handle_submit(e)} id="X-Ray"/>
                                    <label className="form-check-label" htmlFor="X-Ray">
                                    X-Ray
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Ultrasound" onChange={(e)=>handle_submit(e)} id="Ultrasound" />
                                    <label className="form-check-label" htmlFor="Ultrasound">
                                    Ultrasound
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Doppler" onChange={(e)=>handle_submit(e)} id="Doppler" />
                                    <label className="form-check-label" htmlFor="Doppler">
                                    Doppler
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="MRI" onChange={(e)=>handle_submit(e)} id="MRI" />
                                    <label className="form-check-label" htmlFor="MRI">
                                    MRI
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