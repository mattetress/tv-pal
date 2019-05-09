import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import ShowMain from '../components/ShowMain'
import { connect } from 'react-redux';
import { fetchShow, fetchSimilar, clearShow } from '../actions/shows';
import Similar from '../components/Similar'

class ShowContainer extends Component {

  componentDidMount() {
    fetchShow(this.props.match.params.id)(this.props.dispatch);
    fetchSimilar(this.props.match.params.id)(this.props.dispatch);
  }

  renderSimilar() {
    if (this.props.similar && this.props.similar.length > 0) {
      return <Similar dispatch={this.props.dispatch} handleClick={this.handleSimilarClick} shows={this.props.similar} />
    }
  }

  render() {
    return (
      <>
        <Dashboard />
        <div className="container inner">
          <div className="row">
            <ShowMain networks={this.props.networks} year={this.props.year} creators={this.props.creators} show={this.props.show} />
          </div>
          <div className="container">
            {this.renderSimilar()}
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
    year: state.shows.show.year,
    similar: state.shows.similar
  }
}

export default connect(mapStateToProps)(ShowContainer);