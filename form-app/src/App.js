import React, { Component } from 'react';
import './App.css';

import ListDisplay from './ListDisplay';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IdemList: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(event) {
    event.preventDefault()
    let lst = this.state.IdemList
    lst.push(event.target.TextInput.value)
    console.log(lst)
    this.setState({
      IdemList: lst
    })
  }


  render() {
    return (
      <div className="App">
        <Header size={this.state.IdemList.length} />
        <ListDisplay values={this.state.IdemList} action={this.addItem} />
        <Footer />
      </div>
    );
  }
}

export default App;
