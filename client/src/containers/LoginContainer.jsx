import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { authenticateUser, displayError, dismissErrors } from '../actions/users';
import Alert from 'react-bootstrap/Alert'

class LoginContainer extends Component {

  handleSubmit = (event, data) => {
    event.preventDefault();
    fetch("/api/login", {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        if (res.errors) {
          this.props.error(res)
        } else {
          this.props.login(res)
        }
      }).catch(err => console.log(err))
  }

  renderErrors() {
    return (
      <div onClick={this.props.dismissErrors}>
        {
          this.props.errors.map((error, index) => {
            return (
              <Alert dismissible key={index} variant="danger">
                {error.detail}
              </Alert>
            )
          })
        }
      </div>
    )
  }

  render() {
    return (

      < Container >
        {this.renderErrors()}
        <LoginForm handleSubmit={this.handleSubmit} />
      </Container >
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: response => dispatch(authenticateUser(response)),
    error: response => dispatch(displayError(response)),
    dismissErrors: () => dispatch(dismissErrors())
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.errors
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);