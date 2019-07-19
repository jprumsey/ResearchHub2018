import React, { Component } from 'react';
import { Form, Button, List,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
 } from 'semantic-ui-react';

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

        const {values: { name, password, email, projectname, num_spots, description, skills_description, subject }} = this.props;

        return(
            <div>
              <Header as='h1' content='Confirm your Details' style={style.h1} textAlign='center' />

                <List>
                    <List.Item>
                        <List.Content ><b>Name: </b>{name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Password: </b>{password}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <b>Email: </b><a href={"mailto:" + email}>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Project Name: </b>{projectname}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Spots Available: </b>{num_spots}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Description: </b></List.Content>
                        <List.Content>{description}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Skills: </b>{skills_description}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Research Subject/Categories: </b>{subject}</List.Content>
                    </List.Item>
                </List>

                <br/>
                <br/>
                <br/>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;
