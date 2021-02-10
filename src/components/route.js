import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Contact from './contact'
import About from './about'
import Hospital from './hospital'
import Doctor from './doctor'
import Lab from './lab'
import Sign from './signin'
import Signup from './signup'
import DocSignup from './doctors/doc_signup'

function RouteConfig()
{
    return(
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/hospital" component={Hospital}/>
                    <Route exact path="/lab" component={Lab}/>
                    <Route exact path="/doctor" component={Doctor}/>
                    <Route exact path="/doctor/doc_register" component={DocSignup}/>
                    <Route exact path="/login" component={Sign}/>
                    <Route exact path="/register" component={Signup}/>
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;