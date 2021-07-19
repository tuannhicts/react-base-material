import React from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core';
import userProfile from '../../../assets/images/account.png';
const Menu = () => {
  const classes = useStyles();
  return (
     <div className={classes.container}>
      <div className={classes.btn}>
        <Button variant="contained" className={classes.btnConnect}>Connect</Button>
      </div>
      <div className={classes.btn}>
        <Button variant="contained" className={classes.btnConnect}>Connect</Button>
      </div>
      <img src={userProfile}  width={30} height={30} className={classes.logoImg}/>
    </div> 
  )
}

export default Menu
