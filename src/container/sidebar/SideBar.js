import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { StatusColor } from '../../ThemeColor';
import SidebarMenu from '../../components/sidebarMenu/SideBarMenu';
// import bg from  '../../assets/images/bg.jpg';
import styleCss from './SideBar.css';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minHeight: "90vh",
    backgroundColor: theme.palette.secondary.dark,
   //background: `url(${bg}) right top no-repeat` ,
   backgroundSize: "cover"
  }
});

class SideBar extends React.Component {
  state = {
    open: true,
    selectedindex:1,
  };
  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: StatusColor,
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }
  handleClick = (selectedindex) => {
    this.setState(state => ({ open: true, selectedindex:selectedindex }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Scrollbars
        renderThumbVertical={this.renderThumb}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={'90vh'}
        thumbMinSize={30}
        universal={true} style={{ maxHeight: '90vh' }}>
        <div className={classes.root}>
        <div className={styleCss.MenuListSec}>
         <SidebarMenu menuClick={this.handleClick} open={this.state.open} selectedindex={this.state.selectedindex} />
         </div>
         </div>
      </Scrollbars>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideBar);

