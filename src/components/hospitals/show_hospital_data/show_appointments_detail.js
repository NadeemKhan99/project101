import React, { useState,useEffect } from 'react'
import Navbar from './../../navbar'
import "./../../../index.css"
import {get_hospital_appoinments} from './../../api_requests/login'


function Hospital_Appointments() {

    let id = sessionStorage.getItem('hospital_id')

    

    let [appointment,setappointment] = useState([])

    let check_appointment = true


    let i = 1;
    let rows = []
    

    useEffect(() => {
        async function data_show(id) {
          let real_data = await get_hospital_appoinments(id);

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

    console.log(appointment)



    let datee = new Date() / 1000

    return (
        <div>
            <Navbar/>
            <h1 className="title">My Patients</h1>

            

                {/*                      for doctors                   */}
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
                                <h3>Doctor Detail</h3>
                                name:  <b>{appointment['name'][key]}</b><br></br>
                                email: <b>{appointment['email'][key]}</b><br></br>
                                phone: <b>{appointment['phone'][key]}</b><br></br>
                                <hr></hr>
                                <h3>Patient Detail</h3>
                                name:  <b>{appointment['name1'][key]}</b><br></br>
                                email: <b>{appointment['email1'][key]}</b><br></br>
                                phone: <b>{appointment['phone1'][key]}</b><br></br>
                                city:  <b>{appointment['city1'][key]}</b><br></br>
                                address: <b>{appointment['address1'][key]}</b><br></br>
                                <hr></hr>
                                <h3>Appointment Time</h3>
                                slot: <b>{appointment['slot'][key]}</b><br></br>
                                date: <b>{appointment['date'][key]}</b><br></br>
                                # of patients: <b>{appointment['patients'][key]}</b><br></br> 



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

export default Hospital_Appointments;