import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

import Project from './Project/Project';

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();

  return !projects.length ? (
    <CircularProgress />
  ) : (
    <Grid container className={classes.container}>
      {projects.map((project) => (
        <Grid item key={project._id} className={classes.projects}>
          <Project project={project} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
