import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

class ShowMain extends Component {


  renderNetworks() {
    return (
      <React.Fragment>
        {this.props.networks.map((network, index) => {
          return (
            <img alt="" className="mr-2" src={`https://image.tmdb.org/t/p/w45${network.logo_path}`} key={index} />
          )
        })}
      </React.Fragment>
    )
  }


  render() {
    return (
      <>
        <Card className="bg-dark text-white overflow-auto">
          <Card.Img className="card-img" src={`https://image.tmdb.org/t/p/w1280${this.props.show.backdrop_path}`} alt="Card image" />
          <Card.ImgOverlay className="overlay">
            <div className="poster">
              <img alt="" src={`https://image.tmdb.org/t/p/w185${this.props.show.poster_path}`} />
            </div>
            <div className="show-info">
              <Card.Title><h1>{this.props.show.name} {`(${this.props.year})`}</h1></Card.Title>

              <h4> Overview </h4>
              <p>{this.props.show.overview}</p>

              <h4>Creators</h4>
              <p>{this.props.creators.map((creator, index) => {
                return creator.name
              }).join(", ")}</p>

              <h4>Average Score</h4>
              <p> {this.props.show.vote_average} / 10 </p>

            </div>
          </Card.ImgOverlay>
        </Card>
        <div className="container mt-2">
          <div className="row">
            <div className="col-2">
              <h4>Networks</h4>
              {this.renderNetworks()}
            </div>
            <div className="col-2">
              <h4>Original Name</h4>
              {this.props.show.original_name}
            </div>
            <div className="col-2">
              <h4>First Aired</h4>
              {this.props.show.first_air_date}
            </div>
            <div className="col-2">
              <h4>Last Aired</h4>
              {this.props.show.last_air_date}
            </div>
            <div className="col-2">
              <h4>Status</h4>
              {this.props.show.status}
            </div>
            <div className="col-">
              <div className="mt-1">
                <strong>Seasons: </strong>
                {this.props.show.number_of_seasons}<br />
                <strong>Episodes: </strong>
                {this.props.show.number_of_episodes}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ShowMain;