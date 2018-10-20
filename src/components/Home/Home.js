// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import StartGardenPage from '../StartGardenPage/StartGardenPage'
import PlanBedPage from '../PlanBedPage/PlanBedPage'

type Props = {
    onStateChange: (string, any) => void,
    authState: string,
    user: any,
    history: any,
    match: any,
    loading: boolean,
}

const Landing = () => <h1>Home</h1>

class Home extends Component<Props> {
    componentDidUpdate() {
        const { user, history } = this.props
        if (!user) {
            history.replace('/')
        }
    }

    render() {
        const { match, loading } = this.props
        return (
            <div>
                <Navbar />
                <Route exact path={match.path} component={Landing} />
                <Route
                    path={`${match.url}/start`}
                    component={StartGardenPage}
                />
                <Route path={`${match.url}/bed`} component={PlanBedPage} />
                <Dimmer active={loading} page inverted>
                    <Loader />
                </Dimmer>
            </div>
        )
    }
}

const mapState = state => {
    return {
        loading: state.auth.loading,
    }
}

export default connect(
    mapState,
    null,
)(Home)
