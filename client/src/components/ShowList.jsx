import React, { Component } from 'react';
import ShowCard from './ShowCard'


class ShowList extends Component {

  renderShows() {
    return (
      <React.Fragment>
        {this.props.shows.map((show, index) => {
          return (
            <ShowCard key={index} show={show} />
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="row">
        {this.renderShows()}
      </div>
    )
  }
}

export default ShowList;