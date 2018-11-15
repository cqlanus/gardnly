// @flow
import type { User } from '../../data/auth'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import { isAuthLoading, selectUser } from '../../selectors'
import Dashboard from '../Dashboard/Dashboard'

const HomeContainer = styled.div`
    height: 100%;
`

type Props = {
    onStateChange: (string, any) => void,
    authState: string,
    user: User,
    loading: boolean,
}

class Home extends Component<Props> {
    render() {
        const { loading, user } = this.props
        const shouldSpin = loading || !user
        return (
            <HomeContainer>
                <Dashboard />
                <Dimmer active={shouldSpin} page inverted>
                    <Loader />
                </Dimmer>
            </HomeContainer>
        )
    }
}

const mapState = state => {
    return {
        user: selectUser(state),
        loading: isAuthLoading(state),
    }
}

export default connect(
    mapState,
    null,
)(Home)
