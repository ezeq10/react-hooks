import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
}  from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    backgroundColor: '#1B1B1B',
    minHeight: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  link: {
    color: '#999999',
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    '&:hover': {
      color: '#FFF',
    }
  },  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  brand: {
    color: '#999',
    display: 'block',
    marginLeft: '-20px',
    padding: '10px 20px 10px',
    fontSize: '20px',
    fontWeigth: 200,
  },
  nav: {
    listStyle: 'none',
  },
  navList: {
    position: 'relative',
    display: 'block',
    float: 'left',
    left: 0,
    margin: '0 10px 0 0',
  },
  navPullRight: {
    float: 'right',
    marginRight: 0,    
  },
  verticalDivider: {
  }
}));

export default function NavBar () {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.brand}>
          TK2
        </Typography>
        <ul className={classes.nav}>
          <Link to="/articles" className={classes.link}>
            Artículos
          </Link>
          <Link to="/stock" className={classes.link}>
            Stock
          </Link>
          <Link to="/tags" className={classes.link}>
            Etiquetas
          </Link>
          <Link to="/tags" className={classes.link}>
            Catálogo Digital
          </Link>
        </ul>
        <ul className={classes.navPullRight}>
          <li className={classes.verticalDivider}></li>
          <li>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </li>   
        </ul>
      </Toolbar>
    </AppBar>    
  );
}