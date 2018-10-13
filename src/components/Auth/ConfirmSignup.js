// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Form } from 'semantic-ui-react'
import { mapFormValues } from '../../utils/common'
import { withFormik } from 'formik'
import styled from 'styled-components'
import { confirmSignup } from '../../redux/user'

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
}

const initialValues = {
    [CONFIRM_SIGNUP.CONFIRM_CODE]: '',
}

type Props = {
    open: boolean,
    closeModal: () => void,
    handleSubmit: () => void,
    values: typeof initialValues,
    handleChange: string => void,
    confirmSignup: (string, string) => void,
    authState: string,
}

class ConfirmSignup extends Component<Props> {
    render() {
        const { values, handleChange, handleSubmit, authState } = this.props
        const valueForField = mapFormValues(values, initialValues)
        if (['confirmSignUp'].includes(authState)) {
            return (
                <FormContainer>
                    <StyledForm onSubmit={handleSubmit}>
                        <Form.Input
                            value={valueForField(CONFIRM_SIGNUP.CONFIRM_CODE)}
                            name={CONFIRM_SIGNUP.CONFIRM_CODE}
                            onChange={handleChange}
                            fluid
                            label={'Confirmation code'}
                        />
                        <Form.Button type={'submit'} fluid primary>
                            {'Submit'}
                        </Form.Button>
                    </StyledForm>
                    <LinkContainer>
                        {/* eslint-disable-next-line */}
                        <a href="#">{'Resend code'}</a>
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
}

export default compose(
    connect(
        null,
        mapDispatch,
    ),
    withFormik({
        mapPropsToValues: () => initialValues,
        handleSubmit: (
            { confirmCode },
            { props: { confirmSignup, username = 'cqlanus+6@gmail.com' } },
        ) => {
            confirmSignup(username, confirmCode)
        },
    }),
)(ConfirmSignup)
