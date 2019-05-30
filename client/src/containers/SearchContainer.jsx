import React, { Component } from 'react';
import Dashboard from './Dashboard';
import SearchForm from '../components/SearchForm'
import { connect } from 'react-redux';
import { submitSearch } from '../actions/shows';
import ShowList from '../components/ShowList'

class SearchContainer extends Component {

  handleSubmit = query => {
    submitSearch(query)(this.props.dispatch);
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="container inner overflow-auto">
          <SearchForm handleSubmit={this.handleSubmit} />
          <div className="row mt-5">
          <ShowList classes="col-m-3 card" shows={this.props.shows} />
        </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    shows: state.shows.search.results
  }
}

export default connect(mapStateToProps)(SearchContainer);
