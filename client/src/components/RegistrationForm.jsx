import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  // handleEmail = e => {
  //   this.setState({
  //     ...this.state,
  //     email: e.target.value
  //   })
  // }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Sign Up</h1>

        <Form onSubmit={event => this.props.handleSubmit(event, this.state)} >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email" value={this.state.email} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation} placeholder="Re-enter password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>;
      </>
    )
  }
}