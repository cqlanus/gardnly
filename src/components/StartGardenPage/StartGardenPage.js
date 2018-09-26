// @flow
import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'
import StartGardenForm from './StartGardenForm'
import AddBedForm from './AddBedForm'

type Props = {}

export default class StartGardenPage extends Component<Props> {
    render() {
        const { mainContainer } = styles
        return (
            <Grid padded style={mainContainer} centered verticalAlign="middle">
                <Grid.Column width={6}>
                    <Route exact path={'/start'} component={StartGardenForm} />
                    <Route path={'/start/0'} component={AddBedForm} />
                </Grid.Column>
            </Grid>
        )
    }
}

const styles = {
    mainContainer: {
        height: '100%',
    },
}
