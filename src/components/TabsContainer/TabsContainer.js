import React, { Component } from 'react';
import './TabsContainer.css';
/* eslint-disable */

export default class TabsContainer extends Component {
  checkTittleIndex(index) {
    const { photoState } = this.props;
    return index === photoState.currentIndex ? 'TabTittle active' : 'TabTittle';
  }
  checkItemIndex(index) {
    const { photoState } = this.props;
    return index === photoState.currentIndex ? 'show' : 'TabItem';
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <div className="TabTittleWrap">
          {React.Children.map(this.props.children, (Element, index) => (
            <div onClick={() => { actions.changePhotoState(index) }} className={this.checkTittleIndex(index)}><img src={Element.props.icon} />{Element.props.name}</div>
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

