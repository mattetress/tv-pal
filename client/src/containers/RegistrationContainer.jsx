import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import RegistrationForm from '../components/RegistrationForm'
import { connect } from 'react-redux';
import { authenticateUser, displayError, dismissErrors } from '../actions/users'
import Alert from 'react-bootstrap/Alert'

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
        if (res.errors) {
          this.props.displayErrors(res)
        } else {
          this.props.registrationDone(res);
        }
      })
  }

  renderErrors() {
    return (
      <div>
        {this.props.errors.map((error, index) => {
          return <Alert dismissible key={index} variant="danger" >{error}</Alert>
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
        <Container>
          <RegistrationForm handleSubmit={this.handleSubmit} />
        </Container>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registrationDone: response => dispatch(authenticateUser(response)),
    displayErrors: response => dispatch(displayError(response)),
    dismissErrors: () => dispatch(dismissErrors())
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);