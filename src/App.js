import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Container,
  CssBaseline,
}  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppRouter from "./components/AppRouter";
import NavBar from './components/NavBar';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      //background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  content: {
    width: '100%',
    padding: theme.spacing(8, 0, 0),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>  
      <CssBaseline />
        <NavBar />
        <Container maxWidth="lg" component="main" className={classes.content}>
          <AppRouter/>
        </Container> 
    </BrowserRouter>
  )
};

export default App;