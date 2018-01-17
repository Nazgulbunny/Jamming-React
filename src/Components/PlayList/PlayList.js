import React, { Component } from 'react';
import '../trackList/trackList.js';
import './PlayList.css';

class PlayList extends Component{
	render(){
		<div className="Playlist">
		  <input value="New Playlist"/>
		  <!-- Add a TrackList component -->
		  <div className="TrackList">
		  </div>
		  <a class="Playlist-save">SAVE TO SPOTIFY</a>
		</div>
	}
}

export default PlayList;