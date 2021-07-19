import React from 'react';
import useStyles from './styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TuneIcon from '@material-ui/icons/Tune';
import RestoreIcon from '@material-ui/icons/Restore';
import { Button, Typography } from '@material-ui/core';

import InputComponents from '../../components/Input/InputComponents';
const Swap:React.FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <div className={classes.content}>
          <div className={classes.header}>
              <Typography className={classes.headerName}>
                    Title Name
              </Typography>
              <div className={classes.btn}>
                  <TuneIcon className={classes.btnTuneIcon}/>
                  <RestoreIcon className={classes.btnRestore}/>
              </div>
          </div>
         <InputComponents/>
        
            <ArrowDownwardIcon className={classes.iconBottom}/>
    
         <InputComponents/>

         <div className={classes.groupButton}>
           <Button variant="contained" className={classes.btnSwap}>Swap</Button>
           <Button variant="contained" className={classes.btnExchange}>Exchange</Button>
         </div>
      </div>
    </main>
  )
}

export default Swap
