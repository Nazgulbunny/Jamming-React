import React, { Component } from 'react';
import './TrackList.css';
import '../Track/Track.js';

class TrackList extends Component{
	render(){
       <div className="TrackList">
		    <!-- You will add a map method that renders a set of Track components  -->
		    {this.props.tracks.map(track =><Track key = {track.id} track={track} onAdd={this.props.onAdd}/>)}
		</div>
	}
}

export default TrackList;