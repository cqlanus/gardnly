import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <Menu fixed="top">
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to={'/bed'}>
                        <Icon name="user outline" />
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/plan'}>
                        <Icon name="envira gallery" />
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/'}>
                        <Icon name="home" />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
