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
      var style = {
          h1: {
            marginTop: '3em',
          },
          h2: {
            margin: '4em 0em 2em',
          },
          h3: {
            marginTop: '2em',
            padding: '2em 0em',
          },
          last: {
            marginBottom: '300px',
          }
        }
        return(
            <div>
            <br/>
            <br/>
            <br/>
            <h1 className="ui centered">Your Project Proposal Posting has been added!</h1>
            <br/>
            <Link to='/'>
            <Button animated color = 'teal' size='massive'>
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
