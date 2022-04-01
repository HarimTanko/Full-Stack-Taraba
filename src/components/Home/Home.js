import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import Projects from '../Projects/Projects';
import Form from '../Form/Form';

import useStyles from './styles';

import { getProjects } from '../../actions/projects';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = null;

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <Container>
      <Grid container direction='row' alignItems='center'>
        <Grid item xs={12} className={classes.projects}>
          <Projects setCurrentId={setCurrentId} />
        </Grid>
        {user ? (
          <Grid item xs={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        ) : (
          <div></div>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
