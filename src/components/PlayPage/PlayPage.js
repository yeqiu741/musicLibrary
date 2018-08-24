import React, { Component } from 'react';
import './PlayPage.css';

export default class PlayPage extends Component {
  render() {
    const { entities, musicId } = this.props;
    console.log(musicId)
    return (
      <div className="playPage">
        <div className="playPage_supernatant">
          {/* <p> {entities.myMusic[musicId].name}</p> */}
          <audio src={entities.myMusic[musicId].m_url} controls="controls" autoPlay="autoPlay" />
        </div>
      </div>
    );
  }
}
