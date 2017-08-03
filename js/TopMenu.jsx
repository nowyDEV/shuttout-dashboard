import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';

const TopMenu = () =>
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src="./public/img/logo.png" style={{ marginRight: '1.5em' }} />
        Shuttboard
      </Menu.Item>
    </Container>
  </Menu>;

export default TopMenu;
