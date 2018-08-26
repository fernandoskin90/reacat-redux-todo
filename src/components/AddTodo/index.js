import React from 'react';

class AddTodo extends React.Component {
  state = {
    content: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New TODO</label>
          <input type="text" name="content" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
