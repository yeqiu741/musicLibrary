import React, { Component } from 'react';
import './MyMusic.css';
/* eslint-disable */
export default class MyMusic extends Component {
  render() {
    return (
      <div className="myMusic">
          <div className="myMusic_radio">
            <input type="radio" value="单选" name="radioSelect" checked="checked" />单选
            <input type="radio" value="单选" name="radioSelect" />多选
          </div>
          <div className="myMusic_firstTitle">我的音乐</div>

          <div className="myMusic_secondTitle">推荐音乐</div>

      </div>
    );
  }
}
