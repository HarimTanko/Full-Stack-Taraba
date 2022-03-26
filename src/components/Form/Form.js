import React, { useState } from 'react';
import { Grid, TextField, Button, Paper, Typography } from '@material-ui/core';

import useStyle from './styles';

const Form = () => {
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
  const classes = useStyle();

  const handleSubmit = () => {
    //submit form
  };

  return (
    <Paper>
      <Typography variant='h4' align='center'>
        ADD A PROJECT
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
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
