import React from 'react';
import { NavLink } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import { resetPage } from '../actions/shows';
import { connect } from 'react-redux';

const Nav = props => {
  return (
    <Row className="menu bg-light">
      <div className="col-12 mt-4">
        <NavLink exact to="/shows/popular" onClick={() => resetPage(props.dispatch)} className="btn menu-link" activeClassName="btn-dark">Popular</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to='/shows/top_rated' onClick={() => resetPage(props.dispatch)} className='btn menu-link' activeClassName="btn-dark">Top Rated</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/airing_today" onClick={() => resetPage(props.dispatch)} className="btn menu-link" activeClassName="btn-dark">Airing Today</NavLink>
      </div>
      <div className="col-12">
        <NavLink exact to="/shows/search" onClick={() => resetPage(props.dispatch)} className="btn menu-link" activeClassName="btn-dark">Search</NavLink>
      </div>

    </Row>
  )
}



export default connect()(Nav);
