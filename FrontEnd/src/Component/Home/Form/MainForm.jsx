import React, {Component} from 'react';
import Registration from './Registration';
import Login from './Login';
import ProjectPosting from './ProjectPosting';
import Confirmation from './Confirmation';
import Success from './Success';
import LoginImproved from './LoginImproved';
import RegistrationImproved from './RegistrationImproved';
import axios from 'axios';

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
  Visibility
} from 'semantic-ui-react'

export default class MainForm extends Component {
  state = {
    step: 1,
    name: '',
    manager_email: '',
    manager_password: '',
    phone: '',
    projectname: '',
    num_spots: '',
    description: '',
    skills_description: '',
    subject1: '',
    subject2: '',
    subject3: '',
    date_posted: new Date()

  }

  nextStep = () => {
    const {step} = this.state
    this.setState({
      step: step + 1
    })
  }

  aStep = () => {
    const {step} = this.state
    this.setState({step: 2})
  }

  prevStep = () => {
    const {step} = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => event => {
    this.setState({[input]: event.target.value})
  }

  handleSubmit = event => {

    const {
      projectname,
      num_spots,
      description,
      skills_description,
      subject1,
      subject2,
      subject3,
      date_posted,
      manager_email,
      manager_password
    } = this.state;
    console.log({
      projectname,
      num_spots,
      description,
      skills_description,
      subject1,
      subject2,
      subject3,
      date_posted,
      manager_email,
      manager_password
    });

    if (subject2 === "" && subject3 === "") {
      axios.post((process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000') + '/project', {
        projectname,
        num_spots,
        description,
        skills_description,
        subject1,
        date_posted,
        manager_email,
        manager_password
      }).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(response => {
        console.warn(response.response);
      });
    }

    else {
      if (subject1 !== "" && subject2 !== "" && subject3 === "") {
        axios.post((process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000') + '/project', {
          projectname,
          num_spots,
          description,
          skills_description,
          subject1,
          subject2,
          date_posted,
          manager_email,
          manager_password
        }).then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(response => {
          console.warn(response.response);
        });
      }
      else {
        axios.post((process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000') + '/project', {
          projectname,
          num_spots,
          description,
          skills_description,
          subject1,
          subject2,
          subject3,
          date_posted,
          manager_email,
          manager_password
        }).then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(response => {
          console.warn(response.response);
        });
      }
    }

    }


  render() {
    const {step} = this.state;
    console.log(this.state.manager_email);
    console.log(this.state.manager_password);
    const {
      name,
      manager_password,
      manager_email,
      date_posted,
      projectname,
      num_spots,
      description,
      skills_description,
      subject1,
      subject2,
      subject3
    } = this.state;
    const values = {
      name,
      manager_password,
      manager_email,
      date_posted,
      projectname,
      num_spots,
      description,
      skills_description,
      subject1,
      subject2,
      subject3
    };
    switch (step) {
      case 1:
        return <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <Container>
            <LoginImproved nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} aStep={this.aStep}/>
          </Container>
        </div>

      case 2:
        return <ProjectPosting handleSubmit={this.handleSubmit} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
      case 3:
        return <Confirmation nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>
      case 4:
        return <Success/>

      case 0:
        return <RegistrationImproved nextStep={this.nextStep} prevStep={this.prevStep} aStep={this.aStep} handleChange={this.handleChange} values={values}/>
    }
  }
}
