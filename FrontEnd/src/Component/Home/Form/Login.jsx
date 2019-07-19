import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    loginAndContinue = (e) => {
        e.preventDefault()
        this.props.aStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="ui centered">Login</h1>
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

                <Button onClick={this.loginAndContinue}>Log In</Button>
            </Form>
        )
    }
}

export default UserDetails;
