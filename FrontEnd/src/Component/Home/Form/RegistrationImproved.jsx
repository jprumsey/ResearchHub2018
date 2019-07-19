import React, { Component } from 'react';
import { Form, Container, Button, Icon } from 'semantic-ui-react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.aStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
            <br/>
            <br/>
              <Container>
                <h1 className="ui centered">Register</h1>
                <Form.Field>
                    <label>Name</label>
                    <input
                    placeholder='Name'
                    onChange={this.props.handleChange('name')}
                    defaultValue={values.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input
                    placeholder='Phone Number'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                    placeholder='Password'
                    onChange={this.props.handleChange('password')}
                    defaultValue={values.password}
                    />
                </Form.Field>
                </Container>

                <br/>
                <br/>
                <Link to='/'>
                  <Button animated color = 'teal' size='massive'>
                    <Button.Content visible>Back to Home</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow left' />
                    </Button.Content>
                  </Button>
                </Link>
                <Button onClick={this.saveAndContinue} animated color = 'blue' size='massive'>
                  <Button.Content visible>Register Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>

            </Form>
        )
    }
}

export default UserDetails;
