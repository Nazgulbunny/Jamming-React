import React, { Component } from 'react';
import '../TrackList/TrackList.js';
import './SearchResults.css';

class SearchResults extends Component{
	render(){
         return
         <div className="SearchResults">
		  <h2>Results</h2>

		  <trackList tracks = {this.props.searchResults} onAdd={this.props.onAdd}/>
		</div>
	}
}

export default SearchResults;