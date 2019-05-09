import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Auth from '../modules/Auth'
import { connect } from 'react-redux';
import { endSession } from '../actions/users'

class Header extends Component {

  handleClick = () => {
    console.log("RETURN VALUE:", Auth.getToken())
    fetch("/api/logout", {
      method: "delete",
      headers: {
        'Content-Type': 'application/json',
        'token': Auth.getToken()
      }
    }).then(() => this.props.logout());
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/television.png"
              width="32"
              height="32"
              className="d-inline-block align-top mr-2"
            />
            {'TV Pal'}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={this.handleClick}>Log Out</Nav.Link>
          </Nav>
        </Navbar>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(endSession())
  }
}

export default connect(null, mapDispatchToProps)(Header);