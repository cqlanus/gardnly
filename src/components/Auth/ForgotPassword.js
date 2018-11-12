// @flow
import React, { Component } from 'react'
import { withFormik } from 'formik'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Dimmer, Loader } from 'semantic-ui-react'
import { mapFormValues } from '../../utils/common'
import styled from 'styled-components'
import * as Yup from 'yup'
import { forgotPassword } from '../../redux/auth'
import { isAuthLoading } from '../../selectors'
import Strings from '../../resources/Strings'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledForm = styled(Form)`
    flex: 1;
`

const FORGOT_PASSWORD = {
    EMAIL: 'email',
}

const initialValues = {
    [FORGOT_PASSWORD.EMAIL]: '',
}

const validationSchema = Yup.object().shape({
    [FORGOT_PASSWORD.EMAIL]: Yup.string()
        .email()
        .required(),
})

type Props = {
    values: typeof initialValues,
    handleChange: string => void,
    errors: any,
    handleSubmit: (typeof initialValues) => void,
    authState: string,
    loading: boolean,
}

class ForgotPassword extends Component<Props> {
    render() {
        const {
            values,
            handleChange,
            errors,
            authState,
            handleSubmit,
            loading,
        } = this.props
        const valueForField = mapFormValues(values, initialValues)
        if (['forgotPassword'].includes(authState)) {
            return (
                <FormContainer>
                    <h1>{Strings.forgotPassword}</h1>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Input
                            value={valueForField(FORGOT_PASSWORD.EMAIL)}
                            name={FORGOT_PASSWORD.EMAIL}
                            onChange={handleChange}
                            fluid
                            label={'Email'}
                            error={!!errors[FORGOT_PASSWORD.EMAIL]}
                        />
                        <Form.Button type={'submit'} fluid primary>
                            {Strings.submit}
                        </Form.Button>
                    </StyledForm>
                    <Dimmer active={loading} page inverted>
                        <Loader />
                    </Dimmer>
                </FormContainer>
            )
        } else {
            return null
        }
    }
}

const mapState = state => {
    return {
        loading: isAuthLoading(state),
    }
}

const mapDispatch = {
    forgotPassword,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (
            { email },
            { props: { forgotPassword, onStateChange } },
        ) => {
            forgotPassword(email, onStateChange)
        },
        validationSchema,
    }),
)(ForgotPassword)
