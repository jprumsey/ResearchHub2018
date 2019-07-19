import React, { Component } from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class Success extends Component{
    render(){
        return(
          <div>
          <br/>
          <br/>
          <br/>
          <h1 className="ui centered">Your Project Proposal Posting has been added!</h1>
          <br/>
          <Link to='/'>
          <Button animated color = 'blue' size='massive'>
            <Button.Content visible>Back to Home</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
          </Link>

          </div>
        )
    }
}

export default Success;
