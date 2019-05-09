import React, { Component } from 'react';
import ShowCard from './ShowCard'


class ShowList extends Component {

  renderShows() {
    return (
      <React.Fragment>
        {this.props.shows.map((show, index) => {
          return (
            <ShowCard classes={this.props.classes} key={index} show={show} />
          )
        })}
      </React.Fragment>
    )
  }

  render() {
    return (
      <>
        {this.renderShows()}
      </>
    )
  }
}

export default ShowList;