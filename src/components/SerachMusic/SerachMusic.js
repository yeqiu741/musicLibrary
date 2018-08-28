import React from 'react';
import './SerachMusic.css';

const icon = require('../../img/serach.png');

const SerachMusic = () => (
  <div className="serachMusic">
    <div className="serachMusic_serach">
      <div><img src={icon} alt="图片加载失败！" /></div>
      <input type="text" />
      <button>搜索</button>
    </div>
    <div />
    <p>每天限存5首音乐，建议您试听后保存</p>
    <div />
  </div>
);
export default SerachMusic;
