import React, { Component } from 'react';
import './ReNamePage.css';

export default class ReNamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicNewName: ''
    };
  }
  handleReNameShowClassName = () => {
    if (this.props.isShowReNamePage === false) {
      return 'hidden';
    } return 'reNamePage';
  }
  handleCancleClick = () => {
    this.props.handleReNameShowState();
  }
  handleInputChange = e => {
    this.setState({
      musicNewName: e.target.value
    });
  }
  handleSureClick = () => {
    const { actions } = this.props;
    const data = [this.props.musicInEntitiesMyMusicId, this.state.musicNewName];
    actions.changeMymusicName(data);
    window.alert('修改成功');
    this.setState({
      musicNewName: ''
    });
    this.handleCancleClick();
  }
handle = () => {
  this.setState({ musicNewName: '' });
}
render() {
  return (
    <div className={this.handleReNameShowClassName()} >
      <div className="reNamePage_InputPane">
        <div className="reNamePage_InputPane_top">
          <p>请输入新的音乐名称</p>
          <input type="text" name="name" placeholder={this.props.musicNewName || '给音乐重新取个可爱的名字吧'} onChange={this.handleInputChange} />
        </div>
        <div className="reNamePage_InputPane_button">
          <div onClick={this.handleCancleClick}>取消</div>
          <div className="reNamePage_InputPane_button_sure" onClick={this.handleSureClick}>确定</div>
        </div>
      </div>
    </div>
  );
}
}
