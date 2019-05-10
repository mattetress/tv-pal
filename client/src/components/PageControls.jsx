import React from 'react';
import Button from 'react-bootstrap/Button'
import { nextPage, previousPage } from '../actions/shows';
import {connect} from 'react-redux';



const PageControls = props => {
  return (
    <div className="page-controls center">
      Page {props.currentPage} of {props.totalPages} <br />
      {(props.currentPage > 1) ? <Button onClick={() => previousPage(props.dispatch)} variant="outline-dark" className="mr-1" size="sm">Previous</Button> : null}
      {(props.currentPage < props.totalPages) ? <Button onClick={() => nextPage(props.dispatch)} variant="outline-dark" size="sm" >Next</Button> : null}
    </div>

  )
}

export default connect()(PageControls);