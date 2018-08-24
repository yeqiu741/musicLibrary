import React, { Component } from 'react';
import './UploadMusic.css';
/* eslint-disable*/
const icon = require('../../img/saoMa.png')
export default class UploadMusic extends Component {
  render() {
    return (
      <div className="uploadMusic">
        <div className="uploadMusic_uploadFromPhone">
          <p>上传手机里的音乐</p>
          <div className="uploadMusic_uploadFromPhone_button"> 
            <button>手机上传音乐</button>
          </div>
        </div>
        <div className="uploadMusic_uploadFromPc">
          <h2>上传电脑里的音乐</h2>
          <br/>
          <span>第一步&nbsp;:&nbsp;打开电脑浏览器输入以下网址</span>
          <div className="netUrl">i.xiaoniangao.cn</div>
          <span>第二部&nbsp;:&nbsp;点击下方按钮扫描电脑上的二维码</span>
          <h3>扫码后可用电脑上传音乐</h3>
          <div className="uploadMusic_uploadFromPc_button">
            <button><img src={icon} alt="图片加载失败!"/>扫面二维码</button>
          </div>
        </div>
      </div>
    );
  }
}
