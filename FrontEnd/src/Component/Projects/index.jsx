import React, { Component } from "react";

import axios from "axios";

import Research from "./Research";
import Paginating from "./Pagination";
import Sidebar from "./SideBar";
import PersonsDump from "./PersonsDump";
import { getResearch } from "../../Services/fakeResearchService";
import { getGenres } from "../../Services/fakeGenreService";
import { paginate } from "../../utils/Paginate";
import MainForm from "./MainForm.jsx";

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
  Table, Search,
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
    researchs: [],
    activePage: 1,
    step: 0,
    genres: getGenres()
  };

  componentDidMount() {
    axios.get((process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000') + '/project').then(res => {
      this.setState({researchs:res.data.projects});
    });
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });

  };

  // handleDelete = research => {
  //   const researchs = this.state.researchs.filter(m => m._id !== research._id);
  //   this.setState({ researchs: researchs });
  // };

  applyPage = research => {
    const researchs = this.state.researchs;
    this.setState({ researchs: researchs, step: 1 });
  };



  render() {
    const { researchs, activePage, genres } = this.state;

    const researchers = paginate(researchs, activePage, 5);
    const {step} = this.state;


    switch(step) {

    case 0:
    return (<div>

      <div style={{ display: "inline", float: "center" }}>
      <Container>

      <Research Researchs={researchers} applyPage={this.applyPage} />
      </Container>
      <br/>
      <Paginating
      onPaginationChange={this.handlePaginationChange}
      onCount={researchs.length}
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

    case 1:
    return (
        <div>
        <Container>
        <MainForm Researchs={researchers}/>
        </Container>
        </div>
    );
    }


  }
}
