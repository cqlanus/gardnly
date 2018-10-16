// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import { mapFormValues } from '../../utils/common'
import { login } from '../../redux/auth'

const Main = styled.div`
    diplay: flex;
    justify-content: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled.span`
    cursor: pointer;
    color: #2185d0;
`

const LOGIN_FORM = {
    EMAIL: 'email',
    PASSWORD: 'password',
}

const initialValues = {
    [LOGIN_FORM.EMAIL]: '',
    [LOGIN_FORM.PASSWORD]: '',
}

type Props = {
    handleSubmit: () => void,
    signUp: (typeof initialValues) => void,
    values: typeof initialValues,
    handleChange: string => void,
    login: (typeof initialValues) => void,
    loading: boolean,
    confirming: boolean,
    loggedIn: boolean,
    authState: string,
    onStateChange: string => void,
}

type State = {}

class Login extends Component<Props, State> {
    handleStateChange = state => () => this.props.onStateChange(state)

    renderForm = () => {
        const { values, handleChange, handleSubmit } = this.props
        const valueForField = mapFormValues(values, initialValues)
        return (
            <Main>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Input
                        label={'Email'}
                        value={valueForField(LOGIN_FORM.EMAIL)}
                        name={LOGIN_FORM.EMAIL}
                        onChange={handleChange}
                    />
                    <Form.Input
                        label={'Password'}
                        type={'password'}
                        value={valueForField(LOGIN_FORM.PASSWORD)}
                        name={LOGIN_FORM.PASSWORD}
                        onChange={handleChange}
                    />
                    <LinkContainer>
                        <StyledLink
                            onClick={this.handleStateChange('confirmSignUp')}>
                            {'Confirm a code'}
                        </StyledLink>
                        <StyledLink
                            onClick={this.handleStateChange('forgotPassword')}>
                            {'Forgot password'}
                        </StyledLink>
                    </LinkContainer>
                    <ButtonContainer>
                        <Button
                            onClick={this.handleStateChange('signUp')}
                            primary
                            fluid>
                            {'Register'}
                        </Button>
                        <Button
                            primary
                            fluid
                            type={'submit'}
                            onClick={handleSubmit}>
                            {'Login'}
                        </Button>
                    </ButtonContainer>
                </Form>
                <ButtonContainer>
                    <Button fluid>{'Sign In With Google'}</Button>
                </ButtonContainer>
            </Main>
        )
    }

    render() {
        const { loading, loggedIn, authState } = this.props
        if (!['signIn'].includes(authState)) {
            return null
        }
        return (
            <div>
                {loggedIn ? <h1>logged in</h1> : this.renderForm()}
                <Dimmer active={loading} page inverted>
                    <Loader />
                </Dimmer>
            </div>
        )
    }
}

const mapState = (state, props) => {
    return {
        loading: state.auth.loading,
        confirming: state.auth.confirmingLogin,
        loggedIn: ['signedIn'].includes(props.authState),
        user: state.auth.profile,
    }
}

const mapDispatch = {
    login,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: async (
            values,
            { props: { login, user, authState, onStateChange }, resetForm },
        ) => {
            try {
                await login(values, onStateChange)
            } catch (error) {}
        },
    }),
)(Login)
