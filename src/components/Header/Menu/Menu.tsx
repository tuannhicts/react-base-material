import React from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core';
import userProfile from '../../../assets/images/account.png';
import { useTranslation } from 'react-i18next';

const Menu:React.FC = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const address = '00F..FXF';
  return (
     <div className={classes.container}>
      <div className={classes.btn}>
        <Button variant="contained" className={classes.btnConnect}>{t("Connect")}</Button>
      </div>
      <div className={classes.btn}>
        <Button variant="contained" className={classes.btnConnect}>{address}</Button>
      </div>
      <img src={userProfile}  width={30} height={30} className={classes.logoImg}/>
    </div> 
  )
}

export default Menu
