import React, { useState } from 'react'
import "./../../../index.css"
import axios from 'axios';



function Review({ submit, values }) {




    let rows1 = []
    let j = 1

    let length_array = values[1].speciality.length

    while(j<= length_array)
    {
        rows1.push(j)
        j++
    }

    


    let specialists = ""



    function onSubmit() {



        for (let j = 0; values[1].speciality.length - 1 >= j; j++) {
            specialists = specialists + "| " + values[1].speciality[j] + " "
        }



        const registration_data = {
            name: values[0].name,
            email: values[0].email,
            password: values[0].password,
            city: values[0].city.toLowerCase(),
            phone: values[0].phone,
            address: values[0].address,
            category: "hospital",
            hospital: values[1].hospital,
            numberDoctor: values[1].numberDoctor,
            speciality: specialists
        }

        var headers = {
            "Content-Type": "application/json;charset=UTF-8",
        }

        console.log(registration_data)




        axios.post(
            'http://localhost/back_end/hospital_signup.php', registration_data, headers
        ).then(
            res => {
                alert(res.data.id)
                submit(3)



            }
        );


    }



    return (
        <div className="review_form">
            <h2>Review</h2>
            <br></br>
            <h4>Registration Data</h4>
            <p>{values[0].name}</p>
            <p>{values[0].email}</p>
            <p>{values[0].password}</p>
            <p>{values[0].city}</p>
            <p>0{values[0].phone}</p>
            <p>{values[0].address}</p>
            <h4>Hospital Data</h4>
            <p>{values[1].hospital}</p>
            <p>{values[1].numberDoctor}</p>


            {rows1.map((data,key)=>{
                return(
                    <span key={key}>
                        {data%4 === 0 ? <br></br> : ""}
                    <span>{values[1].speciality[key]}|</span>
                    </span>
                )
            })}



            <div className="row">
                <div className="col">
                    <button className="btn btn-primary float-right" onClick={() => submit(1)}>Back</button>
                </div>

                <div className="col">
                    {
                        values[1].speciality.length === 0 ?
                            <p className="error">Plz select specialists!</p>
                            :
                            <button className="btn btn-success float-left" onClick={onSubmit}>Submit</button>

                    }
                </div>
            </div>









        </div>
    );
}

export default Review;