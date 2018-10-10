// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import StartGardenForm from './StartGardenForm'
import AddBedForm from './AddBedForm'
import styled from 'styled-components'

const MainContainer = styled(Grid)`
    height: 100%;
`

type Props = {}

export default class StartGardenPage extends Component<Props> {
    render() {
        return (
            <MainContainer padded centered verticalAlign="middle">
                <Grid.Column width={6}>
                    <Route exact path={'/start'} component={StartGardenForm} />
                    <Route path={'/start/0'} component={AddBedForm} />
                </Grid.Column>
            </MainContainer>
        )
    }
}
