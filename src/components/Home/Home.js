// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import StartGardenPage from '../StartGardenPage/StartGardenPage'
import PlanBedPage from '../PlanBedPage/PlanBedPage'
import Dashboard from '../Dashboard/Dashboard'

const HomeContainer = styled.div`
    height: 100%;
`

type Props = {
    onStateChange: (string, any) => void,
    authState: string,
    user: any,
    history: any,
    match: any,
    loading: boolean,
}

class Home extends Component<Props> {
    render() {
        const { match, loading, user } = this.props
        const shouldSpin = loading || !user
        return (
            <HomeContainer>
                <Navbar />
                <Route exact path={match.path} component={Dashboard} />
                <Route
                    path={`${match.url}/addGarden`}
                    component={StartGardenPage}
                />
                <Route path={`${match.url}/bed`} component={PlanBedPage} />
                <Dimmer active={shouldSpin} page inverted>
                    <Loader />
                </Dimmer>
            </HomeContainer>
        )
    }
}

const mapState = state => {
    return {
        user: state.auth.profile,
        loading: state.auth.loading,
    }
}

export default connect(
    mapState,
    null,
)(Home)
