import React, { Component } from 'react';
import Dashboard from './Dashboard';
import ShowList from '../components/ShowList';
import { fetchTopRated, resetPage } from '../actions/shows';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PageControls from '../components/PageControls';

class TopRated extends Component {

  componentDidMount() {
    fetchTopRated(this.props.currentPage)(this.props.dispatch)
  }

  render() {
    return (
      <>
        <Dashboard />
        <PageControls currentPage={this.props.currentPage} totalPages={this.props.totalPages} nextPage={this.props.nextPage} previousPage={this.props.previousPage} />
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
    shows: state.shows.topRated.shows,
    currentPage: state.shows.currentPage,
    totalPages: state.shows.totalPages
  }
}

export default connect(mapStateToProps)(TopRated);