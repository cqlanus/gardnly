import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class SidebarNav extends Component {
    render() {
        return (
            <Menu fixed="top">
                <Menu.Menu position="right">
                    <Menu.Item as="a">
                        <Icon name="user outline" />
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Icon name="envira gallery" />
                    </Menu.Item>
                    <Menu.Item as="a">
                        <Icon name="home" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
