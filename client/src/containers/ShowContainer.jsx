import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import ShowMain from '../components/ShowMain'
import { connect } from 'react-redux';
import { fetchShow } from '../actions/shows';

class ShowContainer extends Component {

  componentDidMount() {
    fetchShow(this.props.match.params.id)(this.props.dispatch);
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="container inner">
          <div className="row">
            <ShowMain />
          </div>
        </div>
      </>
    )
  }
}

export default connect()(ShowContainer);