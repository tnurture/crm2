import React, { Component } from 'react';
import StyleCss from  './DashBoard.css';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class Dashboard extends Component {

  render() {
    return (
      <div>
     <div className={StyleCss.agGridContainer}>
   DashBoard
   </div> <Grid container>
    
        <Grid item xs={12} sm={6}>
        
        <Bar
        data={data}
      
        options={{
          maintainAspectRatio: true
        }}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
        
        <Line data={data1} />
        </Grid>
   
      </Grid>

     </div>
    );
  }
}

export default Dashboard;

