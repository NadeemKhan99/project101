import React, { useState } from 'react'
import axios from 'axios';
import './../index.css'

function Search() {

    const [city,setcity] = useState("Lahore");
    const [specialist,setspecialist] = useState("none");
    const [flag,setflag] = useState(false);
    let select_city =(e)=>{
        setcity(e);
        console.log(e);

    }

    let select_specialist =(e)=>{
        setspecialist(e);
        console.log(e);

    }

    let get_result =(e)=>{
        e.preventDefault();
        if(specialist==="none")
        {
            setflag(true);
        }
        else{
            setflag(false);

            var headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }

            const values = {
                get_city: city,
                get_speciality: specialist
            }
                
            axios.post(
                'http://localhost/back_end/getsearch.php',values, headers
            ).then(
                res =>{
                    console.log(res.data.signal);
                    console.log(res.data.password);
                }
            );
            


        }
        

    }

    return (
        <div className="s01">
            <form onSubmit={get_result}>
                    <div className="row">
                        <div className="col-lg-5 col-sm-12">
                            <select className="form-select" value={city} onChange={(e)=> select_city(e.target.value)} aria-label="Default select example">
                                <option value="lahore">Lahore</option>
                                <option value="karachi">Karachi</option>
                                <option value="islamabad">Islamabad</option>
                                <option value="rawalpindi">Rawalpindi</option>
                                <option value="sargodha">Sargodha</option>
                                <option value="shahdara">Shahdara</option>
                            </select>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <select className="form-select" value={specialist} onChange={(e)=>select_specialist(e.target.value)} aria-label="Default select example">
                                <option>Select Specialist</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="child specialist">Child Specialist</option>
                                <option value="gynecologist">Gynecologist</option>
                                <option value="orthopadic surgeon">Orthopadic Surgeon</option>
                                <option value="endocrinlogist">Endocrinlogist</option>
                            </select>
                            { flag ? <div className="error">Select Specialist</div> : "" }
                                
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </div>
                    </div>
            </form>
        </div>
    );
}

export default Search;