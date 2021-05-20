import React, { useState, useEffect } from 'react'
import { Fragment } from 'react';
import {useParams,useLocation} from 'react-router-dom'
import { get_labs,get_max_user_labs } from './../../api_requests/login'
import MakeApppointment from './make_lab_appointment'
import Navbar from './../../navbar'
import './../../../index.css'


function ShowLabs() {

    let [doctors_record, setdoctors_record] = useState([])
    let [changepage,setchangepage] = useState(false)
    let [index,setindex] = useState()
    let [doctor_key,setdoctorkey] = useState({})
    let [max_appointments,set_max_appointments] = useState([])

    let check_doctors = true
    let id_user = 0
    let location = useLocation()
    let mycity = location.state.city_data.city

    if(sessionStorage.getItem("user_id"))
    {
        id_user = sessionStorage.getItem("user_id")
    }
    else{
        id_user = false
    }



    let i = 1;
    let rows = []

   


    useEffect(()=>{

        async function max_appoints(id_user){

            let data = await get_max_user_labs(id_user)
            set_max_appointments(data)

        }

        max_appoints(id_user)

    }, [id_user]);











    useEffect(() => {
        async function data_show(mycity) {
            let real_data = await get_labs(mycity);

            setdoctors_record(real_data);
        }
        data_show(mycity);
    }, [mycity]);


    if (!doctors_record) {
        return (
            <h1>Loading!</h1>
        )
    }
    else {

        if (doctors_record['counter'] > 0 ) {
            while (i <= doctors_record['counter']) {
                rows.push(i)
                i++
            }
        }
        else {
            check_doctors = false
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
            <Navbar/>
            <div>

            <h3 className="title">Labs</h3>

            
            </div>


            {/* <div className="review_form">
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

            </div> */}







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
                                            <b>Services:</b> <br></br>{doctors_record.speciality[key]}
                                        </div>
                                    </div>

                
                                </div>
                                <br></br>
                                {
                                    sessionStorage.getItem("user_id") ?

                                        max_appointments["signal"]===1 ?

                                        <p className="error">{max_appointments["message"]}</p> 
                                    
                                        :
                                    
                                        <button type="button" className="btn btn-primary" onClick={()=> {
                                            clickpage(key,true)
                                            setdoctorkey({"lab_key":doctors_record["lab_id"][key]})
                                        }
                                        }>Appoint</button>
                                    :
                                    <p className="error">Plz login to make appointments!</p>
                                }
                                
                               

                                


                            </div>
                        )

                    })
                    :
                    <div className="review_form">
                        <h2>No labs Yet</h2>
                    </div>
            }








 


        </Fragment  >

    )

}

export default ShowLabs;