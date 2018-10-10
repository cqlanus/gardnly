// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    margin: 10px 0;
    display: flex;
`

type Props = {}

const LOGIN_FORM = {
    EMAIL: 'email',
    PASSWORD: 'password',
}

export default class Login extends Component<Props> {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form>
                    <Form.Input label={'Email'} />
                    <Form.Input label={'Password'} type={'password'} />
                </Form>
                <ButtonContainer>
                    <Button primary fluid as={Link} to={'/landing/signup'}>
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
