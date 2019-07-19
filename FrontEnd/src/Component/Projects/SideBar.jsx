import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

export default class Sidebar extends Component {
  render (){
    const {Genres} =this.props;
  return(
  <List selection verticalAlign='middle'>
    {Genres.map(genre => (
      <List.Item key= {genre._id}>
      <List.Content>
        <List.Header>{genre.name}</List.Header>
      </List.Content>
      </List.Item>
    ))}
  </List>
);
}
}
