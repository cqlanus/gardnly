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
import { signUp } from '../../redux/auth'

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledLink = styled.span`
    cursor: pointer;
    color: #2185d0;
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
    signUp: (typeof initialValues) => void,
    values: typeof initialValues,
    handleChange: string => void,
    errors: { [$Values<typeof SIGNUP_FORM>]: string },
    confirmSignup: (string, string) => void,
    confirming: boolean,
    loading: boolean,
    authState: string,
    onStateChange: string => void,
}

type State = {}

class Signup extends Component<Props, State> {
    handleStateChange = (state: string) => () => this.props.onStateChange(state)

    render() {
        const {
            values,
            handleChange,
            errors,
            handleSubmit,
            loading,
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
                            onClick={this.handleStateChange('signIn')}>
                            {'Login'}
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button fluid>{'Sign In With Google'}</Button>
                    </ButtonContainer>
                    <LinkContainer>
                        <StyledLink
                            onClick={this.handleStateChange('confirmSignUp')}>
                            {'Confirm a code'}
                        </StyledLink>
                    </LinkContainer>
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
        confirming: state.auth.confirmingSignup,
        loading: state.auth.loading,
    }
}

const mapDispatch = {
    signUp,
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
