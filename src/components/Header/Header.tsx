import React,{useState, useCallback, useRef, useEffect} from "react";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemText,
} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExtensionIcon from '@material-ui/icons/Extension';
import PagesIcon from '@material-ui/icons/Pages';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SwapVertIcon from '@material-ui/icons/SwapVert';
import useStyles from './styles';
import {useHistory, useLocation} from 'react-router-dom';
import logoIcon from  '../../assets/images/ham.png';
import Menu from './Menu/Menu';
import {useTranslation} from 'react-i18next';
interface IDataDrawer{
  name: string;
  route ?: string;
  childs ?:IDataDrawer[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon:any;
}
type AnyEvent = MouseEvent | TouchEvent

 const Header: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [tradeExtend, setTradeExtend] = useState(false);
  const [t] = useTranslation();
  console.log(location.pathname)
  const myRef = useRef<HTMLDivElement>(null);
  const dataDrawer : IDataDrawer[] = [
      {
        name:'Dashboard',
        route:'/dashboard',
        icon: <DashboardIcon/>
      },
      {
        name:'Swap',
        route:'/swap',
        icon: <SwapVertIcon/>
      },
      {
        name:'Home',
        route:'/home',
        icon: <HomeIcon/>
      },
      {
        name:'Extending',
        route:'/extending',
        icon: <ExtensionIcon/>,
        childs : [
          {
            name:'Page one',
            route:'/extending/page-1',
            icon: <PagesIcon/>,
          },
          {
            name:'Page two',
            route:'/extending/page-2',
            icon: <PagesIcon/>,
          },
        ]
      },
      
  ]
/// handle click outside
  useEffect(()=>{
    const handleClick = (event: AnyEvent) =>{
      if(!myRef.current?.contains(event.target as Node)){
        setOpen(false);
        setTradeExtend(false);
      }
    }
      document.addEventListener("mousedown", handleClick);
    return ()=>{
      document.removeEventListener("mousedown", handleClick);
    }

  },[myRef])
  const handleDrawerOpen = useCallback(() => {
    setOpen(!open);
    if (open) {
      setTradeExtend(false);
    }
  }, [open]);

  // const handleDrawerClose = useCallback(()=>{
  //   setOpen(false)
  // },[open]);
 
  const onSelectDrawerItem = useCallback(
    (item: IDataDrawer) => {
      if (item.route) {
        history.push(item.route);
        setOpen(true);
        if(item.route === "/extending" || item.route === "/extending/"){
          setTradeExtend(true);
        }
       
      } else {
        setOpen(false);
        setTradeExtend(false);
      }
    },
    [history, tradeExtend]
  );
  return (
    <div className={classes.root} ref={myRef}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
   
        <Toolbar className={classes.toolBarHeader}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open
                })}
              >
                {open === true ? <MenuOpenIcon/> : <MenuIcon/>}
              </IconButton>
              <img src={logoIcon} className={classes.logoIcon}/>
              <Typography variant="h6" noWrap className={classes.titleName}>
                {t('Title name')}
              </Typography>  
             <Menu/>
       </Toolbar>      
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
        </div>
        <Divider />
        <List>
          {dataDrawer.map((items, index) => (
            <>
            <ListItem button key={index}
            onClick={() => onSelectDrawerItem(items)} 
            className={clsx(classes.normal,location.pathname === items.route ? classes.active : null)}>
              <ListItemIcon>
                {items.icon}
              </ListItemIcon>
              <ListItemText>
                {items.name}
                </ListItemText>
              {items.childs && open && (tradeExtend ? <ExpandLess /> : <ExpandMore />)} 
            </ListItem>
            {items.childs && items.childs.length > 0 && (
                  <Collapse in={tradeExtend} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {items.childs.map((childItem, keyIndex) => (
                        <ListItem
                          button
                          className={clsx(
                            classes.nested,
                            location.pathname === childItem.route
                              ? classes.active
                              : null
                          )}
                          key={keyIndex}
                          onClick = {() => onSelectDrawerItem(childItem)}
                        >
                          <ListItemIcon>
                            {childItem.icon}
                          </ListItemIcon>
                          <ListItemText >
                            {childItem.name}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
            </>
          ))}
        </List>       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
         
      </main>
    </div>
  );
}

export default Header