import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
// import UserIcon from  '@material-ui/icons/PermIdentity';
import { NavLink } from 'react-router-dom';
import ReportIcon from  '@material-ui/icons/BugReport';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
//import styleClasse from './SideBarMenu.css';
import LogoutIcon from '@material-ui/icons/FormatClear';
const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },

  gutters: {
    padding: 15,
    justifyContent:"spacing-between"
  },
  button: {
    textTransform: 'uppercase',
    fontSize: 10,
  },
  container:{
    backgroundColor:'rgba(1, 1, 1, 0.22)'

  },
  listColor:{
    color:'#fff'
  },
  ItemText:{
    display:'block'
  },
  childTextItem:{
color:"#fff"
  },
  svgColor:{
    color:"#fff"
  }
});

function SidebarMenu(props) {
  const { classes } = props;
  return (
    <div>
   
      <List component="nav" >
      <NavLink to="/home/dashboard" title="Home">
        <ListItem classes={{
          gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
        }} selected={props.selectedindex === 1} selectedindex="1" button>
        <ListItemIcon color="action">
        <HomeIcon color="action" classes={{
          root:classes.svgColor
        }} />
      </ListItemIcon>
          <ListItemText classes={{
            root: classes.listColor,
            primary:classes.childTextItem
          }}  inset primary="DashBoard"  />  
         
      </ListItem></NavLink>
      <NavLink to="/home/report" title="Report">
   <ListItem classes={{
          gutters: classes.gutters, // class name, e.g. `classes-nesting-label-x`
        }} selected={props.selectedindex === 4} selectedindex="4" button>
        <ListItemIcon>
        <ReportIcon classes={{
          root:classes.svgColor
        }} />
      </ListItemIcon>
           <ListItemText classes={{
            root: classes.listColor,
            primary:classes.childTextItem
          }}  inset primary="Reports" />
        
        </ListItem></NavLink>
        <NavLink to="/logout" title="Logout">
        <ListItem classes={{
          gutters: classes.gutters, // class name, e.g. `classes-nesting-label-x`
        }} selected={props.selectedindex === 5} selectedindex="5" button>
        <ListItemIcon>
        <LogoutIcon classes={{
          root:classes.svgColor
        }} />
      </ListItemIcon>
           <ListItemText classes={{
            root: classes.listColor,
            primary:classes.childTextItem
          }}  inset primary="Logout" />
        
        </ListItem></NavLink>
      </List>

    </div>
  );
}

SidebarMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarMenu);



