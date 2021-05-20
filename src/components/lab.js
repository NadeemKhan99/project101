import React from 'react'
import {Redirect} from 'react-router-dom'
import Lab_Sign from './labs_module/sign_in'

function Lab() {
    return(
        <div>   
            <div>
            {sessionStorage.getItem('lab_id')===null?
            <Lab_Sign />
            :
            <Redirect to="/"/>
        
        }
            
        </div>
            
        </div>
    );
}

export default Lab;