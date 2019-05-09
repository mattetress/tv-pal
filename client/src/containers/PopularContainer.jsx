import React, { Component } from 'react';
import { fetchPopular } from '../actions/shows';
import { connect } from 'react-redux'
import ShowList from '../components/ShowList'
import Dashboard from './Dashboard'



class PopularContainer extends Component {

  componentDidMount() {
    fetchPopular()(this.props.dispatch);
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="inner container overflow-auto">
          <h3>Popular Shows</h3>
          <ShowList shows={this.props.shows} />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows.popular.shows,
    currentPage: state.shows.popular.currentPage,
    totalPages: state.shows.popular.totalPages
  }
}

export default connect(mapStateToProps)(PopularContainer);