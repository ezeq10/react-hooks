import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  Container,
}  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppRouter from "./components/AppRouter";
import NavBar from './components/NavBar';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#333',
      backgroundColor: '#FFF',
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
    float: 'left',
    padding: theme.spacing(10, 10, 10, 10),
    flexGrow: 1,
    overflow: 'auto',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <NavBar />
      <Container component="main" className={classes.content}>
        <AppRouter/>
      </Container> 
    </BrowserRouter>
  )
};

export default App;