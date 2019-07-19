import React, { Component } from 'react';
import './App.css';
import Projects from './Component/Projects/index.jsx';
import HomepageLayout from './Component/Home/Home.jsx';
import SubmitProposal from './Component/Home/Form/MainForm.jsx';
import Registration from './Component/Home/Form/Registration.jsx';
import Faculty from './Component/Faculty/index.jsx';
import ProjectPage from './Component/Projects/ProjectPage.jsx'

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    document.title = "ResearchHub";
}

  render() {
    return (

<div className="App">
   <div className="App-Route">
     <Switch>
       <Route exact path="/"  component={HomepageLayout} />
       <Route path="/Projects" component={Projects} />
       <Route path="/Proposal" component={SubmitProposal} />
       <Route path="/Register" component={Registration} />
       <Route path="/Faculty" component={Faculty} />
       <Route path="/Project/:pid" component={ProjectPage} />
       <Redirect to="/" />
     </Switch>
   </div>
 </div>

    );
  }
}

export default App;
