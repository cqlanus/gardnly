// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NewGardenModal from './NewGardenModal'

type Garden = {
    name: string,
    length: number,
    width: number,
}

type State = {
    gardens: Array<Garden>,
}

export default class PlannerPage extends Component<*, State> {
    state = {
        gardens: [],
    }

    addGarden = (garden: Garden) => {
        console.log(garden)
        this.setState(prevState => ({
            gardens: [...prevState.gardens, garden],
        }))
    }

    render() {
        return (
            <Grid centered padded>
                <Grid.Column width={12}>
                    <Grid.Row>
                        <h1>Planner Space</h1>
                        <NewGardenModal addGarden={this.addGarden} />
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h1>Crop Picker</h1>
                </Grid.Column>
            </Grid>
        )
    }
}
