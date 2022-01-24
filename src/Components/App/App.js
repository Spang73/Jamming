// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { SearchResults } from '../SearchResults/SearchResults';


function App(props) {
  const tracks = [{
    name: 'abcds ',
    artist: 'dsa',
    album: 'sda',
    id: '1234'
  }, {
    name: ' asd',
    artist: 'asf',
    album: 'dfg',
    id: '4'
  },
  {
    name: ' asd4',
    artist: 'asf4',
    album: 'dfg4',
    id: '44'
  }]
  const [searchResults, setSearchResults] = useState(tracks);
  const [playlistName, setPlaylistName] = useState('sting')
  const [playlistTracks, setPlaylistTracks] = useState([
    tracks[1],
    tracks[0]
  ]);

  /*-
  - Accepts a track argument
- Use the track’s id property to check if the current song is in the playlistTracks state.
- If the id is new, add the song to the end of the playlist.
Set the new state of the playlist */

  function addTrack(track) {
    if (!playlistTracks.some(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track])
    }
  };

function removeTrack(track){

};
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <div className="App-playlist">

          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
