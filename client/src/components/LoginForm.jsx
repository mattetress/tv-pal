import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Log In</h3>
        <Form onSubmit={event => this.props.handleSubmit(event, this.state)} >
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email" value={this.state.email} required="true" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" required="true" />
          </Form.Group>

          <Form.Control type="submit" className="btn btn-primary" value="Log In" />
        </Form>
      </div>
    )

  }
}

export default LoginForm;