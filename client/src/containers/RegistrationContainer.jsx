import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import RegistrationForm from '../components/RegistrationForm'
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/users'
import Auth from '../modules/Auth'

class RegistrationContainer extends Component {

  handleSubmit = (event, data) => {
    event.preventDefault();
    fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({ user: data }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => {
        Auth.authenticateToken(res);
        this.props.registrationDone(res);
      })
  }

  render() {
    return (
      <div>
        <Container>
          <RegistrationForm handleSubmit={this.handleSubmit} />
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registrationDone: response => dispatch(authenticateUser(response))
  }
}

export default connect(null, mapDispatchToProps)(RegistrationContainer);