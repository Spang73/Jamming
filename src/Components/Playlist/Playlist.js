import React from 'react'
import './Components/Playlist/Playlist.css'
export function Playlist(props) {
    return <div className="Playlist">
  <input value="New Playlist"/>
  {/* <!-- Add a TrackList component --> */}
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
}