import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container:{
    display:'flex',
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-start',
    [theme.breakpoints.down(376)]: {
      justifyContent:'flex-start',
      
    },
  },
  btn:{
    borderRadius:20,
    
  },
  btnConnect:{
    borderRadius:20,
    marginRight:10,
    backgroundColor:'yellow',
  },
  logoIcon:{
    
  },
  logoImg:{
    [theme.breakpoints.down(479)]: {
      marginRight:20,
    },
    [theme.breakpoints.down(377)]: {
      marginRight:20,
    
    },
  },
}));

export default useStyles