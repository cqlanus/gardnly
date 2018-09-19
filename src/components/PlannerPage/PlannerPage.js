// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import PlannerSpace from './PlannerSpace'

class PlannerPage extends Component<*> {
    render() {
        return (
            <Grid centered padded>
                <Grid.Column width={12}>
                    <Grid.Row>
                        <PlannerSpace />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h1>Crop Picker</h1>
                </Grid.Column>
            </Grid>
        )
    }
}

export default DragDropContext(HTML5Backend)(PlannerPage)
