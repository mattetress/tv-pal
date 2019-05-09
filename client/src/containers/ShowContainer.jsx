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
            <ShowMain networks={this.props.networks} year={this.props.year} creators={this.props.creators} show={this.props.show} />
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    show: state.shows.show.showInfo,
    networks: state.shows.show.networks,
    creators: state.shows.show.creators,
    year: state.shows.show.year
  }
}

export default connect(mapStateToProps)(ShowContainer);