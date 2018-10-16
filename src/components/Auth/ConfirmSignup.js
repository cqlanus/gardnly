// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Form } from 'semantic-ui-react'
import { mapFormValues } from '../../utils/common'
import { withFormik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { confirmSignup, resendCode } from '../../redux/auth'
import { AUTH_STATE } from '../../data/auth'

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`

const StyledLink = styled.span`
    cursor: pointer;
    color: #2185d0;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledForm = styled(Form)`
    flex: 1;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`

const CONFIRM_SIGNUP = {
    CONFIRM_CODE: 'confirmCode',
    EMAIL: 'email',
}

const initialValues = {
    [CONFIRM_SIGNUP.CONFIRM_CODE]: '',
    [CONFIRM_SIGNUP.EMAIL]: '',
}

const validationSchema = Yup.object().shape({
    [CONFIRM_SIGNUP.EMAIL]: Yup.string()
        .email()
        .required(),
})

type Props = {
    open: boolean,
    closeModal: () => void,
    handleSubmit: () => void,
    resetForm: () => void,
    values: typeof initialValues,
    handleChange: string => void,
    confirmSignup: (string, string) => void,
    onStateChange: string => void,
    resendCode: (string, () => void) => void,
    validateForm: (typeof initialValues) => Promise<*>,
    authState: string,
    errors: any,
}

class ConfirmSignup extends Component<Props> {
    handleSignup = () => this.props.onStateChange(AUTH_STATE.SIGN_UP)

    handleLogin = () => this.props.onStateChange(AUTH_STATE.SIGN_IN)

    handleResendCode = async () => {
        const { values, resendCode, validateForm, resetForm } = this.props
        const errors = await validateForm(values)
        if (!errors.email) {
            resendCode(values.email, resetForm)
        }
    }

    render() {
        const {
            values,
            handleChange,
            handleSubmit,
            authState,
            errors,
        } = this.props
        const valueForField = mapFormValues(values, initialValues)
        if (['confirmSignUp'].includes(authState)) {
            return (
                <FormContainer>
                    <h1>Confirm your account</h1>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Input
                            value={valueForField(CONFIRM_SIGNUP.EMAIL)}
                            name={CONFIRM_SIGNUP.EMAIL}
                            onChange={handleChange}
                            fluid
                            label={'Email'}
                            error={!!errors[CONFIRM_SIGNUP.EMAIL]}
                        />
                        <Form.Input
                            value={valueForField(CONFIRM_SIGNUP.CONFIRM_CODE)}
                            name={CONFIRM_SIGNUP.CONFIRM_CODE}
                            onChange={handleChange}
                            fluid
                            label={'Confirmation code'}
                        />
                        <ButtonContainer>
                            <StyledLink onClick={this.handleLogin}>
                                {'Back to login'}
                            </StyledLink>
                            <StyledLink onClick={this.handleSignup}>
                                {'Back to sign up'}
                            </StyledLink>
                        </ButtonContainer>
                        <Form.Button type={'submit'} fluid primary>
                            {'Submit'}
                        </Form.Button>
                    </StyledForm>

                    <LinkContainer>
                        <StyledLink onClick={this.handleResendCode}>
                            {'Resend code'}
                        </StyledLink>
                    </LinkContainer>
                </FormContainer>
            )
        } else {
            return null
        }
    }
}

const mapDispatch = {
    confirmSignup,
    resendCode,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (
            { confirmCode, email },
            { props: { confirmSignup } },
        ) => {
            confirmSignup(email, confirmCode)
        },
        validationSchema,
    }),
)(ConfirmSignup)
