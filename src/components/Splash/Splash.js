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

type Props = {
    user: any,
    history: any,
}

class Splash extends Component<Props> {
    render() {
        const { user } = this.props
        const linkPath = user ? '/home' : '/login'
        return (
            <Main>
                <Button primary as={Link} to={linkPath}>
                    {'Come in'}
                </Button>
            </Main>
        )
    }
}

const mapState = state => {
    return { user: state.auth.profile }
}

export default connect(
    mapState,
    null,
)(Splash)
