import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './Home.css';

export default class Home extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = name => e => {
    this.setState({
      ['name']: e.target.value
    });
  };

  handleSubmit = () => {
    this.props.getData({...this.state});
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    return (
      <div id="container">
        <h1>todo list</h1>
        <div className="title">
          <Input placeholder="title" addonBefore="标题" name="title" onChange={this.handleChange('title')} value={this.state.title}/>
        </div>
        <Input.TextArea className="content" name="content" onChange={this.handleChange('content')} value={this.state.content}/>
        <Button type="primary" className="submitBtn" onClick={this.handleSubmit} >submit</Button>
      </div>
    );
  }
}

