// @flow
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AddGardenForm from './AddGardenForm'
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

export default class NewGardenForms extends Component<Props> {
    render() {
        const { match } = this.props
        return (
            <MainContainer>
                <Route exact path={match.path} component={AddGardenForm} />
                <Route path={`${match.path}/bed`} component={AddBedForm} />
            </MainContainer>
        )
    }
}
