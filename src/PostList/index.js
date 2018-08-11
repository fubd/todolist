import React, { Component } from 'react';
import { List, Avatar, Button, Spin } from 'antd';

export default class PostList extends Component {
  render() {
    const { postData } = this.props;
    return (
      <List
        className="demo-loadmore-list post-list"
        itemLayout="horizontal"
        dataSource={postData}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
            />
            <div>{item.content}</div>
          </List.Item>
        )}
      />
    );
  }
}
