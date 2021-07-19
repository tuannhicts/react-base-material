import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => createStyles({
  container:{
    // flexGrow: 1,
    // padding:theme.spacing(3),
    margin:'3rem auto',
    width:480,
    height:480,
    border:'1px solid green',
    borderRadius:20,
    [theme.breakpoints.down(479)]: {
      maxWidth:360,
      maxHeight:450,
    },
    [theme.breakpoints.down(377)]: {
      maxWidth:350,
      maxHeight:440,
    },
    
  },
  content:{
   padding:18,

  },
  header:{
    display:"flex",
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginBottom:20,
  },
  headerName:{
    fontSize:20,
    fontWeight:'bold',
  },
  btn:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
  },
  btnTuneIcon:{
    fontWeight:'bold',
    marginRight:10,
  },
  btnRestore:{
    fontWeight:'bold',
  },
 
  iconBottom:{
    marginTop:20,
    marginBottom:20,
    fontWeight:'bold',
    backgroundColor:'#FFDADA',
    borderRadius:20,
    cursor:'pointer',

  },
  groupButton:{
    marginTop:20,
    display:'flex',
    justifyContent:'space-between',
    alignItems:"flex-start",
  },
  btnSwap:{
    borderRadius:20,
    width:150,
    height:50,
  },
  btnExchange:{
    borderRadius:20,
    width:150,
    height:50,
  },
}));

export default useStyles;