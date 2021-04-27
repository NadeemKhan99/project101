import React, { useState,useEffect } from 'react'
import { Fragment } from 'react'
import Navbar from '../navbar'
import "./../../index.css"
import {get_appointments} from './../api_requests/login'


function Appointments() {

    let id = sessionStorage.getItem('doctor_id')
    

    let [appointment,setappointment] = useState([])

    let check_appointment = true

    
    let i = 1;
    let rows = []
    

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
        if(appointment['counter']>0)
        {
            while (i <= appointment['counter']) {
                rows.push(i)
                i++
            }
        }
        else{
            check_appointment = false
        }
        
        
    }
      


    return (
        <div>
            <Navbar/>
            <h1 align="center">My Appointments</h1>

            

                <button className="btn btn-success">My profile</button>
                {
                    check_appointment ? 
                    rows.map((data,key)=>{
                        return(
                            <div className="review_form" key={key}>
                                name:  {appointment['name'][key]}<br></br>
                                {appointment['email'][key]}<br></br>
                                {appointment['city'][key]}<br></br>
                                {appointment['phone'][key]}<br></br>
                                {appointment['date'][key]}<br></br>
                                {appointment['slot'][key]}<br></br>
                                Patients: {appointment['patients'][key]}
                            </div>
                        )
                    })
                    :
                    <div className="review_form">
                        <h1>No Appointments Yet!</h1>
                    </div>
                    

                }


            


            
        </div>
    );
}

export default Appointments;