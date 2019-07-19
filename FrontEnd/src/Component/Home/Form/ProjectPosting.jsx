import React, { Component } from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.handleSubmit();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }



    render(){
        const { values } = this.props
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
        <h1 className="ui centered">Project Proposal</h1>

        <Container>
        <Form color='blue' onSubmit= {() => console.log('hello')}>
            <Form.Field>
                <label>Name</label>
                <input placeholder='Project Name'
                onChange={this.props.handleChange('projectname')}
                />
            </Form.Field>
            <Form.Field>
                <label>Spots Needed</label>
                <input placeholder='Number of Positions Needed'
                onChange={this.props.handleChange('num_spots')}
                />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <textarea placeholder='Brief Project Description'
                onChange={this.props.handleChange('description')}
                />
            </Form.Field>
            <Form.Field>
                <label>Skills Needed</label>
                <input placeholder='Skills and Background Required'
                onChange={this.props.handleChange('skills_description')}
                />
            </Form.Field>
            <Form.Field>
                <label>Subject(s)</label>
                <input placeholder='Subject 1'
                onChange={this.props.handleChange('subject1')}
                />
            </Form.Field>
            <Form.Field>
                <input placeholder='Subject 2'
                onChange={this.props.handleChange('subject2')}
                />
            </Form.Field>
            <Form.Field>
                <input placeholder='Subject 3'
                onChange={this.props.handleChange('subject3')}
                />
            </Form.Field>
            <Form.Field>
                <label>Coordinator's Login Email and Password</label>
                <input placeholder='Email'
                onChange={this.props.handleChange('manager_email')}
                />
            </Form.Field>
            <Form.Field>
                <input placeholder='Password'
                onChange={this.props.handleChange('manager_password')}
                />
            </Form.Field>
            <br/>
            <Button onClick={this.saveAndContinue}>Save And Continue</Button>
            <br/>
        </Form>
        </Container>

        </div>
        )
    }
}

export default PersonalDetails;
