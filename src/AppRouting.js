import React from 'react';
import Layout from './hoc/layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Login from './container/auth/login/Login';

const Routing= ()=>{
return  (
    <Switch>
    <Route exact path='/' component={Login}/>
    <Route path="/home" component={Layout}/>
    </Switch>
)
  

}


export default Routing;
