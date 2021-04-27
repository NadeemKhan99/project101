import React, { useState,useEffect } from 'react'
import Navbar from '../navbar'
import "./../../index.css"
import {get_user_appoinments,cancel_appoinments} from './../api_requests/login'


function User_Appointments() {

    let id = sessionStorage.getItem('user_id')

    

    let [appointment,setappointment] = useState([])
    let [appointment_cancel,set_appointment_cancel] = useState(0)
    let [message,set_message] = useState("")

    let check_appointment = true

    
    let i = 1;
    let rows = []
    

    useEffect(() => {
        async function data_show(id) {
          let real_data = await get_user_appoinments(id);

          setappointment(real_data);
        }
        data_show(id);
      },[id]);


    //   for cancelation of appointment

      useEffect(() => {
        async function appointment_del(id) {
          let real_data = await cancel_appoinments(id);

          set_message(real_data);
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


    function cancel_appointment(id)
    {
        set_appointment_cancel(parseInt(id))
        window.location.reload(false)
    }
      


    return (
        <div>
            <Navbar/>
            <h1 align="center">My Appointments</h1>

            

                {/* <button className="btn btn-success">My profile</button> */}
                {
                    check_appointment ? 
                    rows.map((data,key)=>{
                        console.log(appointment)
                        return(

                        
                            <div className="review_form" key={key}>
                                <h1>Doctors Detail</h1>
                                name:  <b>{appointment['name'][key]}</b><br></br>
                                email: <b>{appointment['email'][key]}</b><br></br>
                                city: <b>{appointment['city'][key]}</b><br></br>
                                phone: <b>{appointment['phone'][key]}</b><br></br>
                                appointment_date: <b>{appointment['date'][key]}</b><br></br>
                                slot: <b>{appointment['slot'][key]}</b><br></br>
                                number_of_appointments: <b>{appointment['patients'][key]}</b><br></br>
                                doctor_id: <b>{appointment['doctor_id'][key]}</b><br></br>
                                experience: <b>{appointment['experience'][key]}</b><br></br>
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

export default User_Appointments;