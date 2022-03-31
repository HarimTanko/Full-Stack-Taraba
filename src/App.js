import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import Projects from './components/Projects/Projects';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

import { getProjects } from './actions/projects';

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Navbar />

      <Container>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={12}>
            <Projects setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
