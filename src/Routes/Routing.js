import React from 'react';
import {Switch,Route} from "react-router-dom";
import Layout from '../Containers/Layout/Layout';
import Login from "../Containers/Login"

function Routing(props) {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Layout}/>
        </Switch>
    );
}

export default Routing;