import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class HomeMui extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  handleClick = () => {
    const { getData } = this.props;
    getData({...this.state});
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    return (
      <div id="container">
        <h1>todo list</h1>
        <TextField
          id="title"
          label="title"
          value={this.state.title}
          name="title"
          onChange={this.handleChange('title')}
          className="title"/>
        <TextField
          id="content"
          label="content"
          value={this.state.content}
          name="content"
          multiline
          rows="40"
          margin="normal"
          onChange={this.handleChange('content')}
          className="content"/>
        <Button variant="contained" className="submitBtn" onClick={this.handleClick}>
          submit
        </Button>
      </div>
    );
  }
}

export default HomeMui;
