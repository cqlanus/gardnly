// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import PlannerSpace from './PlannerSpace'

class PlanGardenPage extends Component<*> {
    render() {
        return (
            <Grid centered padded>
                <Grid.Column>
                    <PlannerSpace />
                </Grid.Column>
            </Grid>
        )
    }
}

export default DragDropContext(HTML5Backend)(PlanGardenPage)
