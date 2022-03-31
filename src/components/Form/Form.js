import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Paper, Typography } from '@material-ui/core';

import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyle from './styles';
import { createProject, updateProject } from '../../actions/projects';

const Form = ({ currentId, setCurrentId }) => {
  const [projectData, setProjectData] = useState({
    name: '',
    length: '',
    duration: '',
    contractSum: 0,
    description: '',
    location: '',
    engineer: '',
    email: '',
    tage: '',
    selectedFile: '',
  });
  const project = useSelector((state) =>
    currentId ? state.projects.find((p) => p._id === currentId) : null
  );
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    if (project) {
      setProjectData(project);
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProject(currentId, projectData));
    } else {
      dispatch(createProject(projectData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setProjectData({
      name: '',
      length: '',
      duration: '',
      contractSum: 0,
      description: '',
      location: '',
      engineer: '',
      email: '',
      tage: '',
      selectedFile: '',
    });
  };

  return (
    <Paper>
      <Typography variant='h5' align='center'>
        {currentId ? 'EDIT' : 'ADD'} A PROJECT
      </Typography>
      <form
        autoComplete='off'
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item xs={12} md={9}>
            <TextField
              name='name'
              fullWidth
              id='outlined-basic'
              label='Project Name'
              variant='outlined'
              margin='normal'
              value={projectData.name}
              onChange={(e) =>
                setProjectData({ ...projectData, name: e.target.value })
              }
            >
              {' '}
            </TextField>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              name='location'
              fullWidth
              id='outlined-basic'
              label='Project Location'
              variant='outlined'
              margin='normal'
              value={projectData.location}
              onChange={(e) =>
                setProjectData({ ...projectData, location: e.target.value })
              }
            >
              {' '}
            </TextField>
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              name='length'
              className={classes.input}
              sm={12}
              md={6}
              id='outlined-basic'
              label='Road Length'
              variant='outlined'
              value={projectData.length}
              onChange={(e) =>
                setProjectData({ ...projectData, length: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item xs={6} md={4}>
            <TextField
              name='contractSum'
              className={classes.input}
              sm={12}
              md={6}
              id='outlined-basic'
              label='Contract Sum'
              variant='outlined'
              value={projectData.contractSum}
              onChange={(e) =>
                setProjectData({ ...projectData, contractSum: e.target.value })
              }
            ></TextField>
          </Grid>

          <Grid item xs={6} md={4}>
            <TextField
              name='duration'
              style={{ marginRight: 0, width: '100%' }}
              className={classes.input}
              sm={12}
              md={6}
              id='outlined-basic'
              label='Project Duration'
              variant='outlined'
              value={projectData.duration}
              onChange={(e) =>
                setProjectData({ ...projectData, duration: e.target.value })
              }
            ></TextField>
          </Grid>

          <TextField
            name='description'
            fullWidth
            id='outlined-basic'
            label='Project Description'
            variant='outlined'
            margin='normal'
            multiline
            rows={10}
            value={projectData.description}
            onChange={(e) =>
              setProjectData({ ...projectData, description: e.target.value })
            }
          >
            {' '}
          </TextField>

          <Grid item xs={6} md={4}>
            <TextField
              name='engineer'
              className={classes.input}
              sm={12}
              md={6}
              id='outlined-basic'
              label='Project Engineer'
              variant='outlined'
              value={projectData.engineer}
              onChange={(e) =>
                setProjectData({ ...projectData, engineer: e.target.value })
              }
            ></TextField>
          </Grid>

          <Grid item sm={12} md={4}>
            <TextField
              name='email'
              className={classes.input}
              sm={12}
              md={6}
              id='outlined-basic'
              label='Email'
              variant='outlined'
              value={projectData.email}
              onChange={(e) =>
                setProjectData({ ...projectData, email: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className={classes.fileInput}>
              <FileBase
                type='file'
                multiple={false}
                value={projectData.selectedFile}
                onDone={({ base64 }) =>
                  setProjectData({ ...projectData, selectedFile: base64 })
                }
              />
            </div>
          </Grid>

          <Button
            className='classe.buttonSubmit'
            variant='contained'
            color='primary'
            size='large'
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            className='classe.buttonSubmit'
            variant='contained'
            color='secondary'
            size='small'
            fullWidth
            onClick={clear}
          >
            Clear
          </Button>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
