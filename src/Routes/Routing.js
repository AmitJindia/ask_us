import React from 'react';
import {Switch,Route} from "react-router-dom";
import Layout from '../Containers/Layout/Layout';
import Login from "../Containers/Login/Login"
import Register from '../Containers/Register/Register';

function Routing(props) {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" component={Layout}/>
            
        </Switch>
    );
}

export default Routing;