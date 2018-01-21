import React, { Component } from 'react';
import '../TrackList/TrackList.js';
import './SearchResults.css';

class SearchResults extends Component{
	render(){

         <div className="SearchResults">
		  <h2>Results</h2>
		  <!-- Add a TrackList component -->
		  <TrackList tracks = {this.props.searchResults} onAdd={this.props.onAdd}/>
		</div>
	}
}

export default SearchResults;