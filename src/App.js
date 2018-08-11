import React, { Component } from 'react';
import Home from './Home';
import PostList from './PostList';
import HomeMui from './HomeMui';
import PostListMui from './PostListMui';
import './App.css';

class App extends Component {
  state = {
    data: [],
    antd: true
  };

  getData = (inputData) => {
    this.state.data.push(inputData);
    this.setState({
      data: this.state.data
    });
  };

  handleClick = () => {
    this.setState({
      antd: !this.state.antd
    });
  };

  render() {
    const { antd } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={this.handleClick}>切换UI</button>
        <div className="App">
          {
            antd ? (
              <div><Home getData={this.getData} />
                <PostList postData={this.state.data} /></div>) :
              (<div><HomeMui getData={this.getData} />
                <PostListMui postData={this.state.data} /></div>)

          }
        </div>
      </div>
    );
  }
}

export default App;
