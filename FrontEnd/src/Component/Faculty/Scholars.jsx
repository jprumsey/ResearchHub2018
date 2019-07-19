import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import HubLogo from './logotransparent.png'


import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List, Search,
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

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: false })

  render() {

    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
export default class research extends Component {

  // componentWillMount() {
  //   this.resetComponent()
  // }
  //
  // resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })
  // handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  //
  // handleSearchChange = (e, { value }) => {
  //   this.setState({ isLoading: true, value })
  //
  //   setTimeout(() => {
  //     if (this.state.value.length < 1) return this.resetComponent()
  //
  //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
  //     const isMatch = result => re.test(result.title)
  //
  //     this.setState({
  //       isLoading: false,
  //       results: _.filter(this.props.Scholars, isMatch),
  //     })
  //   }, 300)
  // }

  render() {

    console.log(this.props.Scholars);

    // const { isLoading, value, results } = this.state

    var style = {
      h1: {
        marginTop: '1em'
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

    // <Search
    //   loading={isLoading}
    //   onResultSelect={this.handleResultSelect}
    //   onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
    //   results={results}
    //   value={value}
    //   {...this.props}
    //   className="float-left"
    // />

    return (<div>

      <Header as='h1' content='Duke Faculty Researchers' style={style.h1} textAlign='center'/>

      <br/>

      <ResponsiveContainer>
      <br/>
      <Table celled="celled">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Scholar Name</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            this.props.Scholars.map( scholar => (<Table.Row key={scholar.email}>
              <Table.Cell>{scholar.name}</Table.Cell>
              <Table.Cell>{scholar.title}</Table.Cell>
              <Table.Cell>{scholar.department}</Table.Cell>
              <Table.Cell>{scholar.phone}</Table.Cell>
              <Table.Cell>{scholar.email}</Table.Cell>
              <Table.Cell>{scholar.website}</Table.Cell>
              </Table.Row>))
          }

        </Table.Body>

      </Table>
      </ResponsiveContainer>
    </div>);
  }
}
