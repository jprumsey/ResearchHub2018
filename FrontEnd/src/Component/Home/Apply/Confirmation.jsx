import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { name, email, link, school, gradyear, major, why }} = this.props;

        return(
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered:</p>
                <List>
                    <List.Item>
                        <List.Content><b>Name: </b>{name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <b>Email: </b><a href={"mailto:" + email}>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>School: </b>{school}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Major: </b>{major}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Graduation Year: </b>{gradyear}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Link: </b>{link}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Why Essay: </b>{why}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Apply!</Button>
            </div>
        )
    }
}

export default Confirmation;
