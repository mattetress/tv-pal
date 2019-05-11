import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { Spring } from 'react-spring/renderprops'


export default class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="bg">
        <Spring
          from={{
            opacity: 0,
            marginTop: "40vh"
          }}
          to={{
            opacity: 1,
            marginTop: "20vh"
          }} >
          {props => (
            <div style={props} className="form">
              <h1>Sign Up</h1>

              <Form onSubmit={event => this.props.handleSubmit(event, this.state)} >
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required name="email" type="email" onChange={this.handleChange} placeholder="Enter email" value={this.state.email} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control required type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation} placeholder="Re-enter password" />
                </Form.Group>

                <Form.Control className="btn btn-primary" type="submit" />
              </Form>
            </div>)
          }
        </Spring>
      </div>
    )
  }
}