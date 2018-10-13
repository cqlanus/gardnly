// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Authenticator, Greetings, SignIn } from 'aws-amplify-react'
import Login from './Login'
import styled from 'styled-components'

const Auth = styled(Authenticator)`
    height: 100vh;
`

type Props = {
    history: any => void,
    authState: string,
    user: any,
}

class CustomAuthenticator extends Component<Props> {
    componentDidMount() {
        const { history, user } = this.props
        if (user) {
            history && history.push('/home')
        }
    }

    componentDidUpdate() {
        const { history, user } = this.props
        console.log({ user })

        if (user) {
            history && history.push('/home')
        }
    }
    renderAuth = () => {
        return (
            <Auth hide={[Greetings, SignIn]}>
                <Login />
            </Auth>
        )
    }

    render() {
        const { user } = this.props
        return !user ? this.renderAuth() : <h1>Logged in</h1>
    }
}

const mapState = state => {
    return {
        user: state.user.profile,
    }
}

export default connect(
    mapState,
    null,
)(CustomAuthenticator)
