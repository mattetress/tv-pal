import React from 'react';
import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/Row'

const Nav = () => {
  return (
    <Row className="menu bg-light">
      <div className="col-12 mt-5">
        <NavLink exact to="/shows/favorites" className="btn align-middle menu-link" activeClassName="btn-dark">My Shows</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/popular" className="btn menu-link" activeClassName="btn-dark">Popular</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to='/shows/top_rated' className='btn menu-link' activeClassName="btn-dark">Top Rated</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/airing_today" className="btn menu-link" activeClassName="btn-dark">Airing Today</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/genres" className="btn menu-link" activeClassName="btn-dark">Genres</NavLink>
      </div>
    </Row>
  )
}

export default Nav;