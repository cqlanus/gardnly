// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NewGardenModal from './NewGardenModal'
import GardenSite from './GardenSite'
import GardenBed from './GardenBed'

type Garden = {
    name: string,
    length: number,
    width: number,
}

type State = {
    gardens: Array<Garden>,
}

const beds = [
    { name: 'bed 1', id: 1 },
    { name: 'bed 2', id: 2 },
    { name: 'bed 3', id: 3 },
]

export default class PlannerSpace extends Component<*, State> {
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
            <div>
                <h1>Planner Space</h1>
                <NewGardenModal addGarden={this.addGarden} />
                <Grid padded>
                    <Grid.Column width={10}>
                        <GardenSite />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {beds.map(b => (
                            <GardenBed key={b.id} bed={b} />
                        ))}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
