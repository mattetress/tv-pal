import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import RegistrationContainer from './containers/RegistrationContainer'
import { Container } from 'react-bootstrap/Container'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={RegistrationContainer} />
        </>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);
