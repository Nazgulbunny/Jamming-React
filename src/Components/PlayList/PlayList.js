import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './PlayList.css';
import Track from '../Track/Track.js';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
            <div className="Playlist">
                <input value={this.props.title} onChange={this.handleNameChange}/>
                <trackList tracks={this.props.tracks} onRemove={this.props.onRemove} shouldAdd={false}/>
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        )
    }
}

export default Playlist;