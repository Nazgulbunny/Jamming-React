import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchResults:[{name}, {artist},{album}]
    };

    this.SearchResults=this.state.searchResults(searchResults);
    this.addTrack = this.addTrack.bind(this);
  }


   addTrack(track){
    if (track.id === playListTracks) {
       return
    }else{
      playlistTracks.push(track)
    }
      this.setState(thisState);
   }

  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <!-- Add a SearchBar component -->
            <div className="SearchBar"> 
            </div>
            <div className="App-playlist">
              <!-- Add a SearchResults component -->
              <div className = "SearchResults"> 
              </div>
              <!-- Add a Playlist component -->
              <div className ="Playlist">
              {
                playlistName = " test string";
                playListTracks = [{
                  name:  ,
                  artist:  ,
                  album:
                }]
              }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
