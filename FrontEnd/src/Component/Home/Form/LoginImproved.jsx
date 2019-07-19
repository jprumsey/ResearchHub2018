import React, { Component } from 'react';

import {
  Button,
  Container,
  Divider,
  Grid,
  Form,
  Message,
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

class UserDetails extends Component{

    loginAndContinue = (e) => {
        e.preventDefault()
        this.props.aStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
      const { values } = this.props;

      return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src='./logo.png' /> Login to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' onChange={this.props.handleChange('email')}
                                  defaultValue={values.email} iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.props.handleChange('password')}
                          defaultValue={values.password}
                />

                <Button color='teal' fluid size='large' onClick={this.loginAndContinue}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/Register'><a onClick={this.back}>Sign Up</a></Link>
            </Message>

            <Link to='/'>
            <Button animated color = 'teal' size='massive'>
              <Button.Content visible>Back to Home</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </div>

)

    }
}

export default UserDetails;
