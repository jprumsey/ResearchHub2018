import React, { Component } from "react";
import Scholars from "./Scholars";
import Paginating from "./Pagination";
import { paginate } from "../../utils/Paginate";
import axios from 'axios';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image, Search,
  List,
  Menu,
  Table,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

export default class ProjectDisplay extends Component {
  state = {
      scholars: [],
      activePage: 1,
  }

  componentDidMount() {
    axios.get((process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000') + '/scholars/').then(res => {
      this.setState({scholars:res.data.scholars});
    });
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    console.log({ activePage });
  };



  render() {
    const { scholars, activePage } = this.state;

    const scholarr = paginate(scholars, activePage, 5);
    console.log(this.state.scholars);
    return (<div>
      <div style={{ display: "inline", float: "center" }}>
      <Container>
      <Scholars Scholars= {scholarr} />
      </Container>
      <br/>
      <Paginating
      onPaginationChange={this.handlePaginationChange}
      onCount={scholars.length}
      pageSize={5} />

      <br/>
      <br/>

      <Link to='/'>
      <Button animated color = 'blue' size='massive'>
        <Button.Content visible>Back to Home</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow left' />
        </Button.Content>
      </Button>
      </Link>
      </div>
    </div>
    );

  }
}
