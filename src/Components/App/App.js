// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { SearchResults } from '../SearchResults/SearchResults';

function App(props) {
  const [searchResults, setSearchResults] = useState([{
    name: 'abcds ',
    artist: 'dsa',
    album: 'sda',
    id: '1234'
  }, {
    name: ' asd',
    artist: 'asf',
    album: 'dfg',
    id: ''
  }]);

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <div className="App-playlist">
          
          <SearchResults searchResults={searchResults} />
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
