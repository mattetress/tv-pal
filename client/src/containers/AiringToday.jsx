import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { fetchToday } from '../actions/shows';
import { connect } from 'react-redux';
import ShowList from '../components/ShowList'

class AiringToday extends Component {

  componentDidMount() {
    fetchToday()(this.props.dispatch)
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="inner container overflow-auto">
          <h1>Airing Today</h1>
          <div className="row">
            <ShowList classes="card col-3" shows={this.props.shows} />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows.today.shows
  }
}

export default connect(mapStateToProps)(AiringToday);