import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Project Proposal</h1>
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name'
                onChange={this.props.handleChange('name')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>Email Address</label>
                <input placeholder='Email Address'
                onChange={this.props.handleChange('email')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>School/University</label>
                <textarea placeholder='School/University'
                onChange={this.props.handleChange('school')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>Major</label>
                <input placeholder='Major'
                onChange={this.props.handleChange('major')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Graduation Year</label>
                <input placeholder='Graduation Year'
                onChange={this.props.handleChange('gradyear')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Form.Field>
                <label>LinkedIn/Resume</label>
                <input placeholder='Link to LinkedIn/Reusme'
                onChange={this.props.handleChange('link')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Why Essay</label>
                <input placeholder='Why do you want to apply?'
                onChange={this.props.handleChange('why')}
                defaultValue={values.country}
                />
            </Form.Field>
            <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
        )
    }
}

export default PersonalDetails;
