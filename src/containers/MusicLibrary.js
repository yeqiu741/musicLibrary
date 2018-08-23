import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TabsControl from '../components/TabsContainer/TabsContainer';
import '../App.css';
import MyMusic from '../components/MyMusic/MyMusic';
import * as Actioncreators from '../actions/index';
import UploadMusic from '../components/UploadMusic/UploadMusic';

/* eslint-disable */
const iconReturn = require('../img/return.png')
const iconMymusic_do = require('../img/musicLiarbry_do.png')
const iconMymusic = require('../img/musicLibrary.png')
const iconSerachmusic = require('../img/serach.png')
const iconSerachmusic_do = require('../img/serach_do.png')
const iconUploadmusic = require('../img/upload.png')
const iconUploadmusic_do = require('../img/upload_do.png')
class MusicLibrary extends Component {
  handleMyMusicPictureChangeClick = (photoState) => {
    if(photoState.currentIndex === 0){
      return iconMymusic_do
    }return iconMymusic
  }
  handleSerachMusicPictureChangeClick = (photoState) => {
    if(photoState.currentIndex === 1){
      return iconSerachmusic_do
    }return iconSerachmusic
  }
  handleUploadMusicChangeClick = (photoState) => {
    if(photoState.currentIndex === 2){
      return iconUploadmusic_do
    }return iconUploadmusic
  }
  render() {
    const { photoState, actions } = this.props;
    console.log(actions)
    return (
      <div className="container">
        <div className="container_TopTitle">
          <div className="container_TopTitle_icon"><img src={iconReturn} alt="图片加载失败！" /></div>
          <div className="container_topTitle_title">曲库</div>
        </div>
        <TabsControl actions={actions} photoState={photoState}>
          <div name="我的音乐" icon={this.handleMyMusicPictureChangeClick(photoState)} ><MyMusic /></div>
          <div name="搜索音乐" icon={this.handleSerachMusicPictureChangeClick(photoState)}>tabs2</div>
          <div name="上传音乐" icon={this.handleUploadMusicChangeClick(photoState)}><UploadMusic /></div>
        </TabsControl>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { photoState } = state;
  return {photoState}
};
const mapDispatchToProps = dispatch => ({ actions:bindActionCreators(Actioncreators, dispatch)})
export default connect(mapStateToProps,mapDispatchToProps)(MusicLibrary)