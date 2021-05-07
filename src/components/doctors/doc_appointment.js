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
      

    let datee = new Date()


    return (
        <div>
            <Navbar/>
            <h1 className="title">My Patients</h1>

            

                {/* <button className="btn btn-success">My profile</button> */}
                {
                    check_appointment ? 
                    rows.map((data,key)=>{
                        
                        let change_css = "review_form"

                        if(datee > appointment['date'][key] || appointment['status'][key] === "cancel"){
                            change_css += "1"
                        }
                        else{
                            change_css += "2"
                        }
                        

                        return(
                            <div className={change_css} key={key}> 
                                name:  {appointment['name'][key]}<br></br>
                                {appointment['email'][key]}<br></br>
                                {appointment['city'][key]}<br></br>
                                {appointment['phone'][key]}<br></br>
                                {appointment['date'][key]}<br></br>
                                {appointment['slot'][key]}<br></br>
                                Patients: {appointment['patients'][key]}<br></br>
                                Place: {appointment['clinic'][key]}
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

                        if(datee > appointment['date1'][key] || appointment['status1'][key] === "cancel"){
                            change_css += "1"
                        }
                        else{
                            change_css += "2"
                        }
                        

                        return(
                            <div className={change_css} key={key}> 
                                name:  {appointment['name1'][key]}<br></br>
                                {appointment['email1'][key]}<br></br>
                                {appointment['city1'][key]}<br></br>
                                {appointment['phone1'][key]}<br></br>
                                {appointment['date1'][key]}<br></br>
                                {appointment['slot1'][key]}<br></br>
                                Patients: {appointment['patients1'][key]}<br></br>
                                Place: {appointment['hospital'][key]}
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