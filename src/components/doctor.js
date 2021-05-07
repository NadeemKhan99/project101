import React from 'react'
import DocSign from './doctors/doc_signin'
import Appointments from './doctors/doc_appointment'
function Doctor() {

    return (
        <div>
            {sessionStorage.getItem('doctor_id')===null?
            <DocSign/>
            :
            <Appointments/>
        
        }
            
        </div>
    );
}

export default Doctor;


