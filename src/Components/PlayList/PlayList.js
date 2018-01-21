import React, { Component } from 'react';
import '../TrackList/TrackList.js';
import './PlayList.css';

class PlayList extends Component{
	render(){
		<div className="Playlist">
		this.playlistName = this.state.playlistName;
		 this.playlistTracks = this.state.playlistTracks;
		
		  <input value="New Playlist"/>
		  <!-- Add a TrackList component -->
		  <div className="TrackList">
		  this.tracks = this.props.playlistTracks;
		  </div>
		  <a class="Playlist-save">SAVE TO SPOTIFY</a>
		</div>
	}
}

export default PlayList;