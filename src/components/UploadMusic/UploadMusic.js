import React, { Component } from 'react';
import './UploadMusic.css';
/* eslint-disable*/
const icon = require('../../img/saoMa.png')
export default class UploadMusic extends Component {
  render() {
    return (
      <div className="uploadMusic">
        <div className="uploadMusic_upload">
          <p>上传手机里的音乐</p>
          <button>手机上传音乐</button>
        </div>
        <div>
          <p>上传电脑里的音乐</p>
          <br/>
          <span>第一步:打开电脑浏览器输入以下网址</span>
          <p>i.xiaoniangao.cn</p>
          <span>第二部:点击下方按钮扫描电脑上的二维码</span>
          <p>扫码后可用电脑上传音乐</p>
          <button><img src={icon} alt="图片加载失败!"/>扫面二维码</button>
        </div>
      </div>
    );
  }
}
