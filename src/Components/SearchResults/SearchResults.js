import React, { Component } from 'react';
import '../TrackList/TrackList.js';
import './SearchResults.css';

class SearchResults extends Component{
	render(){
         <div className="SearchResults">
		  <h2>Results</h2>
		  <!-- Add a TrackList component -->
		  <div className ="TrackList">
		  </div>
		</div>
	}
}

export default SearchResults;