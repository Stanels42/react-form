import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <h4>{this.props.size} Values Displayed</h4>
      </div>
    );
  }
}

export default Header;
