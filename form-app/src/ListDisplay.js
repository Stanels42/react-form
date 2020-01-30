import React, { Component } from 'react';

import DisplayForm from './Form'

class ListDisplay extends Component {

  constructor(props) {
    super(props)
  }

  renderList(list) {
    if (list.length === 0) return
    console.log(list)
    return (
      <ul>
        {list.map((val, i) => <li key={val+ i}>{val}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <div className="ListDisplay">
        {this.renderList(this.props.values)}
        <DisplayForm submit={this.props.action}/>
      </div>
    );
  }
}



export default ListDisplay;
