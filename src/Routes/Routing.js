import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Contact from '../Containers/Layout/Contact/Contact';
import Layout from '../Containers/Layout/Layout';
import Login from "../Containers/Layout/Login/Login"
import Register from '../Containers/Layout/Register/Register';
import { TemplateContext } from '../context/templateContext';

function Routing(props) {
    
    return (
        
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact_us" component={Contact} />
                <Route path="/" component={Layout} />

            </Switch>
    );
}

export default Routing;