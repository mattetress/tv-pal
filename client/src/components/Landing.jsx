import React from 'react';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <Container>
      <h1>TV Pal</h1>
      <p>Please <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
    </Container>
  )
}

