import React from 'react';
import Dashboard from '../../container/dashboard/DashBoard';
import Report from '../../container/report/Report';
import {Route, Switch} from 'react-router-dom';
const LayoutRouting= ()=>{
return  (
    <Switch>
        <Route exact path="/home/dashboard" component={Dashboard}/>
          <Route  exact path='/home/report' component={Report}  />
         
         </Switch>
)
}
export default LayoutRouting;
