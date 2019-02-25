import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-bounce"></div>
        <div className="loading-bounce"></div>
      </div>
    );
  }
}

export default Loading;
