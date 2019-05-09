import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import { fetchPopular } from '../actions/shows';
import { connect } from 'react-redux'


class PopularContainer extends Component {

  componentDidMount() {
    fetchPopular()(this.props.dispatch);
  }

  render() {
    return (
      <div className="inner">
        <h3>Popular Shows</h3>
        <Row>
          shows
        </Row>
      </div>
    )
  }
}

export default connect()(PopularContainer);