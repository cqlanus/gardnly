// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Form } from 'semantic-ui-react'
import { mapFormValues } from '../../utils/common'
import { withFormik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import { forgotPasswordReset } from '../../redux/auth'
import type { ForgotPasswordOptions } from '../../redux/auth'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledForm = styled(Form)`
    flex: 1;
`

const FORGOT_PASSWORD_RESET = {
    CONFIRM_CODE: 'confirmCode',
    PASSWORD: 'password',
    EMAIL: 'email',
}

const initialValues = {
    [FORGOT_PASSWORD_RESET.CONFIRM_CODE]: '',
    [FORGOT_PASSWORD_RESET.PASSWORD]: '',
    [FORGOT_PASSWORD_RESET.EMAIL]: '',
}

const validationSchema = Yup.object().shape({
    [FORGOT_PASSWORD_RESET.EMAIL]: Yup.string()
        .email()
        .required(),
    [FORGOT_PASSWORD_RESET.PASSWORD]: Yup.string()
        .min(8)
        .required(),
    [FORGOT_PASSWORD_RESET.CONFIRM_CODE]: Yup.string().required(),
})

type Props = {
    open: boolean,
    closeModal: () => void,
    handleSubmit: () => void,
    resetForm: () => void,
    values: typeof initialValues,
    handleChange: string => void,
    validateForm: (typeof initialValues) => Promise<*>,
    authState: string,
    errors: any,
    forgotPasswordReset: (ForgotPasswordOptions, (string) => void) => void,
}

class ForgotPasswordReset extends Component<Props> {
    render() {
        const {
            values,
            handleChange,
            handleSubmit,
            authState,
            errors,
        } = this.props
        const valueForField = mapFormValues(values, initialValues)
        if (['forgotPasswordReset'].includes(authState)) {
            return (
                <FormContainer>
                    <h1>Reset your password</h1>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Input
                            value={valueForField(FORGOT_PASSWORD_RESET.EMAIL)}
                            name={FORGOT_PASSWORD_RESET.EMAIL}
                            onChange={handleChange}
                            fluid
                            label={'Email'}
                            error={!!errors[FORGOT_PASSWORD_RESET.EMAIL]}
                        />
                        <Form.Input
                            value={valueForField(
                                FORGOT_PASSWORD_RESET.CONFIRM_CODE,
                            )}
                            name={FORGOT_PASSWORD_RESET.CONFIRM_CODE}
                            onChange={handleChange}
                            fluid
                            label={'Confirmation code'}
                            error={!!errors[FORGOT_PASSWORD_RESET.CONFIRM_CODE]}
                        />
                        <Form.Input
                            value={valueForField(
                                FORGOT_PASSWORD_RESET.PASSWORD,
                            )}
                            name={FORGOT_PASSWORD_RESET.PASSWORD}
                            onChange={handleChange}
                            fluid
                            label={'New Password'}
                            error={!!errors[FORGOT_PASSWORD_RESET.PASSWORD]}
                        />
                        <Form.Button type={'submit'} fluid primary>
                            {'Submit'}
                        </Form.Button>
                    </StyledForm>
                </FormContainer>
            )
        } else {
            return null
        }
    }
}

const mapDispatch = {
    forgotPasswordReset,
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (
            values,
            { props: { forgotPasswordReset, onStateChange } },
        ) => {
            forgotPasswordReset(values, onStateChange)
        },
        validationSchema,
    }),
)(ForgotPasswordReset)
