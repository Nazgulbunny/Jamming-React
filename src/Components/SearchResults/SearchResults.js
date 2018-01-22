import React from 'react';
import '../TrackList/TrackList.js';
import './SearchResults.css';

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <trackList tracks={this.props.searchResults} onAdd={this.props.onAdd} shouldAdd={true}/>
            </div>
        )
    }
}

export default SearchResults;