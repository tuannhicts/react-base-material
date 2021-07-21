import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import {Alert} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {sGetSnackBar} from '../../redux/selectors/app.selector';
import { resetSnackBar } from '../../redux/actions/app.action';
const SnackBar:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {show , message, messageType} = useSelector(sGetSnackBar);
  const handleClose = () => {
    dispatch(resetSnackBar());
  };
  const keyOfMessage = new Date().getTime();
  return (
    <div className={classes.root}>
      <Snackbar 
      open={show} autoHideDuration={2000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      className={classes.snackBar}  
      key={keyOfMessage}
      >
         <Alert onClose={handleClose} severity={messageType} >
         {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
export default SnackBar;
const useStyles = makeStyles(() => ({
  root: {
     width: '100%',
  },
  snackBar:{
   top:80,
  }
  
}));