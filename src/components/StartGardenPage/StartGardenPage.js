// @flow
import React, { Component } from 'react'
import StartGardenForm from './StartGardenForm'
// import AddBedForm from './AddBedForm'
import styled from 'styled-components'

const MainContainer = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

type Props = {}

export default class StartGardenPage extends Component<Props> {
    render() {
        return (
            <MainContainer>
                <StartGardenForm />
                {/* <Grid.Column width={6}>
                    <Route exact path={'/start'} component={StartGardenForm} />
                    <Route path={'/start/0'} component={AddBedForm} />
                </Grid.Column> */}
            </MainContainer>
        )
    }
}
