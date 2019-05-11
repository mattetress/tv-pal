import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { fetchToday } from '../actions/shows';
import { connect } from 'react-redux';
import ShowList from '../components/ShowList'
import PageControls from '../components/PageControls';

class AiringToday extends Component {

  componentDidMount() {
    fetchToday(this.props.currentPage)(this.props.dispatch)
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="inner container overflow-auto">
          <h1>Airing Today</h1>
          <div className="row">
            <ShowList classes="card col-3" shows={this.props.shows} />
            <PageControls currentPage={this.props.currentPage} totalPages={this.props.totalPages} />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows.today.shows,
    currentPage: state.shows.currentPage,
    totalPages: state.shows.totalPages
  }
}

export default connect(mapStateToProps)(AiringToday);