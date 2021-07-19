import React,{useState} from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import coinImage  from '../../assets/icons/coin.png';



const ModalSelectToken: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const defaultValue = "USDT";
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <button type="button" onClick={handleOpen}>
        Click open modal select token
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.container}>
                  <div className={classes.heading}>
                      <Typography className={classes.title}>Select a token</Typography>
                      <CloseIcon className={classes.closeIcon} onClick={handleClose}/>
                  </div>
                  <div className={classes.content}>
                      <div className={classes.token}>
                        <img src={coinImage} className={classes.coinImage} />
                        <Typography className={classes.coinName}>{defaultValue}</Typography>
                      </div>
                  </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalSelectToken
const useStyles = makeStyles(() =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    paper: {
      backgroundColor: "#ffff",
      border: '2px solid #B5CDA3',
      borderRadius:20,
      width:280,
      height:500,
    },
    container:{
    },
    heading:{
      display:'flex',
      justifyContent:'space-between',
      padding:10,
      marginBottom:10,
      borderBottom:'1px solid #F1ECC3',
    },
    title:{
      color:"#57837B",
      fontWeight:600,
      fonrSize:26,
    },
    closeIcon:{
      cursor:'pointer',
      color:"#57837B",
      fontWeight:600,

    },
    content:{
      width:"100%",
  
    },
    token:{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      width:'100%',
      height:46,
      padding:10,
      cursor:'pointer',
      "&:hover":{
        backgroundColor:"#f4f4f4",
        transition:'0.25s linear',
      }
      
    },
    coinImage:{
      width:30,
      height:30,
    },
    coinName:{
      marginLeft:5,
      fontWeight:550,
      color:"#57837B",
    },
  }),
);