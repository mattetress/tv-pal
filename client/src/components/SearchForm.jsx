import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  }


  render() {
    return (
      <Form className="search-form" onSubmit={this.handleSubmit}>
        <Form.Control onChange={this.handleChange} type="text" placeholder="Search" name="query" value={this.state.query} />
      </Form>
    )
  }
}