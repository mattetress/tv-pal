import React, { Component } from 'react';
import Dashboard from './Dashboard';
import ShowList from '../components/ShowList';

class TopRated extends Component {
  render() {
    return (
      <>
        <Dashboard />
        <div className="container inner overflow-auto">
          <h1>Top Rated</h1>
          <div className="row">
            <ShowList />
          </div>
        </div>
      </>
    )
  }
}

export default TopRated;