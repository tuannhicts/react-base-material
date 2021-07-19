import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TuneIcon from '@material-ui/icons/Tune';
import RestoreIcon from '@material-ui/icons/Restore';
import { Button, Input, InputBase, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import ham from '../../assets/images/ham.png';
const InputComponents = () => {
  const classes = useStyles();
  return (
    <div className={classes.inputGroup}>
      <div className={classes.mainInput}>
        <div className={classes.headingInput}>
          <Typography>From</Typography>
          <Typography>Balance:</Typography>
        </div>
      <div className={classes.contentInput}>
        <InputBase
            type="number"
            className={classes.textField}
            inputProps={{
            className: classes.input
                }}
              />
        <Button variant="contained" className={classes.btnSelect}>
            <img src={ham} alt="" className={classes.avatarCoin}/>
            <Typography>Select</Typography>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default InputComponents
const useStyles = makeStyles((theme:Theme) => createStyles({
  // input
  inputGroup:{
    backgroundColor:'#FFDADA',
    borderRadius:18,
  },
  mainInput:{
    padding:10,
  },
  contentInput:{
   marginTop:10,
   display:'flex',
   justifyContent:'space-between',
   marginBottom:10,
  },
  headingInput:{
    display:'flex',
    justifyContent:'space-between',
  },
  input:{
    fontWeight:'bold',
  },
  textField:{
    
  },
  btnSelect:{
    borderRadius:50,
    textTransform:'capitalize',
  },
  avatarCoin:{
    width:20,
    height:20,
    marginRight:10,
  },
}));
