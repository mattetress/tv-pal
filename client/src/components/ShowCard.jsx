import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = props => {
  return (

    <div className={`${props.classes} p-2`} >
      <Link key={props.show.id} to={`/shows/${props.show.id}`} >
        <img alt="show poster" src={`https://image.tmdb.org/t/p/w200${props.show.poster_path}`} />
        <p>{props.show.name}</p>
      </Link>
    </div>

  )
}

export default ShowCard;