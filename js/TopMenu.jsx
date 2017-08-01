import React from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

const TopMenu = () =>
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src="./public/img/logo.png" style={{ marginRight: '1.5em' }} />
        Shuttboard
      </Menu.Item>

      <Dropdown item simple text="View">
        <Dropdown.Menu>
          <Dropdown.Item>Traffic</Dropdown.Item>
          <Dropdown.Item>Optional</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>;

export default TopMenu;
