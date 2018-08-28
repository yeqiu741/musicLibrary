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
import ReNamePage from '../components/ReNamePage/ReNamePage';

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
      musicId: 0,
      isShowPlayPage: false,
      isShowReNamePage: false,
      beFouceMusicName: ' ',
      addMusicIdToDelete: []
    };
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.login(110);
    actions.getMyMusic('test87213');
    actions.getRecommendMusic('test87213');
  }
  getMusicIdArray = () => this.state.addMusicIdToDelete;
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

  handleGoBackClick = () => {
    window.alert('go back');
  }
  callBackMusicBoxId = index => {
    this.setState({
      musicId: index
    });
    console.log(index);
  }
  handlePlayPageShowState = () => {
    this.setState({
      isShowPlayPage: !this.state.isShowPlayPage
    });
  }
  handleReNameShowState = () => {
    this.setState({
      isShowReNamePage: !this.state.isShowReNamePage
    });
  }
  updataBeFouceMusicName = name => {
    this.setState({
      beFouceMusicName: name
    });
  }
  handleGoBackIconClick = () => {
    window.alert('goBack');
  }
  callBcakAddMusicIdToDeleteId = index => {
    if (this.state.addMusicIdToDelete.length === 0) {
      this.state.addMusicIdToDelete.push(index);
    } else if (this.state.addMusicIdToDelete.length === 5) {
      const arr = this.state.addMusicIdToDelete.slice();
      const arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (index === arr[i]) {
          arr2.push(i);
        }
      }
      if (arr2.length !== 0) {
        for (let i = 0; i < arr2.length; i++) {
          arr.splice(arr2[i], 1);
        }
      }
      this.state.addMusicIdToDelete = arr;
      if (arr.length === 5) {
        window.alert('最多只能选择5首音乐！');
      }
    } else {
      const arr = this.state.addMusicIdToDelete.slice();
      const arr2 = [];
      for (let i = 0; i < arr.length; i++) {
        if (index === arr[i]) {
          arr2.push(i);
        }
      }
      if (arr2.length === 0) {
        arr.push(index);
      } else {
        for (let i = 0; i < arr2.length; i++) {
          arr.splice(arr2[i], 1);
        }
      }
      this.state.addMusicIdToDelete = arr;
    }
  }
  handleShowBeSeletedMusicIdClick = () => {
    window.alert(`您已选中序号为： ${this.state.addMusicIdToDelete} 的歌`);
  }
  handleMusicPlayCallBack = () => {
    const { entities, myMusic, recommendMusic } = this.props;
    if (this.state.musicId > myMusic.length) {
      console.log(entities.recommendMusicData[recommendMusic[this.state.musicId - myMusic.length]].m_url);
      return entities.recommendMusicData[recommendMusic[this.state.musicId - myMusic.length]].m_url;
    }
    return entities.myMusicData[myMusic[this.state.musicId]].m_url;
  }
  render() {
    const {
      photoState, actions, login, entities, myMusic, recommendMusic
    } = this.props;
    return (
      <div className="container">
        <div className="container_TopTitle">
          <img onClick={this.handleGoBackIconClick} src={iconReturn} alt="图片加载失败！" /><span>{login.userName}</span><span className="over" onClick={this.handleShowBeSeletedMusicIdClick}>完成</span>
        </div>
        <TabsControl actions={actions} photoState={photoState}>
          <div name="我的音乐" icon={this.handleMyMusicPictureChangeClick(photoState)} ><MyMusic callBcakAddMusicIdToDeleteId={this.callBcakAddMusicIdToDeleteId} actions={actions} entities={entities} myMusic={myMusic} recommendMusic={recommendMusic} callBackId={this.callBackMusicBoxId} showPlayPage={this.handlePlayPageShowState} handleReNameShowState={this.handleReNameShowState} updataBeFouceMusicName={this.updataBeFouceMusicName} addMusicIdToDelete={this.getMusicIdArray()} /></div>
          <div name="搜索音乐" icon={this.handleSerachMusicPictureChangeClick(photoState)}><SerachMusic /></div>
          <div name="上传音乐" icon={this.handleUploadMusicChangeClick(photoState)}><UploadMusic /></div>
        </TabsControl>
        <PlayPage isShowPlayPage={this.state.isShowPlayPage} cancle={this.handlePlayPageShowState} handleMusicPlayCallBack={this.handleMusicPlayCallBack} />
        <ReNamePage actions={actions} entities={entities} myMusic={myMusic} musicId={this.state.musicId} isShowReNamePage={this.state.isShowReNamePage} handleReNameShowState={this.handleReNameShowState} musicName={this.state.beFouceMusicName} musicInEntitiesMyMusicId={myMusic[this.state.musicId]} />
      </div>
    );
  }
}
const mapStateToProps = ({
  photoState, login, entities, myMusic, recommendMusic
}) => ({
  photoState, login, entities, myMusic, recommendMusic
});
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(Actioncreators, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(MusicLibrary);
