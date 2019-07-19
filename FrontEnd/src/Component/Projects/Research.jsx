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
  Visibility,
} from 'semantic-ui-react'

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

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

    return (<div>
      <Header as='h1' content='All Research Postings' style={style.h1} textAlign='center'/>

      <br/>
      <Table celled="celled">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Project Name</Table.HeaderCell>
            <Table.HeaderCell>Subject</Table.HeaderCell>
            <Table.HeaderCell>Spots Available</Table.HeaderCell>
            <Table.HeaderCell>Apply Now!</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {
            this.props.Researchs.map(research => (<Table.Row key={research.pid}>

              <Table.Cell>
              <Link to=
              {{
                pathname: `/Project/${research.pid}`,
                state: {Researchs : research}
              }}>
              {research.name}
              </Link>
              </Table.Cell>

              <Table.Cell>
              {research.subject1 }
              {' '}
              {research.subject2 }
              {' '}
              {research.subject3}
              </Table.Cell>
              <Table.Cell>{research.num_spots}</Table.Cell>
              <Table.Cell>
                <Button onClick={ () => this.props.applyPage(research)}>
                  Apply
                </Button>
              </Table.Cell>
            </Table.Row>))
          }
        </Table.Body>

      </Table>
    </div>);
  }
}
