// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Form, Button, Loader, Dimmer } from 'semantic-ui-react'
import * as Yup from 'yup'
import { withFormik } from 'formik'
import styled from 'styled-components'
import { mapFormValues } from '../../utils/common'
import { signUp, logout } from '../../redux/user'

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
`

const SIGNUP_FORM = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    ZIP: 'zip',
    PASSWORD: 'password',
    CONFIRM_PASSWORD: 'confirmPassword',
}

const initialValues = {
    [SIGNUP_FORM.FIRST_NAME]: '',
    [SIGNUP_FORM.LAST_NAME]: '',
    [SIGNUP_FORM.EMAIL]: '',
    [SIGNUP_FORM.ZIP]: '',
    [SIGNUP_FORM.PASSWORD]: '',
    [SIGNUP_FORM.CONFIRM_PASSWORD]: '',
}

const validationSchema = Yup.object().shape({
    [SIGNUP_FORM.FIRST_NAME]: Yup.string().required(),
    [SIGNUP_FORM.LAST_NAME]: Yup.string().required(),
    [SIGNUP_FORM.EMAIL]: Yup.string()
        .email()
        .required(),
    [SIGNUP_FORM.ZIP]: Yup.string().required(),
    [SIGNUP_FORM.PASSWORD]: Yup.string()
        .required()
        .min(8),
    [SIGNUP_FORM.CONFIRM_PASSWORD]: Yup.string()
        .required()
        .oneOf([Yup.ref(SIGNUP_FORM.PASSWORD)]),
})

type Props = {
    handleSubmit: () => void,
    logout: () => void,
    signUp: (typeof initialValues) => void,
    values: typeof initialValues,
    handleChange: string => void,
    errors: { [$Values<typeof SIGNUP_FORM>]: string },
    confirmSignup: (string, string) => void,
    confirming: boolean,
    loading: boolean,
    authState: string,
}

type State = {}

class Signup extends Component<Props, State> {
    render() {
        const {
            values,
            handleChange,
            errors,
            confirmSignup,
            handleSubmit,
            confirming,
            loading,
            logout,
            authState,
        } = this.props
        const valueForField = mapFormValues(values, initialValues)

        if (!['signUp'].includes(authState)) {
            return null
        }

        return (
            <div>
                <div>
                    <h1>Signup</h1>
                    <Form>
                        <Form.Group widths={'equal'}>
                            <Form.Input
                                value={valueForField(SIGNUP_FORM.FIRST_NAME)}
                                name={SIGNUP_FORM.FIRST_NAME}
                                onChange={handleChange}
                                label={'First Name'}
                                error={!!errors[SIGNUP_FORM.FIRST_NAME]}
                            />
                            <Form.Input
                                value={valueForField(SIGNUP_FORM.LAST_NAME)}
                                name={SIGNUP_FORM.LAST_NAME}
                                onChange={handleChange}
                                label={'Last Name'}
                                error={!!errors[SIGNUP_FORM.LAST_NAME]}
                            />
                        </Form.Group>
                        <Form.Group widths={'equal'}>
                            <Form.Input
                                value={valueForField(SIGNUP_FORM.EMAIL)}
                                name={SIGNUP_FORM.EMAIL}
                                onChange={handleChange}
                                label={'Email'}
                                error={!!errors[SIGNUP_FORM.EMAIL]}
                            />
                            <Form.Input
                                value={valueForField(SIGNUP_FORM.ZIP)}
                                name={SIGNUP_FORM.ZIP}
                                onChange={handleChange}
                                label={'Zip Code'}
                                error={!!errors[SIGNUP_FORM.ZIP]}
                            />
                        </Form.Group>
                        <Form.Group widths={'equal'}>
                            <Form.Input
                                value={valueForField(SIGNUP_FORM.PASSWORD)}
                                name={SIGNUP_FORM.PASSWORD}
                                onChange={handleChange}
                                label={'Password'}
                                type={'password'}
                                error={!!errors[SIGNUP_FORM.PASSWORD]}
                            />
                            <Form.Input
                                value={valueForField(
                                    SIGNUP_FORM.CONFIRM_PASSWORD,
                                )}
                                name={SIGNUP_FORM.CONFIRM_PASSWORD}
                                onChange={handleChange}
                                label={'Confirm Password'}
                                type={'password'}
                                error={!!errors[SIGNUP_FORM.CONFIRM_PASSWORD]}
                            />
                        </Form.Group>
                    </Form>
                    <ButtonContainer>
                        <Button
                            type={'submit'}
                            primary
                            fluid
                            onClick={handleSubmit}>
                            {'Register'}
                        </Button>
                        <Button
                            primary
                            fluid
                            // as={Link}
                            // to={'/landing/login'}
                        >
                            {'Login'}
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button onClick={logout} fluid>
                            {'Sign In With Google'}
                        </Button>
                    </ButtonContainer>
                </div>
                <Dimmer active={loading} page inverted>
                    <Loader />
                </Dimmer>
            </div>
        )
    }
}

const mapState = state => {
    return {
        confirming: state.user.confirmingSignup,
        loading: state.user.loading,
    }
}

const mapDispatch = {
    signUp,
    logout,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        validationSchema,
        handleSubmit: (values, { props: { signUp, onStateChange } }) => {
            console.log({ values })
            signUp(values, onStateChange)
        },
    }),
)(Signup)
