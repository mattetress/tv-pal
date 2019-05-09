import React from 'react';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import "../Landing.css";

export default function Landing() {
  return (
    <div className="bg">
      <Container>
        <div className="logo">
          <h1>TV Pal</h1>
          <p>Please <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link></p>
        </div>
        <footer>Photo by Pablo García Saldaña on Unsplash</footer>
      </Container>
    </div>
  )
}

