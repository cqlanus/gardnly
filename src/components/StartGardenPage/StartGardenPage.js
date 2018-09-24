// @flow
import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'
import StartGardenForm from './StartGardenForm'
import AddBedForm from './AddBedForm'

type Props = {}

export default class StartGardenPage extends Component<Props> {
    render() {
        const { mainContainer, bottomContainer } = styles
        return (
            <Grid padded style={mainContainer}>
                <Grid.Column>
                    <Grid
                        centered
                        verticalAlign="middle"
                        style={bottomContainer}>
                        <Grid.Column width={6}>
                            <Route
                                exact
                                path={'/start'}
                                component={StartGardenForm}
                            />
                            <Route path={'/start/0'} component={AddBedForm} />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

const styles = {
    bottomContainer: {
        height: '100%',
    },
    mainContainer: {
        height: '100%',
    },
}
