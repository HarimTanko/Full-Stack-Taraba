import React from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
  Button,
  AppBar,
  Link,
  Avatar,
} from '@material-ui/core';

import logo from '../../images/logo.jpeg';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar position='static' color='inherit' className={classes.appBar}>
      <div className={classes.brandContainer}>
        <IconButton edge='start' aria-label='menu' sx={{ mr: 2 }}>
          <img className={classes.image} src={logo} alt='logo' height='50' />
        </IconButton>

        <Typography className={classes.title} variant='h5'>
          <Link href='./' style={{ textDecoration: 'none' }}>
            {' '}
            Taraba Works
          </Link>
        </Typography>
      </div>

      <Toolbar>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant='contained' color='primary' href='/auth'>
            Admin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
