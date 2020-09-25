import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export const HomePage = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>HomePage</h1>
      <h3>Goto <Link to='/activities'>Activities</Link></h3>
    </Container>
  );
};