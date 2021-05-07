import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { get_doctors,get_max_user_appoints } from './../api_requests/login'
import MakeApppointment from './make_appointment'
import './../../index.css'


function ShowDoctors({ value, callback }) {

    let [doctors_record, setdoctors_record] = useState([])
    let [changepage,setchangepage] = useState(false)
    let [index,setindex] = useState()
    let [doctor_key,setdoctorkey] = useState({})
    let [max_appointments,set_max_appointments] = useState([])

    let check_doctors = true
    let id_user = 0

    if(sessionStorage.getItem("user_id"))
    {
        id_user = sessionStorage.getItem("user_id")
    }
    else{
        id_user = false
    }



    let i = 1;
    let rows = []

    let j = 1;
    let rows1 = []

    let k = 1
    let rows2 = []



    useEffect(()=>{

        async function max_appoints(id_user){

            let data = await get_max_user_appoints(id_user)
            set_max_appointments(data)

        }

        max_appoints(id_user)

    }, [id_user]);












    useEffect(() => {
        async function data_show(value) {
            let real_data = await get_doctors(value['city'], value['category']);

            setdoctors_record(real_data);
        }
        data_show(value);
    }, [value]);

    console.log(doctors_record)

    if (!doctors_record) {
        return (
            <h1>Loading!</h1>
        )
    }
    else {
        //  for doctor with clinic

        if (doctors_record['counter'] > 0 || doctors_record['counter1'] > 0 || doctors_record['counter2'] > 0) {
            while (i <= doctors_record['counter']) {
                rows.push(i)
                i++
            }
        }
        else {
            check_doctors = false
        }

        // for doctor without clinic
        if (doctors_record['counter1'] > 0) {
            while (j <= doctors_record['counter1']) {
                rows1.push(j)
                j++
            }
        }

        // for doctor with hospoital
        if (doctors_record['counter2'] > 0) {
            while (k <= doctors_record['counter2']) {
                rows2.push(k)
                k++
            }
        }


        




    }


    if(changepage)
    {
        return(<MakeApppointment data={doctors_record} doctor_key = {doctor_key} indexx={index} callback={clickpage}/>)
    }


    function clickpage(key,flag) {
        setindex(key)
        setchangepage(flag)

    }









    return (

        <Fragment>
            <div>

            <h3 className="title">Doctors</h3>
            </div>


            <div className="review_form">
                <p><b>Search by name</b></p>
            {
                check_doctors ? 
                rows.map((data,key)=>{
                    return(
                        <div key={key}>
                            <a href={"#"+doctors_record.email[key]}>{doctors_record.name[key]}</a>
                        </div>
                    )
                })

                :
                ""
            }

{
            check_doctors ? 
                rows1.map((data,key)=>{
                    return(
                        <div key={key}>
                            <a href={"#"+doctors_record.email1[key] + doctors_record.hospital_name1[key]}>{doctors_record.name1[key]+"("+doctors_record.hospital_name1[key]+")"}</a>
                        </div>
                    )
                })

                :
                ""
            }

{
            check_doctors ? 
                rows2.map((data,key)=>{
                    return(
                        <div key={key}>
                            <a href={"#"+doctors_record.email2[key] + doctors_record.hospital_name2[key]}>{doctors_record.name2[key]+"("+doctors_record.hospital_name2[key]+")"}</a>
                        </div>
                    )
                })

                :
                ""
            }




            </div>

            {/*          -----------for doctors with clinic------------ */}

            {
                check_doctors ?

                    rows.map((data, key) => {
                        return (
                            <div className="review_form" key={key} id={doctors_record.email[key]}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.name[key]}</b>
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.email[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            +92 {doctors_record.phone[key]}
                                        </div>
                                        <div className="col">
                                            {doctors_record.address[key]}
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.city[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.clinic[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            {doctors_record.experience[key]} experience
                                        </div>
                                        <div className="col">
                                            {doctors_record.fees[key]} fee
                                        </div>
                                        <div className="col">
                                            <b>speciality:</b> <br></br>{doctors_record.speciality[key]}
                                        </div>
                                    </div>
                
                                </div>
                                {
                                    sessionStorage.getItem("user_id") ?

                                        max_appointments["signal"]===1 ?

                                        <p className="error">{max_appointments["message"]}</p> 
                                    
                                        :
                                    
                                        <button type="button" className="btn btn-primary" onClick={()=> {
                                            clickpage(key,true)
                                            setdoctorkey({"doctor_key":doctors_record.doctor_id[key],"hospital_key":0,"count":0})}
                                        }>Appoint</button>
                                    :
                                    <p className="error">Plz login to make appointments!</p>
                                }
                                
                               

                                    
                                

                                <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>

                            </div>
                        )

                    })
                    :
                    <div className="review_form">
                        <h1>No doctors yet!</h1>
                        <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>
                    </div>
            }


            {/*  for doctors with no clinic */}


{
                check_doctors ?

                    rows1.map((data, key) => {
                        return (
                            <div className="review_form" key={key} id={doctors_record.email1[key] + doctors_record.hospital_name1[key]}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.name1[key]}</b>
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.email1[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            +92 {doctors_record.phone1[key]}
                                        </div>
                                        <div className="col">
                                            {doctors_record.address1[key]}
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.city1[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.hospital_name1[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            {doctors_record.experience1[key]} experience
                                        </div>
                                        <div className="col">
                                            {doctors_record.fees1[key]} fee
                                        </div>
                                        <div className="col">
                                            <b>speciality:</b> <br></br>{doctors_record.speciality1[key]}
                                        </div>
                                    </div>
                
                                </div>
                                {
                                    sessionStorage.getItem("user_id") ?

                                        max_appointments["signal"]===1 ?

                                        <p className="error">{max_appointments["message"]}</p> 
                                    
                                        :
                                    
                                        <button type="button" className="btn btn-primary" onClick={()=> {
                                            console.log(key)
                                            clickpage(key,true)
                                            setdoctorkey({"doctor_key":doctors_record["doctor_id1"][key],"hospital_key":doctors_record["hospital_id1"][key],"count":1})
                                        }
                                        }>Appoint</button>
                                    :
                                    <p className="error">Plz login to make appointments!</p>
                                }
                                
                               

                                    
                                

                                <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>

                            </div>
                        )

                    })
                    :
                    <div></div>
            }



            {/*   doctors(clinical) with hospital */}


{
                check_doctors ?

                    rows2.map((data, key) => {
                        return (
                            <div className="review_form" key={key} id={doctors_record.email2[key] + doctors_record.hospital_name2[key]}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.name2[key]}</b>
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.email2[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            +92 {doctors_record.phone2[key]}
                                        </div>
                                        <div className="col">
                                            {doctors_record.address2[key]}
                                        </div>
                                        <div className="col">
                                            <b>{doctors_record.city2[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            <b>{doctors_record.hospital_name2[key]}</b>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col">
                                            {doctors_record.experience2[key]} experience
                                        </div>
                                        <div className="col">
                                            {doctors_record.fees2[key]} fee
                                        </div>
                                        <div className="col">
                                            <b>speciality:</b> <br></br>{doctors_record.speciality2[key]}
                                        </div>
                                    </div>
                
                                </div>
                                {
                                    sessionStorage.getItem("user_id") ?

                                        max_appointments["signal"]===1 ?

                                        <p className="error">{max_appointments["message"]}</p> 
                                    
                                        :
                                    
                                        <button type="button" className="btn btn-primary" onClick={()=> {
                                            clickpage(key,true)
                                            setdoctorkey({"doctor_key":doctors_record["doctor_id2"][key],"hospital_key":doctors_record["hospital_id2"][key],"count":2})
                                        }
                                        }>Appoint</button>
                                    :
                                    <p className="error">Plz login to make appointments!</p>
                                }
                                
                               

                                    
                                

                                <button className="btn btn-success back" onClick={() => callback(false)}>Back </button>

                            </div>
                        )

                    })
                    :
                    <div></div>
            }











        </Fragment  >

    )

}

export default ShowDoctors;