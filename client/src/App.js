import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';
import Dashboard from './containers/Dashboard'
import PopularContainer from './containers/PopularContainer';
import ShowContainer from './containers/ShowContainer';
import AiringToday from './containers/AiringToday';
import TopRated from './containers/TopRated';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <Landing />} />
          <Route exact path="/signup" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <RegistrationContainer />} />
          <Route exact path="/login" render={() => (this.props.auth) ? <Redirect to="/shows/favorites" /> : <LoginContainer />} />
          <Route exact path="/shows/favorites" />
          <Route exact path="/shows/top_rated" component={TopRated} />
          <Route exact path="/shows/airing_today" component={AiringToday} />
          <Route exact path="/shows/popular" component={PopularContainer} />
          <Route exact path="/shows/:id" render={props => <ShowContainer {...props} key={props.match.params.id} />} />
        </Switch>
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
