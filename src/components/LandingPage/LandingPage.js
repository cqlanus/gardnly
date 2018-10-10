// @flow
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Login from './Login'
import styled from 'styled-components'
import Signup from './Signup'

const GridContainer = styled(Grid)`
    height: 90%;
`

type Props = {
    match: { url: string },
}

export default class LandingPage extends Component<Props> {
    render() {
        const { match } = this.props
        return (
            <GridContainer padded centered verticalAlign="middle">
                <Grid.Column width={6}>
                    <Route path={`${match.url}/login`} component={Login} />
                    <Route path={`${match.url}/signup`} component={Signup} />
                </Grid.Column>
            </GridContainer>
        )
    }
}
