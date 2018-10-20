// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/auth'

type OnStateChange = (string, any) => void

type Props = {
    logout: OnStateChange => () => void,
    onStateChange: OnStateChange,
    authState: string,
}

class Logout extends Component<Props> {
    render() {
        return (
            <Button
                primary
                as={Link}
                to={'/'} /* onClick={() => logout(onStateChange)} */
            >
                <div>{'Logout'}</div>
            </Button>
        )
    }
}

const mapDispatch = {
    logout,
}

export default connect(
    null,
    mapDispatch,
)(Logout)
