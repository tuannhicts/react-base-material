import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import transitions from "@material-ui/core/styles/transitions";

const drawerWidth = 240;

 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      backgroundColor:'#66893c',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36,
      [theme.breakpoints.down(377)]: {
        marginRight:10,
      },
    },
    hide: {
      display: "block"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
     
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      },
      [theme.breakpoints.down(479)]: {
        width:0,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    logoIcon:{
      width:40,
      height:40,
      marginRight:10,
      '&:hover':{
        transform:'rotate(20deg)',
        transitions:'0.5s linear'
      }
      
    },
    logoImg: {
    },
    logoAccount:{},
    normal:{
      paddingLeft: theme.spacing(2),
    },
    titleName:{
      [theme.breakpoints.down(479)]: {
        display:'none',
      },
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    active: {
      backgroundColor: "#F4F4F4",
      borderLeft:'2px solid #66893c',
    },
    toolBarHeader:{
    //   display:'flex',
    //   justifyContent:'space-between',
    //   alignItems:'flex-start',
    }
  })
);

export default useStyles