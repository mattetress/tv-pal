import React from 'react';
import ShowList from "./ShowList"

const Similar = props => {
  return (
    <>
      <h3 className="mt-4">Similar</h3>
      <div className="border row mt-3" id="similar">
        <ShowList classes="card col-3" shows={props.shows} />
      </div>
    </>
  )
}

export default Similar;