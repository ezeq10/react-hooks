import React, { Fragment, useState } from 'react';
import {
  Button,
  IconButton,
  Typography,
  Container,
  TextField,
}  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    paddingBottom: '5px',
    margin: '10px 0 20px',
    borderBottom: '1px solid #EEE'
  },
  sectionTitle: {
    fontSize: '38.5px',
  }
}));

// Data
const articlesData = [
  { id: 1, name: 'Zapatillas Bubly Glitter Plata Abrojo', code:'Bb255-Plata', description: '3 cuotas de $542' },
  { id: 2, name: 'Zapato Juhano Negro', code: 'Jh1000-Negro', description: '3 cuotas de $1288,99' },
  { id: 3, name: 'Camisa Bando Yechiel Bicicletas Fucsia', code: 'Bd2048-F', description: '3 cuotas de $1019,99' },
]

const SearchBar = (props) => (
  <Container>
    <Button></Button>
    
  </Container>  
);



const Articles = () => {
  const classes = useStyles();
  const initialFormState = { id: null, name: '', username: '' };
  
  const [articles, setarticles] = useState(articlesData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {  
    user.id = articles.length + 1;
    setarticles([...articles, user]);
  }

  const deleteUser = (id) => {
    setarticles(articles.filter(user => user.id !== id));
  }

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)  
    setarticles(articles.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <div className={classes.sectionHeader}>
        <h1 className={classes.sectionTitle}>Artículos</h1>
        
        <SearchBar />


        <div className="flex-large">
          {/* <UserTable 
            articles={articles}
            deleteUser={deleteUser}
            editRow={editRow}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Articles;