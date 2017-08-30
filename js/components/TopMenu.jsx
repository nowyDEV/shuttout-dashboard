// @flow

import React from 'react'
import { Container, Image, Menu, Sidebar, Checkbox } from 'semantic-ui-react'

const TopMenu = (props: {
  activeItem: boolean,
  sidemenuVisible: boolean,
  handleCheckboxChange: (param1: Event, param2: Object) => void,
  handleMenuClick: () => void
}) => {
  const menuItems: Array<{
    id: number,
    name: string,
    label: string
  }> = [
    { id: 1, name: 'trafficStats', label: 'Traffic Stats' },
    { id: 2, name: 'trafficChart', label: 'Registrations' },
    { id: 3, name: 'photoPanel', label: 'Photos Panel' },
    { id: 4, name: 'photoStats', label: 'Photos Stats' },
    { id: 5, name: 'photoChart', label: 'Photos Chart' },
    { id: 6, name: 'totalVotes', label: 'Total Votes' },
    { id: 7, name: 'businessStats', label: 'Business Stats' },
    { id: 8, name: 'goldChart', label: 'Gold Chart' },
    { id: 9, name: 'additionalStats', label: 'Additional Stats' }
  ]
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src="./public/img/logo.png" style={{ marginRight: '1.5em' }} />
            Shuttboard
          </Menu.Item>
          <Menu.Item name="view menu" active={props.activeItem} onClick={props.handleMenuClick}>
            Menu
          </Menu.Item>
        </Container>
      </Menu>
      <Sidebar
        style={{ position: 'fixed', top: '0', right: '0', zIndex: '999' }}
        as={Menu}
        animation="overlay"
        width="thin"
        visible={props.sidemenuVisible}
        icon="labeled"
        vertical
        inverted
        direction="right">
        {menuItems.map(item => (
          <Menu.Item key={item.id}>
            <Checkbox name={item.name} label={item.label} onChange={props.handleCheckboxChange} defaultChecked />
          </Menu.Item>
        ))};
      </Sidebar>
    </div>
  )
}

export default TopMenu
