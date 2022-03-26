import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import useStyles from './styles';

import flyover from '../../../images/flyover.JPG';

const Project = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant='h4' gutterBottom component='div'>
          Project Name
        </Typography>
        <Typography variant='h6'>Project Location</Typography>
        <Typography variant='h6'> Road Length</Typography>
        <Typography variant='h6'> Contract Sum Length</Typography>
        <Typography variant='h6'> Contract Duration</Typography>
        <Typography variant='body1'>
          Project description Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Tempora nulla labore quos fugiat inventore placeat
          vel numquam cupiditate est odit non suscipit, recusandae eligendi
          magnam blanditiis enim dolorem! Illum, incidunt?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Iste assumenda laborum nam quae
          cupiditate, perspiciatis est commodi ducimus aliquid repellendus
          dolorem sint illum accusamus perferendis voluptates tempore ipsam
          nostrum sit.
        </Typography>
        <Typography variant='body2'>Project engineer</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={flyover}
          alt='project'
          height='400'
          className={classes.projectImage}
        />
      </Grid>
    </Grid>
  );
};

export default Project;
