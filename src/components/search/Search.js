import React from 'react';
import styleClasses from './Search.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit
  },
});

function Search(props) {
  const { classes } = props;
    return (
       <div className={styleClasses.SearchContainer}>
       <div className={styleClasses.SearchHeader}> <h3>{props.heading}</h3>
       <IconButton
       color="inherit"
       aria-label="Open drawer"
       onClick={props.closeSearchHandler}
     >
     <Close/>
     </IconButton>
       
       </div>
       
       
       <FormControl className={classes.formControl}>
       <InputLabel htmlFor="name-simple">Company Name</InputLabel>
       <Input id="name-simple" value={props.name} onChange={props.inputChangeHandler} />
     </FormControl>

     <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-helper">Product Price</InputLabel>
          <Input id="name-helper" value={props.name} onChange={props.inputChangeHandler} />
        </FormControl>
        <div className={[styleClasses.SpacingTopLarge, styleClasses.SpacingSmallLeftSpacing].join(' ')}>
        <Button variant="contained" color="primary" onClick={props.searchHandler} className={classes.button}>
        Send
       <SearchIcon/>
      </Button>
      </div>
        
       </div>
    );
  }
  export default withStyles(styles)(Search);



