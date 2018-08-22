import React, { Component } from 'react';
import './TabsContainer.css';
/* eslint-disable */
export default class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }
  checkTittleIndex(index) {
    return index === this.state.currentIndex ? 'TabTittle active' : 'TabTittle';
  }
  checkItemIndex(index) {
    return index === this.state.currentIndex ? 'TabItem show' : 'TabItem';
  }
  render() {
    return (
      <div>
        <div className="TabTittleWrap">
          {React.Children.map(this.props.children, (Element, index) => (
            <div onClick={() => { this.setState({ currentIndex: index }); }} className={this.checkTittleIndex(index)}><img src={Element.props.icon} alt="图片加载失败！"/>{Element.props.name}</div>
            ))}
        </div>

        <div className="TabItemWrap">
          {React.Children.map(this.props.children, (Element, index) => (
            <div className={this.checkItemIndex(index)}>{Element}</div>
            ))}
        </div>
      </div>
    );
  }
}

