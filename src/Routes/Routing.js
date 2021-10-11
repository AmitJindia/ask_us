import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from '../Components/ProtectedRoute';
import Contact from '../Containers/Layout/Contact/Contact';
import Layout from '../Containers/Layout/Layout';
import Login from "../Containers/Layout/Login/Login"
import Register from '../Containers/Layout/Register/Register';
import VerifyUser from "../Containers/VerifyUser";
import Query from "../Containers/Layout/RaiseQuery/index";

function Routing(props) {

    return (

        <Switch>
            {/* <ProtectedRoute exact path="/login" component={Login}/> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact_us" component={Contact} />
            <Route path="/raise_query" component={Query} />
            <Route path="/verifyUser/:code" component={VerifyUser} />
            <Route path="/" component={Layout} />

        </Switch>
    );
}

export default Routing;