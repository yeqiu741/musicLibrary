import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TabsControl from '../components/TabsContainer/TabsContainer';
import MyMusic from '../components/MyMusic/MyMusic';
import * as Actioncreators from '../actions/index';
import UploadMusic from '../components/UploadMusic/UploadMusic';
import SerachMusic from '../components/SerachMusic/SerachMusic';
import '../App.css';
import PlayPage from '../components/PlayPage/PlayPage';


const iconReturn = require('../img/return.png');
const iconMymusic_do = require('../img/musicLiarbry_do.png');
const iconMymusic = require('../img/musicLibrary.png');
const iconSerachmusic = require('../img/serach.png');
const iconSerachmusic_do = require('../img/serach_do.png');
const iconUploadmusic = require('../img/upload.png');
const iconUploadmusic_do = require('../img/upload_do.png');

class MusicLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicId: -1
    };
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.login(110);
    actions.getMyMusic('test87213');
    actions.getRecommendMusic('test87213');
  }
  handleMyMusicPictureChangeClick = photoState => {
    if (photoState.currentIndex === 0) {
      return iconMymusic_do;
    } return iconMymusic;
  }
  handleSerachMusicPictureChangeClick = photoState => {
    if (photoState.currentIndex === 1) {
      return iconSerachmusic_do;
    } return iconSerachmusic;
  }
  handleUploadMusicChangeClick = photoState => {
    if (photoState.currentIndex === 2) {
      return iconUploadmusic_do;
    } return iconUploadmusic;
  }
  /* eslint-disable no-alert */
  handleGoBackClick = () => {
    window.alert('go back');
  }
  callBackMusicBoxId = index => {
    this.setState({
      musicId: index
    });
  }
  render() {
    const {
      photoState, actions, login, entities, myMusic, recommendMusic
    } = this.props;
    return (
      <div className="container">
        <div className="container_TopTitle">
          <img src={iconReturn} alt="图片加载失败！" /><span>{login.nick}</span>
        </div>
        <TabsControl actions={actions} photoState={photoState}>
          <div name="我的音乐" icon={this.handleMyMusicPictureChangeClick(photoState)} ><MyMusic actions={actions} entities={entities} myMusic={myMusic} recommendMusic={recommendMusic} callBackId={this.callBackMusicBoxId} /></div>
          <div name="搜索音乐" icon={this.handleSerachMusicPictureChangeClick(photoState)}><SerachMusic /></div>
          <div name="上传音乐" icon={this.handleUploadMusicChangeClick(photoState)}><UploadMusic /></div>
        </TabsControl>
        <PlayPage entities={entities} musicId={this.state.musicId} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {
    photoState, login, entities, myMusic, recommendMusic
  } = state;
  return {
    photoState, login, entities, myMusic, recommendMusic
  };
};
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actioncreators, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MusicLibrary);
