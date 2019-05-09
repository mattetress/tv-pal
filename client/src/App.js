import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';
import Dashboard from './containers/Dashboard'
import PopularContainer from './containers/PopularContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <Landing />} />
          <Route exact path="/signup" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <RegistrationContainer />} />
          <Route exact path="/login" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <LoginContainer />} />
          <Route path="/shows" render={() => (this.props.auth) ? <Dashboard /> : <Redirect to="/" />} />
          <Route exact path="/shows/popular" render={() => <PopularContainer />} />
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user.auth
  }
}

export default connect(mapStateToProps)(App);
