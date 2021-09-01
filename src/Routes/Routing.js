import React from 'react';
import {Switch,Route} from "react-router-dom";
import Layout from '../Containers/Layout/Layout';

function Routing(props) {
    return (
        <Switch>
            <Route path="/" component={Layout}/>
        </Switch>
    );
}

export default Routing;