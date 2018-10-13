// @flow
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import StartGardenPage from '../StartGardenPage/StartGardenPage'
import PlanBedPage from '../PlanBedPage/PlanBedPage'

const Main = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

type Props = {
    onStateChange: (string, any) => void,
    authState: string,
    user: any,
    history: any,
    match: any,
}

const Landing = () => <h1>Home</h1>

export default class Home extends Component<Props> {
    componentDidUpdate() {
        const { user, history } = this.props
        if (!user) {
            history.replace('/')
        }
    }

    render() {
        const { match } = this.props
        return (
            <div>
                <Navbar />
                <Main>
                    <Route exact path={match.path} component={Landing} />
                    <Route
                        path={`${match.url}/start`}
                        component={StartGardenPage}
                    />
                    <Route path={`${match.url}/bed`} component={PlanBedPage} />
                </Main>
            </div>
        )
    }
}
