import React from 'react';
import classes from './RowDetail.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});
function TabContainer(props) {
  return (
    <Typography className={classes.TabContainer} component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
function RowDetail(props) {
  let griddata = props.gridDetailData[0];
  console.log(griddata)
  let SelctedTab = props.tabvalue;
  return (
    <div className={classes.RowDetail}>
  <div className={classes.rowDetailHeader}>
  <h3>National Decorators Ltd.</h3>

  <span  onClick={props.detailRowCloseHandler}><Close/></span>

  </div>
      
      <div className={classes.root}>
        <Tabs
          value={SelctedTab}
          onChange={props.tabChangeHandler}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Company Detail"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Contacts"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Leads"
          />
        </Tabs>
        {SelctedTab === 0 && <TabContainer>
          <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
       <b>Maker:</b> { griddata.make}
        </Grid>
        <Grid item xs={6} sm={6}>
        <b>Model:</b> { griddata.model}
        </Grid>
        </Grid>
          <div>
        
          </div>
          <div>
         
          
          </div>
        
          </TabContainer>}
        {SelctedTab === 1 && <TabContainer>    <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <b>Price1:</b> { griddata.price1}
        </Grid>
        <Grid item xs={6} sm={6}>
        <b>Price2:</b> { griddata.price2}
        </Grid>
        </Grid></TabContainer>}
        {SelctedTab === 2 && <TabContainer><div>
          <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
          <b>Price3:</b> { griddata.price3}
          </Grid>
        
          </Grid>
           </div>
          
         </TabContainer>}

      </div>
    </div>
  );

}
RowDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RowDetail);



