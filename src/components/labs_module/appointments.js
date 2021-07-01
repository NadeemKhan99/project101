import React, { useState,useEffect } from 'react'
import Navbar from './../navbar'
import "./../../index.css"
import {get_appointments_lab,cancel_appoinments} from './../api_requests/login'


function Lab_Appointments() {

    let id = sessionStorage.getItem('lab_id')

    let [appointment_cancel,set_appointment_cancel] = useState(0)

    let [appointment,setappointment] = useState([])

    let check_appointment = true


    let i = 1;
    let rows = []
    

    useEffect(() => {
        async function data_show(id) {
          let real_data = await get_appointments_lab(id);

          setappointment(real_data);
        }
        data_show(id);
      },[id]);



      useEffect(() => {
        async function appointment_del(id) {
          let real_data = await cancel_appoinments(id);
        }
        appointment_del(appointment_cancel);
      },[appointment_cancel]);




    
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

    console.log(appointment)

    function cancel_appointment(id)
    {
        set_appointment_cancel(parseInt(id))
        window.location.reload(false)
    }
      

    let datee = new Date() / 1000

    return (
        <div>
            <Navbar/>
            <h1 className="title">My Patients</h1>

            

                {
                    check_appointment ? 
                    rows.map((data,key)=>{
                        
                        let change_css = "review_form"

                        if(datee > new Date(appointment['date'][key]) / 1000 || appointment['status'][key] === "cancel"){
                            change_css += "1"
                        }
                        else{
                            console.log(datee,appointment['date'][key])
                            change_css += "2"
                        }



                        return(

                        
                            <div className={change_css} key={key}>
                                <h3>Patient Detail</h3>
                                name:  <b>{appointment['name'][key]}</b><br></br>
                                email: <b>{appointment['email'][key]}</b><br></br>
                                phone: <b>{appointment['phone'][key]}</b><br></br>
                                address: <b>{appointment['address'][key]}</b><br></br>
                                <hr></hr>
                                <h3>Appointment Time</h3>
                                service: <b>{appointment['service'][key]}</b><br></br>
                                fee: <b>{appointment['fee'][key]}</b><br></br>
                                slot: <b>{appointment['slot'][key]}</b><br></br>
                                date: <b>{appointment['date'][key]}</b><br></br>
                                # of patients: <b>{appointment['patients'][key]}</b><br></br> 

                                {
                                    appointment['status'][key] === "active" ? 
                                    <input type="submit" className="btn btn-primary" onClick={()=>cancel_appointment(appointment['appointment_id'][key])} value="Cancel Appointment" />
                                    :
                                    <p className="error">Canceled!</p>
                                }

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

export default Lab_Appointments;