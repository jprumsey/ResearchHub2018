import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
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
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
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
                    <label>Password</label>
                    <input
                    placeholder='Password'
                    onChange={this.props.handleChange('password')}
                    defaultValue={values.password}
                    />
                </Form.Field>

                <Button onClick={this.saveAndContinue}>Register</Button>
                <Button onClick={this.back}>Log In</Button>
            </Form>
        )
    }
}

export default UserDetails;
