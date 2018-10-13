// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { Form, Button, Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import { mapFormValues } from '../../utils/common'
import { login, logout } from '../../redux/user'

const Main = styled.div`
    diplay: flex;
    justify-content: center;
    align-items: center;
`

const FormContainer = styled.div`
    width: 40%;
    padding: 10% 0;
    margin: 0 auto;
`

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
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
    logout: () => void,
    signUp: (typeof initialValues) => void,
    values: typeof initialValues,
    handleChange: string => void,
    login: (typeof initialValues) => void,
    loading: boolean,
    confirming: boolean,
    loggedIn: boolean,
    authState: string,
}

type State = {}

class Login extends Component<Props, State> {
    renderForm = () => {
        const { values, handleChange, handleSubmit, logout } = this.props
        const valueForField = mapFormValues(values, initialValues)
        return (
            <Main>
                <FormContainer>
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
                        <ButtonContainer>
                            <Button primary fluid>
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
                    <ButtonContainer onClick={logout}>
                        <Button fluid>{'Sign In With Google'}</Button>
                    </ButtonContainer>
                </FormContainer>
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
        loading: state.user.loading,
        confirming: state.user.confirmingLogin,
        loggedIn: ['signedIn'].includes(props.authState),
        user: state.user.profile,
    }
}

const mapDispatch = {
    login,
    logout,
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
                // resetForm()
            } catch (error) {}
        },
    }),
)(Login)
