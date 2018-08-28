import React, { Component } from 'react';
import './PlayPage.css';

export default class PlayPage extends Component {
  handleIsShowPlayPage = () => {
    const { isShowPlayPage } = this.props;
    if (isShowPlayPage === false) {
      return 'unshow';
    } return 'playPage';
  }
  cancle = () => {
    this.props.cancle();
  }
  handleCallBackPlayMusic = () => {
    this.props.handleMusicPlayCallBack();
  }
  render() {
    return (
      <div className={this.handleIsShowPlayPage()}>
        <div className="playPage_supernatant">
          <p onClick={this.cancle}>关闭</p>
          <div>
            <audio src={this.handleCallBackPlayMusic} controls="controls" />
          </div>
        </div>
      </div>
    );
  }
}
