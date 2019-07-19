import React, {Component} from 'react';

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
  Table,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

import {Route, Link, Switch, Redirect} from 'react-router-dom';

export default class research extends Component {

  handleSubject = research => {
    console.log(research);
    const list = [];
    if (research.subject1 !== "") {
      list.append(research.subject1);
    }
    if (research.subjet2 !== "") {
      list.append(research.subject2);
    }
    if (research.subject3 !== "") {
      list.append(research.subject3);
    }
    console.log(list);
    return list.toString();
  };

  render() {

    var style = {
      h1: {
        marginTop: '3em'
      },
      h2: {
        margin: '4em 0em 2em'
      },
      h3: {
        marginTop: '2em',
        padding: '2em 0em'
      },
      last: {
        marginBottom: '300px'
      }
    }

    console.log(this.props.location.state.Researchs)

    var allResearch = this.props.location.state.Researchs;
    return (<div>
      <h1 style={{
          marginTop: '2em'
        }}>
        Project Information Page<p style={{
        color: '#2185d0'
      }}>{this.props.location.state.Researchs.name}</p>
      </h1>

      <br/>

      <Container>
        <Table celled="celled">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Project Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.location.state.Researchs.name}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>

      <br/>

      <Container>
        <Table celled="celled">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Project Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.location.state.Researchs.description}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>

      <br/>

      <Container>
        <Table celled="celled">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Posted</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.location.state.Researchs.date_posted}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>

      <br/>

      <Container>
        <Table celled="celled">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Skills Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.location.state.Researchs.skills_description}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>

      <br/>

      <Container>
        <table class="ui celled striped table">
          <thead>
            <tr>
              <th colspan="3">
                Manager Information
              </th>
            </tr>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email Address
              </th>
              <th>
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.location.state.Researchs.manager_name}
              </td>
              <td>{this.props.location.state.Researchs.manager_email}</td>
              <td>{this.props.location.state.Researchs.manager_phone}</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <br/>

      <Container>
        <Table celled="celled">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number of Spots Available</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {this.props.location.state.Researchs.num_spots}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>

      <br/>

      <Container>
        <table class="ui celled striped table">
          <thead>
            <tr>
              <th colspan="3">
                Subjects
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.location.state.Researchs.subject1}
              </td>
              <td>{this.props.location.state.Researchs.subject2}</td>
              <td>{this.props.location.state.Researchs.subject3}</td>
            </tr>
          </tbody>
        </table>
      </Container>

      <br/>
      <Link to='/'>
        <Button animated="animated" color='blue' size='massive'>
          <Button.Content visible="visible">Back to Home</Button.Content>
          <Button.Content hidden="hidden">
            <Icon name='arrow left'/>
          </Button.Content>
        </Button>
      </Link>
      <Link to='/Projects'>
        <Button animated="animated" color='teal' size='massive'>
          <Button.Content visible="visible">Back to Projects</Button.Content>
          <Button.Content hidden="hidden">
            <Icon name='arrow left'/>
          </Button.Content>
        </Button>
      </Link>
      <br/>
      <br/>
    </div>);
  }
}
