import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import RegistrationContainer from './containers/RegistrationContainer';
import LoginContainer from './containers/LoginContainer';
import SearchContainer from './containers/SearchContainer'
import PopularContainer from './containers/PopularContainer';
import ShowContainer from './containers/ShowContainer';
import AiringToday from './containers/AiringToday';
import TopRated from './containers/TopRated';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => (this.props.auth) ? <Redirect to="/shows/popular" /> : <Landing />} />
          <Route exact path="/signup" render={() => (this.props.auth) ? <Redirect to="/shows/popular" /> : <RegistrationContainer />} />
          <Route exact path="/login" render={() => (this.props.auth) ? <Redirect to="/shows/popular" /> : <LoginContainer />} />
          <Route exact path="/shows/search" component={SearchContainer} />
          <Route exact path="/shows/top_rated" render={props => <TopRated {...props} key={this.props.currentPage} />} />
          <Route exact path="/shows/airing_today" render={props => <AiringToday {...props} key={this.props.currentPage} />} />
          <Route exact path="/shows/popular" render={props => <PopularContainer {...props} key={this.props.currentPage} />} />
          <Route exact path="/shows/:id" render={props => <ShowContainer {...props} key={props.match.params.id} />} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user.auth,
    currentPage: state.shows.currentPage
  }
}

export default connect(mapStateToProps)(App);
