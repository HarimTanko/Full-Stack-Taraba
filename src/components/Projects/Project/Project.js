import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteProject } from '../../../actions/projects';

//import useStyles from './styles';

const Project = ({ project, setCurrentId }) => {
  const dispatch = useDispatch();
  //const classes = useStyles();
  return (
    <>
      <Card xs={12} md={4} style={{ maxWidth: 400 }}>
        <CardMedia
          component='img'
          height='440'
          image={project.selectedFile}
          alt='project'
        />
        <CardContent>
          <Typography variant='h4' gutterBottom>
            {project.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            {project.location}
          </Typography>

          <Typography variant='body2'>{project.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={() => {}}>
            {' '}
            View Reports
          </Button>
          <Button
            size='small'
            color='primary'
            onClick={() => {
              setCurrentId(project._id);
            }}
          >
            Edit
          </Button>
          <Button
            size='small'
            color='secondary'
            onClick={() => {
              dispatch(deleteProject(project._id));
            }}
          >
            <DeleteIcon fontSize='small' />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
