import React, { Component } from 'react';

class DisplayForm extends Component {
  constructor(props) {
    super(props)
    this.state={
      TextInput:''
    }
    this.valueChange = this.valueChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  valueChange (event) {
    let target = event.target
    let value = target.value === 'checkbox' ? target.checked : target.value
    let name = target.name
    this.setState({
      [name]:value
    })
  }

  submitForm(event) {
    event.preventDefault()
    this.props.submit(event)
    this.setState({
      TextInput: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input name="TextInput" type="text" value={this.state.TextInput} onChange={this.valueChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default DisplayForm;
