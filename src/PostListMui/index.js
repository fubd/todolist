import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export default class PostListMui extends React.Component {
  render() {
    const { postData } = this.props;
    return (
      <div className="post-list">
        <List>
          {postData.map((value, index) => (
            <ListItem key={index} dense button >
              <Avatar alt="Remy Sharp" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <ListItemText primary={value.title} />
              <ListItemSecondaryAction>
                {value.content}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
