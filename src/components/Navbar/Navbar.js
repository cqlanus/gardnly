import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../redux/auth'

class Navbar extends Component {
    signOut = async () => {
        const { history, logout } = this.props
        await logout()
        history.push('/')
    }

    renderLogout = () => {
        const { user } = this.props
        return user && <Menu.Item onClick={this.signOut}>{'Logout'}</Menu.Item>
    }
    render() {
        return (
            <Menu>
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to={`/home/bed`}>
                        <Icon name="user outline" />
                    </Menu.Item>
                    <Menu.Item as={Link} to={`/home/start`}>
                        <Icon name="envira gallery" />
                    </Menu.Item>
                    <Menu.Item as={Link} to={'/home'}>
                        <Icon name="home" />
                    </Menu.Item>
                    {this.renderLogout()}
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapState = state => {
    return {
        user: state.auth.profile,
    }
}

const mapDispatch = {
    logout,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withRouter,
)(Navbar)
