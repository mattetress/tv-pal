import React from 'react';
import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import { resetPage } from '../actions/shows';

const Nav = () => {
  return (
    <Row className="menu bg-light">
      <div className="col-12 mt-5">
        <NavLink exact to="/shows/favorites" onClick={() => resetPage()} className="btn align-middle menu-link" activeClassName="btn-dark">My Shows</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/popular" onClick={() => resetPage()} className="btn menu-link" activeClassName="btn-dark">Popular</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to='/shows/top_rated' onClick={() => resetPage()} className='btn menu-link' activeClassName="btn-dark">Top Rated</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/airing_today" onClick={() => resetPage()} className="btn menu-link" activeClassName="btn-dark">Airing Today</NavLink>
      </div>
    </Row>
  )
}

export default Nav;