import React from 'react';
import 'antd/dist/antd.css';
import MusicLibrary from './containers/MusicLibrary';
/* eslint-disable */
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <MusicLibrary />
      </div>
    );
  }
}
