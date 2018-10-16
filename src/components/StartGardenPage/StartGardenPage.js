// @flow
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StartGardenForm from './StartGardenForm'
import AddBedForm from './AddBedForm'
import styled from 'styled-components'

const MainContainer = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

type Props = {
    match: { path: string },
}

export default class StartGardenPage extends Component<Props> {
    render() {
        const { match } = this.props
        console.log({ match })
        return (
            <MainContainer>
                <Route exact path={match.path} component={StartGardenForm} />
                <Route path={`${match.path}/0`} component={AddBedForm} />
            </MainContainer>
        )
    }
}
