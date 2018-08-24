import React, { Component } from 'react';
import './MyMusic.css';
/* eslint-disable */
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
  constructor(props){
    super(props);
    this.state = {
      selected:1,
      musicBoxId:-1
    }
  }
  handleOneSelectRadio = () => {
   this.setState({
     selected:1
   })
  }
  handleManySelectRadio = () => {
    this.setState({
      selected:2
    })
   }
  handleMusicBoxState = (index) => {
    if(this.state.musicBoxId === index){
      return 'selectIconBox'
    }
    return 'hidden'
  }
  changeRandomMusicState = () => {
    if(this.state.selected === 2){
      return 'hidden'
    }return 'musicListBox'
  }
  changePlayIconState = () => {
    if(this.state.musicBoxId !== -1){
      return iconPlay_do
    }return iconPlay
  }
  // addPlayMusicPage = () => {
  //   return(
  //     <>
  //   )
  // }

  // changeRenameState = () => {
  //   if(this.state.musicBoxId !== -1){
  //     return rename
  //   }return iconPlay
  // }
  changeCutState = (myMusic) => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length)
    {
      return iconCut_do
    }return iconCut
  }
  changeShareState = (myMusic) => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length)
    {
      return iconShare_do
    }return iconShare
  }
  changeDeleteState = (myMusic) => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length)
    {
      return iconDelete_do
    }return iconDelete
  }
  changePlayWordColor = () => {
    if(this.state.musicBoxId !== -1){
      return 'black'
    }return 'gray'
  }
  changeRenameWordColor = myMusic => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length){
      return 'black'
    }return 'gray'
  }
  changeCutWordColor = myMusic => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length){
      return 'black'
    }return 'gray'
  }
  changeShareWordColor = myMusic => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length){
      return 'black'
    }return 'gray'
  }
  changeDeleteWordColor = myMusic => {
    if(this.state.musicBoxId > -1 && this.state.musicBoxId < myMusic.length){
      return 'black'
    }return 'gray'
  }
  handleCallBackMusicId = () => {
    this.props.callBackId(this.state.musicBoxId)
  }
  render() {
    const { entities, myMusic, recommendMusic } = this.props;
    const { selected } = this.state;
    return (
      <div className="myMusic">
          <div className="myMusic_radio">
            <input type="radio" value="1" name="radioSelect"  checked={selected === 1} onChange={this.handleOneSelectRadio} />&nbsp;&nbsp;单选
            <input type="radio" value="2" name="radioSelect" checked={selected === 2} onChange={this.handleManySelectRadio}/>&nbsp;&nbsp;多选
          </div>
          <div className="myMusic_firstTitle">&nbsp;&nbsp;我的音乐</div>
          <div className="myMusic_locationMusicList">
            {
              this.state.selected === 1 ?
              (myMusic||[]).map((idx,index)=>{return <div className="musicListBox" key={index} onClick={() => { this.setState({musicBoxId:index}) }}><div className={this.handleMusicBoxState(index)}><img  src={iconRightPoint} alt="图片加载失败！" /></div><div className="musicName">{entities.myMusic[idx].name}</div></div>})
              :
              (myMusic||[]).map((idx,index)=>{return <div className="musicListBox" key={index} ><div  className="selectIconBox"><div className="unshow">{1}</div></div><div className="musicName">{entities.myMusic[idx].name}</div></div>})
            }
          </div>
          <div className="myMusic_secondTitle">&nbsp;&nbsp;推荐音乐</div>
          <div className="myMusic_recommentMusicList">
          {/* <div className={this.changeRandomMusicState}><div className={this.handleMusicBoxState(-1)}><img  src={iconRight} alt="图片加载失败！" /></div><div className="musicName">随机音乐</div></div> */}
            {
              this.state.selected === 1 ?
              (recommendMusic||[]).map((idx,index)=>{return <div className="musicListBox" key={index} onClick={() => { this.setState({musicBoxId:index+myMusic.length}) }}><div className={this.handleMusicBoxState(index+myMusic.length)}><img  src={iconRightPoint} alt="图片加载失败！" /></div><div className="musicName">{entities.recommendMusic[idx].name}</div></div>})
              :
              (recommendMusic||[]).map((idx,index)=>{return <div className="musicListBox" key={index}><div className="selectIconBox"><div className="unshow">{1}</div></div><div className="musicName">{entities.recommendMusic[idx].name}</div></div>})
            }
          </div>
          <div className="myMusic_bottomButton">
            <div onClick={this.handleCallBackMusicId}><img src={this.changePlayIconState()}  alt="图片加载失败!"/><p className={this.changePlayWordColor()}>播放</p></div>
            <div><img src={iconRename} alt="图片加载失败!" /><p className='gray'>重命名</p></div>
            <div><img src={this.changeCutState(myMusic)} alt="图片加载失败!" /><p className={this.changeCutWordColor(myMusic)}>选择片段</p></div>
            <div><img src={this.changeShareState(myMusic)} alt="图片加载失败!" /><p className={this.changeShareWordColor(myMusic)}>送给朋友</p></div>
            <div><img src={this.changeDeleteState(myMusic)} alt="图片加载失败!" /><p className={this.changeDeleteWordColor(myMusic)}>删除</p></div>
          </div>
      </div>
    );
  }
}
// onClick={this.addPlayMusicPage()}