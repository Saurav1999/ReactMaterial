import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import {  makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


function ElevationScroll(props) {
    const { children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
     
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
    toolbarMargin:{
        ...theme.mixins.toolbar
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: " #0d87d9",
        '&:hover': {
          backgroundColor: "#56b6f5",
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },

}))

function Header(props){
    const classes = useStyles();

    return (
    <React.Fragment>
    <ElevationScroll> 
    
        <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
               
                <Tabs >
                    <Tab label="Home"/>
                    <Tab label="About UIDAI"/>
                    <Tab label="Ecosystem"/>
                    <Tab label="Media & Resources"/>
                    <Tab label="Contact & Support"/>
                    <Tab label="My Aadhar"/>
                </Tabs>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
               
                
            </Toolbar>
        </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
    </React.Fragment>
);
}

export default Header;