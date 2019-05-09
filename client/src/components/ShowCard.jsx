import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = props => {
  return (

    <div className="col-3 p-2 card" >
      <Link to={`/shows/${props.show.id}`} >
        <div className="">
          <img src={`https://image.tmdb.org/t/p/w200${props.show.poster_path}`} />
          <p>{props.show.name}</p>
        </div>
      </Link>
    </div>

  )
}

export default ShowCard;