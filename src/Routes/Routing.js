import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from '../Components/ProtectedRoute';
import Contact from '../Containers/Layout/Contact/Contact';
import Layout from '../Containers/Layout/Layout';
import Login from "../Containers/Layout/Login/Login"
import Register from '../Containers/Layout/Register/Register';
import VerifyUser from "../Containers/VerifyUser";
import Query from "../Containers/Layout/RaiseQuery/index";
import ResolveQuery from '../Containers/Layout/QueryScreens/ResolveQuery';
import ReviewQA from '../Containers/Layout/QueryScreens/Review_QA';
import ApprovalTabs from '../Containers/Layout/QueryScreens/AdminApproval';

function Routing(props) {

    return (

        <Switch>
            {/* <ProtectedRoute exact path="/login" component={Login}/> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact_us" component={Contact} />
            <Route path="/raise_query" component={Query} />
            <Route path="/resolve_query" component={ResolveQuery} />
            <Route path="/reviewQA" component={ReviewQA} />
            <Route path="/approveQA" component={ApprovalTabs} />
            
            <Route path="/verifyUser/:code" component={VerifyUser} />
            <Route path="/" component={Layout} />

        </Switch>
    );
}

export default Routing;