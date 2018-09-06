import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import classes from  './App.css';
import Routing from './AppRouting'
const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#152e8e'
    },
    secondary: {
      main:'#07c6e9',
      dark:'#24b0ca'
    }
  },
  status: {
    main: '#f1ee13',
  },
  MuiSvgIcon: {
    root: {
      color:"#fff"
    },
},
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>

      <div className={classes.App}>
    
      <CssBaseline />
     <Routing/>
</div>
      </MuiThemeProvider>
    );
  }
}

export default App;

