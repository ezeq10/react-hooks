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
  toolbar: {

  },
  link: {
    color: '#999999',
    margin: theme.spacing(1, 1.5),
    '&:hover': {
      color: '#FFF',
      textDecoration: 'none',
    }
  },  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar () {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          TK2
        </Typography>
        <Link to="/articles" className={classes.link}>
          Artículos
        </Link>
        <Link to="/stock" className={classes.link}>
          Stock
        </Link>
        <Link to="/tags" className={classes.link}>
          Etiquetas
        </Link>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>    
  );
}