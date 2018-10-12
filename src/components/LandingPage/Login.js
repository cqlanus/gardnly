// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFormik } from 'formik'
import { Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { mapFormValues } from '../../utils/common'
import { login } from '../../redux/user'

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
    signUp: (typeof initialValues) => void,
    values: typeof initialValues,
    handleChange: string => void,
    login: (typeof initialValues) => void,
}

type State = {
    confirming: boolean,
}

class Login extends Component<Props, State> {
    state = {
        confirming: false,
    }

    render() {
        const { values, handleChange, handleSubmit } = this.props
        const valueForField = mapFormValues(values, initialValues)
        /* const { confirming } = this.state */
        return (
            <div>
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
                </Form>
                <ButtonContainer>
                    <Button primary fluid>
                        {'Register'}
                    </Button>
                    <Button primary fluid>
                        {'Login'}
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button fluid>{'Sign In With Google'}</Button>
                </ButtonContainer>
            </div>
        )
    }
}

const mapDispatch = {
    login,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: initialValues,
        handleSubmit: (values, { props: { login } }) => {
            login(values)
        },
    }),
)(Login)
