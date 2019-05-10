import React, { Component } from 'react';
import { fetchPopular, resetPage } from '../actions/shows';
import { connect } from 'react-redux'
import ShowList from '../components/ShowList'
import Dashboard from './Dashboard'
import PageControls from '../components/PageControls';



class PopularContainer extends Component {

  componentDidMount() {
    fetchPopular()(this.props.dispatch);
  }

  render() {
    return (
      <>
        <Dashboard />
        <PageControls currentPage={this.props.currentPage} totalPages={this.props.totalPages} />
        <div className="inner container overflow-auto">
          <h1>Popular Shows</h1>
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
    shows: state.shows.popular.shows,
    currentPage: state.shows.currentPage,
    totalPages: state.shows.totalPages
  }
}

export default connect(mapStateToProps)(PopularContainer);