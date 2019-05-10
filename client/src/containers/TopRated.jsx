import React, { Component } from 'react';
import Dashboard from './Dashboard';
import ShowList from '../components/ShowList';
import { fetchTopRated } from '../actions/shows';
import { connect } from 'react-redux';

class TopRated extends Component {

  componentDidMount() {
    fetchTopRated()(this.props.dispatch)
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="container inner overflow-auto">
          <h1>Top Rated</h1>
          <div className="row">
            <ShowList classes="col-3 card" shows={this.props.shows} />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows.topRated.shows
  }
}

export default connect(mapStateToProps)(TopRated);