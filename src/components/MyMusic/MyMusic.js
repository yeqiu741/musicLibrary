import React, { Component } from 'react';
import './MyMusic.css';

const iconPlay = require('../../img/button_new_play_gray.png');
const iconPlay_do = require('../../img/button_new_play.png');
const iconRename = require('../../img/button_rename_gray.png');
const iconRename_do = require('../../img/button_rename_red.png');
const iconCut = require('../../img/button_cut_gray.png');
const iconCut_do = require('../../img/button_cut.png');
const iconShare = require('../../img/button_share_gray.png');
const iconShare_do = require('../../img/button_share.png');
const iconDelete = require('../../img/delete.png');
const iconDelete_do = require('../../img/button_delete.png');
const iconRightPoint = require('../../img/select_music.png');

export default class MyMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      musicBoxId: -1,
      addMusicId: []
    };
  }
  handleOneSelectRadio = () => {
    this.setState({
      selected: 1
    });
  }
  handleManySelectRadio = () => {
    this.setState({
      selected: 2
    });
  }
  handleMusicBoxState = index => {
    if (this.state.musicBoxId === index) {
      return 'selectIconBox';
    }
    return 'hidden';
  }
  changeRandomMusicState = () => {
    if (this.state.selected === 2) {
      return 'hidden';
    } return 'musicListBox';
  }
  changePlayIconState = () => {
    if (this.state.musicBoxId !== -1 && this.state.selected !== 2) {
      return iconPlay_do;
    } return iconPlay;
  }
  changeReanameState = myMusic => {
    const { entities } = this.props;
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length) {
      const musicPlp = entities.myMusicData[myMusic[this.state.musicBoxId]].plp;
      if (musicPlp === 7 || this.state.selected !== 1) {
        return iconRename;
      }
      return iconRename_do;
    }
    return null;
  }
  changeCutState = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length && this.state.selected !== 2) {
      return iconCut_do;
    } return iconCut;
  }
  changeShareState = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length && this.state.selected !== 2) {
      return iconShare_do;
    } return iconShare;
  }
  changeDeleteState = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length || this.state.selected !== 1 || this.state.addMusicId.length !== 0) {
      return iconDelete_do;
    } return iconDelete;
  }
  changePlayWordColor = () => {
    if (this.state.musicBoxId !== -1 && this.state.selected !== 2) {
      return 'black';
    } return 'gray';
  }
  changeRenameWordColor = () => {
    const { entities, myMusic } = this.props;
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length) {
      const musicPlp = entities.myMusicData[myMusic[this.state.musicBoxId]].plp;
      if (musicPlp === 7 || this.state.selected !== 1) {
        return 'gray';
      }
      return 'black';
    }
    return null;
  }
  changeCutWordColor = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length && this.state.selected !== 2) {
      return 'black';
    } return 'gray';
  }
  changeShareWordColor = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length && this.state.selected !== 2) {
      return 'black';
    } return 'gray';
  }
  changeDeleteWordColor = myMusic => {
    if (this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length || this.state.selected !== 1 || this.state.addMusicId.length !== 0) {
      return 'black';
    } return 'gray';
  }
  handlePlayClick = () => {
    if (this.state.musicBoxId === -1) {
      window.alert('您还没有选择音乐哦！');
    } else {
      this.props.callBackId(this.state.musicBoxId);
      this.props.showPlayPage();
    }
  }
  handleRenameClick = () => {
    const { entities, myMusic } = this.props;
    if (this.state.musicBoxId > myMusic.length) {
      window.alert('[推荐音乐]不能重命名哦！');
    } else if (this.state.musicBoxId === -1) {
      window.alert('您还没有选择音乐哦！');
    } else {
      const musicplp = entities.myMusicData[myMusic[this.state.musicBoxId]].plp;
      if (musicplp === 7) {
        window.alert('漂流瓶保存的音乐不能重命名！');
      } else {
        this.props.handleReNameShowState();
        this.props.callBackId(this.state.musicBoxId);
        const beFouceName = entities.myMusicData[myMusic[this.state.musicBoxId]].name;
        this.props.updataBeFouceMusicName(beFouceName);
      }
    }
  }
  handleCutClick = () => {
    if (this.state.musicBoxId === -1) {
      window.alert('您还没有选择音乐哦！');
    } else {
      // this.props.callBackId(this.state.musicBoxId);
      window.alert('此功能待开发！');
    }
  }
  handleShareClick = () => {
    const { entities, myMusic } = this.props;
    if (this.state.musicBoxId === -1) {
      window.alert('您还没有选择音乐');
    } else if (this.state.musicBoxId > myMusic.length) {
      window.alert('[推荐音乐]不能赠送好友哦！');
    } else {
      const musicName = entities.myMusicData[myMusic[this.state.musicBoxId]].name;
      window.alert(`歌曲<<${musicName}>>赠送朋友成功`);
    }
  }
  handleDeleteClick = () => {
    const { actions, myMusic, entities } = this.props;
    if (this.state.addMusicId.length !== 0) {
      for (let i = 0; i < this.state.addMusicId.length; i++) {
        if (this.state.addMusicId[i] > myMusic.length) {
          window.alert('推荐音乐不能被删除');
        } else {
          actions.deleteMusic(this.state.addMusicId[i]);
        }
      }
    } else if (this.state.musicBoxId === -1) {
      window.alert('您还没有选择音乐哦！');
    } else if (this.state.musicBoxId >= myMusic.length) {
      window.alert('推荐音乐不能删除');
    } else {
      const musicPlp = entities.myMusicData[myMusic[this.state.musicBoxId]].plp;
      if (musicPlp === 7) {
        window.alert('漂流瓶音乐不能被删除！');
      } else {
        actions.deleteMusic(this.state.musicBoxId);
      }
    }
  }
  handleRandomMusicClass = () => {
    if (this.state.selected === 2) {
      return 'hidden';
    } return 'musicListBox';
  }
  showCircleState = index => {
    for (let i = 0; i < this.state.addMusicId.length; i++) {
      if (index === this.state.addMusicId[i]) {
        return 'showCircle';
      } return 'hidden';
    }
    return null;
  }
  showMusicId = index => {
    for (let i = 0; i < this.state.addMusicId.length; i++) {
      if (index === this.state.addMusicId[i]) {
        return i + 1;
      }
    }
    return null;
  }
  render() {
    const {
      entities, myMusic, recommendMusic
    } = this.props;
    const { selected } = this.state;
    return (
      <div className="myMusic">
        <div className="myMusic_radio">
          <input type="radio" value="1" name="radioSelect" checked={selected === 1} onChange={this.handleOneSelectRadio} />&nbsp;&nbsp;单选
            <input type="radio" value="2" name="radioSelect" checked={selected === 2} onChange={this.handleManySelectRadio} />&nbsp;&nbsp;多选
        </div>
        <div className="myMusic_firstTitle">&nbsp;&nbsp;我的音乐</div>
        <div className="myMusic_locationMusicList">
          {
              this.state.selected === 1 ?
              (myMusic || []).map((idx, index) => <div className="musicListBox" key={index} onClick={() => { this.setState({ musicBoxId: index }); }}><div className={this.handleMusicBoxState(index)}><img src={iconRightPoint} alt="图片加载失败！" /></div><div className="musicName">{entities.myMusicData[idx].name}</div></div>)
              :
              (myMusic || []).map((idx, index) => <div className="musicListBox" key={index} onClick={() => { this.props.callBcakAddMusicIdToDeleteId(index); this.setState({ addMusicId: this.props.addMusicIdToDelete }); }}><div className="manySelectStyle"><div className={this.showCircleState(index)}>{this.showMusicId(index)}</div></div><div className="musicName">{entities.myMusicData[idx].name}</div></div>)
            }
        </div>
        <div className="myMusic_secondTitle">&nbsp;&nbsp;推荐音乐</div>
        <div className={this.handleRandomMusicClass()} onClick={() => { this.setState({ musicBoxId: -1 }); }}><div className={this.handleMusicBoxState(-1)} ><img src={iconRightPoint} alt="图片加载失败！" /></div><div className="musicName">随机音乐</div></div>
        <div className="myMusic_recommentMusicList">
          {
              this.state.selected === 1 ?
              (recommendMusic || []).map((idx, index) => <div className="musicListBox" key={index} onClick={() => { this.setState({ musicBoxId: index + myMusic.length }); }}><div className={this.handleMusicBoxState(index + myMusic.length)}><img src={iconRightPoint} alt="图片加载失败！" /></div><div className="musicName">{entities.recommendMusicData[idx].name}</div></div>)
              :
              (recommendMusic || []).map((idx, index) => <div className="musicListBox" key={index} onClick={() => { this.props.callBcakAddMusicIdToDeleteId(index + myMusic.length); this.setState({ addMusicId: this.props.addMusicIdToDelete }); }}><div className="manySelectStyle"><div className={this.showCircleState(index + myMusic.length)}>{this.showMusicId(index + myMusic.length)}</div></div><div className="musicName">{entities.recommendMusicData[idx].name}</div></div>)
            }
        </div>
        <div className="myMusic_bottomButton">
          <div onClick={this.handlePlayClick}><img src={this.changePlayIconState()} alt="图片加载失败!" /><p className={this.changePlayWordColor()}>播放</p></div>
          <div onClick={this.handleRenameClick}><img src={this.changeReanameState(myMusic) || iconRename} alt="图片加载失败!" /><p className={this.changeRenameWordColor() || 'gray'}>重命名</p></div>
          <div onClick={this.handleCutClick}><img src={this.changeCutState(myMusic)} alt="图片加载失败!" /><p className={this.changeCutWordColor(myMusic)}>选择片段</p></div>
          <div onClick={this.handleShareClick}><img src={this.changeShareState(myMusic)} alt="图片加载失败!" /><p className={this.changeShareWordColor(myMusic)}>送给朋友</p></div>
          <div onClick={this.handleDeleteClick}><img src={this.changeDeleteState(myMusic)} alt="图片加载失败!" /><p className={this.changeDeleteWordColor(myMusic)}>删除</p></div>
        </div>
      </div>
    );
  }
}
