import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={RegistrationContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </React.Fragment>
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
