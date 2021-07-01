import React, { useState,useEffect } from 'react'
import { Fragment } from 'react'
import { date } from 'yup/lib/locale'
import Navbar from '../navbar'
import "./../../index.css"
import {get_appointments} from './../api_requests/login'


function Appointments() {

    let id = sessionStorage.getItem('doctor_id')
    

    let [appointment,setappointment] = useState([])

    let check_appointment = true

    
    let i = 1;
    let rows = []

    let j = 1
    let rows1 = []
    

    useEffect(() => {
        async function data_show(id) {
          let real_data = await get_appointments(id);

          setappointment(real_data);
        }
        data_show(id);
      },[id]);
    
      if (!appointment)
        return (<h1>Loading...</h1>)
    else
    {
        if(appointment['counter']>0 || appointment['counter1'] > 0)
        {
            while (i <= appointment['counter']) {
                rows.push(i)
                i++
            }

            while (j <= appointment['counter1']) {
                rows1.push(j)
                j++
            }
        }
        else{
            check_appointment = false
        }
        
        
    }

    console.log(appointment)
      

    let datee = new Date() / 1000



    return (
        <div>
            <Navbar/>
            <h1 className="title">My Patients</h1>

            

                {/* <button className="btn btn-success">My profile</button> */}
                {
                    check_appointment ? 
                    rows.map((data,key)=>{
                        
                        let change_css = "review_form"

                        if(datee > new Date(appointment['date'][key]) / 1000 || appointment['status'][key] === "cancel"){
                    
                            change_css += "1"
                        }
                        else{
                            change_css += "2"
                        }
                        

                        return(
                            <div className={change_css} key={key}> 
                                <div className="row">
                                    <div className="col">
                                    <b>Name:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['name'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Email:</b> 
                                    </div>
                                    <div className="col">
                                    {appointment['email'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>City</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['city'][key]}
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                    <b>Phone:</b>  
                                    </div>
                                    <div className="col">
                                    0{appointment['phone'][key]}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <b>Date:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['date'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Slot:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['slot'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Patients:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['patients'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Clinic:</b>  
                                    </div>
                                    <div className="col">
                                    <b>{appointment['clinic'][key]}</b>
                                    </div>

                                </div>
                                

                               
                            </div>
                        )
                    })
                    :
                    <div className="review_form">
                        <h1>No Appointments Yet!</h1>
                    </div>
                    

                }



{
                    check_appointment ? 
                    rows1.map((data,key)=>{
                        
                        let change_css = "review_form"

                        if(datee > new Date(appointment['date1'][key]) / 1000 || appointment['status1'][key] === "cancel"){
                    
                            change_css += "1"
                        }
                        else{
                            change_css += "2"
                        }
                        

                        return(
                            <div className={change_css} key={key}> 
                                <div className="row">
                                    <div className="col">
                                    <b>Name:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['name1'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Email:</b> 
                                    </div>
                                    <div className="col">
                                    {appointment['email1'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>City</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['city1'][key]}
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col">
                                    <b>Phone:</b>  
                                    </div>
                                    <div className="col">
                                    0{appointment['phone1'][key]}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                    <b>Date:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['date1'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Slot:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['slot1'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Patients:</b>  
                                    </div>
                                    <div className="col">
                                    {appointment['patients1'][key]}
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col">
                                    <b>Place:</b>  
                                    </div>
                                    <div className="col">
                                    <b>{appointment['hospital'][key]}</b>
                                    </div>

                                </div>
                            
                            </div>
                        )
                    })
                    :
                    <div></div>

                }


            


            
        </div>
    );
}

export default Appointments;