import React from 'react'
import './Track.css'


export function Track(props) {
return <div className="Track">
  <div className="Track-information">
    <h3>{props.track.name} - {props.track.artist}</h3>
    <p></p>
  </div>
  <button className="Track-action"></button>
</div>
}