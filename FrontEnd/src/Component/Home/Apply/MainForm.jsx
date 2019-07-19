import React, { Component } from 'react';
import StudentApply from './StudentApply';
import Confirmation from './Confirmation';
import Success from './Success';


class MainForm extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        link: '',
        school: '',
        gradyear: '',
        major: '',
        why: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    aStep = () => {
        const { step } = this.state
        this.setState({
            step : 2
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { name, email, link, school, gradyear, major, why } = this.state;
        const values = { name, email, link, school, gradyear, major, why };
        switch(step) {
        case 1:
            return <StudentApply
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 3:
            return <Success />
        }

    }
}


export default MainForm;
