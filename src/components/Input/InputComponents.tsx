import React,{useCallback ,useState, useMemo} from 'react'
import { Button,InputBase, Typography } from '@material-ui/core';
import { makeStyles, createStyles} from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import ham from '../../assets/images/ham.png';
import {useDispatch} from 'react-redux';
import {showSnackBar,resetSnackBar} from '../../redux/actions/app.action';
import ModalSelectToken from '../Modal/ModalSelectToken';

interface ITypeInput{
  length: number;
  valueInput ?: string | number
}
const InputComponents: React.FC  = () => {
  const classes = useStyles();
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onSelectToken = useCallback(()=>{
    setOpenModal(true);
  },[])
  
  // check input length 
  const getValueInput = useCallback((even:any)=>{
    const valueInput: ITypeInput  = (even.target.value);
    if(valueInput.length < 4){
      dispatch(
        showSnackBar({
          message:"Nhập tối thiểu ít nhất 4 chữ số",
          type:'error',
        })
      )
    }
  },[])

  return (
    <div className={classes.inputGroup}>
    <div className={classes.mainInput}>
      <div className={classes.headingInput}>
        <Typography>{t("From")}</Typography>
        <Typography>{t("Balance")}:</Typography>
      </div>
    <div className={classes.contentInput}>
      <InputBase
          onChange={getValueInput}
          type="number"
          className={classes.textField}
          inputProps={{
          className: classes.input
              }}
            />
      <Button variant="contained" className={classes.btnSelect} onClick={onSelectToken} >
          <img src={ham} alt="" className={classes.avatarCoin}/>
          <Typography>{t("select")}</Typography>
      </Button>
      </div>
    </div>
    <ModalSelectToken open={openModal} handleClose={onSelectToken}/>
  </div> 
  )
}
export default InputComponents;
const useStyles = makeStyles(() => createStyles({
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
