import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Container,
  AppBar,
  Button,
  Typography,
  Grid,
  Toolbar,
  IconButton,
} from '@material-ui/core';

import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';

import { getProjects } from './actions/projects';

import logo from './images/logo.jpeg';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Toolbar>
            <IconButton edge='start' aria-label='menu' sx={{ mr: 2 }}>
              <img
                className={classes.image}
                src={logo}
                alt='logo'
                height='50'
              />
            </IconButton>

            <Typography className={classes.title} variant='h5'>
              {' '}
              Taraba Works
            </Typography>

            <Button variant='outlined'>Admin</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
