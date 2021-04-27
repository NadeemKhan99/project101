import React, { Fragment, useState } from 'react'
import { useFormik,FieldArray, Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./../../index.css"
import axios from 'axios';

function DocSlots() {

    const [monday, setMonday] = useState("")
    
    // const [mondayslots,setmondayslots] = useState({})

    const [mondayslots,setmondayslots] = useState({"monday.1.start": "",
    "monday.1.end": "",
    "monday.2.start": "",
    "monday.2.end": "",
    "monday.3.start": "",
    "monday.3.end": ""})

    let i = 1;
    let rows = []
    while (i <= monday) {
        rows.push(i)
        i++
    }


    function onChangeInput (e){


        let dic = {
             key : e.target.name,
             value: e.target.value
        }


        setmondayslots({...mondayslots})

    }


    function onSubmit() {
        // display form field values on success
        console.log(mondayslots)
    }







    return (
        <div>
            
            
                    <h3>Monday</h3>
                    <select required className="form-control" onChange={(e) => setMonday(e.target.value)}>
                        <option value={0}></option>
                        {[0, 1, 2, 3].map(i =>
                            <option key={i} value={i}>{i}</option>
                        )}
                    </select>



                    {rows.map((number_of_slots, i) => {
                        return (
                            <div key={i} className="list-group list-group-flush">
                                <div className="list-group-item">
                                    <h5 className="card-title">Shift {i + 1}</h5>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label>Start</label>
                                            <input name={`monday.${number_of_slots}.start`} onChange={(e)=>onChangeInput(e)} type="time" required className='form-control' />

                                        </div>
                                        <div className="form-group col-6">
                                            <label>End</label>
                                            <input name={`monday.${number_of_slots}.end`} type="time" onChange={(e)=>onChangeInput(e)} required className='form-control' />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <button type="submit" onClick={onSubmit}>Submit</button>
            
            
        </div>


    )


}

export default DocSlots;