// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Authenticator,
    Greetings,
    SignIn,
    SignUp,
    ConfirmSignUp,
    ForgotPassword,
} from 'aws-amplify-react'
import Login from './Login'
import Signup from './Signup'
import ConfirmSignup from './ConfirmSignup'
import Forgot from './ForgotPassword'
import ForgotPasswordReset from './ForgotPasswordReset'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const AuthContainer = styled.div`
    width: 50%;
    padding: 10% 0;
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
            <Main>
                <AuthContainer>
                    <Authenticator
                        hide={[
                            Greetings,
                            SignIn,
                            SignUp,
                            ConfirmSignUp,
                            ForgotPassword,
                        ]}>
                        <Login />
                        <Signup />
                        <ConfirmSignup />
                        <Forgot />
                        <ForgotPasswordReset />
                    </Authenticator>
                </AuthContainer>
            </Main>
        )
    }

    render() {
        const { user } = this.props
        return !user ? this.renderAuth() : <h1>Logged in</h1>
    }
}

const mapState = state => {
    return {
        user: state.auth.profile,
    }
}

export default connect(
    mapState,
    null,
)(CustomAuthenticator)
