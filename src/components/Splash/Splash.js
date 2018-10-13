// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

type Props = {}

class Splash extends Component<Props> {
    render() {
        return (
            <Main>
                <Button primary as={Link} to={'/login'}>
                    {'Come in'}
                </Button>
            </Main>
        )
    }
}

export default connect(
    null,
    null,
)(Splash)
