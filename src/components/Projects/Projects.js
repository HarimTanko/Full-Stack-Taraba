import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project/Project';

const Projects = () => {
  const projects = useSelector((state) => state.projects);

  console.log(projects);
  return (
    <>
      <h1>Projects</h1>
      <Project />
    </>
  );
};

export default Projects;
