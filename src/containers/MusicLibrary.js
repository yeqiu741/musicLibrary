import React, { Component } from 'react';
import TabsControl from '../components/TabsContainer/TabsContainer';
import '../App.css';
import MyMusic from '../components/MyMusic/MyMusic';
/* eslint-disable */
const iconReturn = require('../img/return.png')
const iconMymusic = require('../img/musicLiarbry_do.png')
const iconSerachmusic = require('../img/serach.png')
const iconUploadmusic = require('../img/upload.png')
export default class MusicLibrary extends Component {
  render() {
    return (
      <div className="container">
        <div className="container_TopTitle">
          <div className="container_TopTitle_icon"><img src={iconReturn} alt="图片加载失败！" /><span>我</span></div>
          <div className="container_topTitle_title">曲库</div>
        </div>
        <TabsControl>
          <div name="我的音乐" icon={iconMymusic}><MyMusic /></div>
          <div name="搜索音乐" icon={iconSerachmusic}>tabs2</div>
          <div name="上传音乐" icon={iconUploadmusic}>tabs3</div>
        </TabsControl>
      </div>
    );
  }
}

