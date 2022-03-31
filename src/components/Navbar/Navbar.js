import React from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  AppBar,
} from '@material-ui/core';

import logo from '../../images/logo.jpeg';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu' sx={{ mr: 2 }}>
            <img className={classes.image} src={logo} alt='logo' height='50' />
          </IconButton>

          <Typography className={classes.title} variant='h5'>
            {' '}
            Taraba Works
          </Typography>

          <Button variant='outlined'>Admin</Button>
          <Button variant='outlined'>Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
