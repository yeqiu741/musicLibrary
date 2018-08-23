import React, { Component } from 'react';
import './MyMusic.css';
/* eslint-disable */
const iconPlay = require('../../img/button_new_play_gray.png')
const iconRename = require('../../img/button_rename_gray.png')
const iconCut = require('../../img/button_cut_gray.png')
const iconShare = require('../../img/button_share_gray.png')
const iconDelete = require('../../img/delete.png')
export default class MyMusic extends Component {
  render() {
    return (
      <div className="myMusic">
          <div className="myMusic_radio">
            <input type="radio" value="单选" name="radioSelect"  />&nbsp;&nbsp;单选
            <input type="radio" value="单选" name="radioSelect" />&nbsp;&nbsp;多选
          </div>
          <div className="myMusic_firstTitle">我的音乐</div>
          <div>
            {}
          </div>
          <div className="myMusic_secondTitle">推荐音乐</div>
          <div>
            {}
          </div>
          <div className="myMusic_bottomButton">
            <div><img src={iconPlay} alt="图片加载失败!"/><p>播放</p></div>
            <div><img src={iconRename} alt="图片加载失败!" /><p>重命名</p></div>
            <div><img src={iconCut} alt="图片加载失败!" /><p>选择片段</p></div>
            <div><img src={iconShare} alt="图片加载失败!" /><p>送给朋友</p></div>
            <div><img src={iconDelete} alt="图片加载失败!" /><p>删除</p></div>
          </div>
      </div>
    );
  }
}
