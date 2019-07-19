import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ChapelBackground from './chapel.png'
import HubLogo from './logotransparent.png'
import ScrollUpButton from 'react-scroll-up-button'

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
  Visibility,
} from 'semantic-ui-react'


import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


var Chapel = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + ChapelBackground + ")",
  backgroundSize: "cover",
  backgroundPosition: "50% 10%"
};

const HomepageHeading = ({ mobile }) => (


  <Container text>
    <Header
      as='h1'
      content='ResearchHub'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Find research opportunities at Duke'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Container>
      <Link to='/Projects'>
      <Button animated color = 'blue' size='massive'>
        <Button.Content visible>Explore Projects</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/Proposal'>
        <Button animated  color = 'teal' size='massive'>
          <Button.Content visible> &nbsp;&nbsp;Submit Proposal&nbsp;&nbsp; </Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
      <Link to='/Faculty'>
        <Button animated  color = 'violet' size='massive'>
          <Button.Content visible> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faculty List&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </Link>
    </Container>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI smashnor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

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
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size='large'
          style = {{backgroundColor: '#1b1c1d'}}
        >
        <Image src = {HubLogo} size='small' style={{height:'3.5%', width: '3.5%', marginRight: '1%'}}/>
            <Link to='/Projects'><Menu.Item as='a'>Projects</Menu.Item></Link>
            <Link to='/Faculty'><Menu.Item as='a'>Faculty</Menu.Item></Link>
        </Menu>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            style={Chapel}
          >

            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Projects</Menu.Item>
            <Menu.Item as='a'>Faculty</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              For Faculty
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              With a one-time, simple registration, you can post your research projects on our website to find students that are interested in getting involved
            </p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              For Students
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can help you get connected with Duke University faculty that are looking for students to get involved with their research projects
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '3em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
            <Header as='h3' inverted>
              TeamHub
            </Header>
              <p>
                Created By: Christian Burke, Sam Chan, Vinit Parekh, James Rumsey, Justin Suh
                <br/>
                Moral Support From: Doug Talbert
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
           <ScrollUpButton>
          <Header><Image src = {HubLogo} size='small' style={{height:'15%', width: '15%'}}/></Header>
          </ScrollUpButton>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
