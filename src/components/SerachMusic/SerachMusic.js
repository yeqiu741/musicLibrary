import React, { Component } from 'react';
import './SerachMusic.css';
/* eslint-disable */
const icon = require('../../img/serach.png')
export default class SerachMusic extends Component{
  render(){

    return(
      <div className="serachMusic">
        <div className="serachMusic_serach">
          <div><img src={icon} /></div>
          <input type="text" />
          <button>搜索</button>
        </div>
        <div></div>
        <p>每天限存5首音乐，建议您试听后保存</p>
        <div></div>
      </div>
    )
  }
}