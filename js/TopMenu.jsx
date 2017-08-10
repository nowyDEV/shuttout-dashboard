import React, { Component } from 'react';
import { Container, Image, Menu, Sidebar, Checkbox } from 'semantic-ui-react';

class TopMenu extends Component {
  state = {
    activeItem: false,
    sidemenuVisible: false,
    photoPanel: true,
    baseStats: true,
    photosChart: true,
    registeredUsers: true,
    entryFees: true,
    goldChart: true,
    totalVotes: true,
    newUsers: true,
    deviceAndBrowser: true,
    additionalStats: true
  };

  handleClick = () => {
    this.setState({
      activeItem: !this.state.activeItem,
      sidemenuVisible: !this.state.sidemenuVisible
    });
  };

  handleCheckboxClick = (event, data) => {
    console.log(data.checked);
    this.setState({ [data.name]: data.checked });
  };

  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image size="mini" src="./public/img/logo.png" style={{ marginRight: '1.5em' }} />
              Shuttboard
            </Menu.Item>
            <Menu.Item name="view menu" active={this.state.activeItem} onClick={this.handleClick}>
              Menu
            </Menu.Item>
          </Container>
        </Menu>
        <Sidebar
          style={{ position: 'fixed', top: '0', right: '0', zIndex: '999' }}
          as={Menu}
          animation="overlay"
          width="thin"
          visible={this.state.sidemenuVisible}
          icon="labeled"
          vertical
          inverted
          direction="right"
        >
          <Menu.Item>
            <Checkbox name="photoPanel" label="Photos Panel" onChange={this.handleCheckboxClick} defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="baseStats" label="Base Stats" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="photosChart" label="Photos Chart" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="registeredUsers" label="Registered Users" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="entryFees" label="Entry Fees" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="goldChart" label="Gold Chart" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="totalVotes" label="Total Votes" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="newUsers" label="New Users" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="deviceAndBrowser" label="Device / Browser" defaultChecked />
          </Menu.Item>
          <Menu.Item>
            <Checkbox name="additionalStats" label="Additional Stats" defaultChecked />
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default TopMenu;
