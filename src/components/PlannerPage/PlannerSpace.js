// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import NewGardenModal from './NewGardenModal'
import GardenSite from './GardenSite'
import GardenBed from './GardenBed'
import type { Garden, Bed } from '../../data/Garden'

type State = {
    gardens: Array<Garden>,
    placedBeds: Array<Bed>,
    unplacedBeds: Array<Bed>,
}

const beds = [
    { name: 'bed 1', id: 1, hasDropped: false },
    { name: 'bed 2', id: 2, hasDropped: false },
    { name: 'bed 3', id: 3, hasDropped: false },
]

export default class PlannerSpace extends Component<*, State> {
    state = {
        gardens: [],
        placedBeds: [],
        unplacedBeds: beds,
    }

    addGarden = (garden: Garden) => {
        console.log(garden)
        this.setState(prevState => ({
            gardens: [...prevState.gardens, garden],
        }))
    }

    handleDrop = (bed: Bed) => {
        const { unplacedBeds, placedBeds } = this.state
        const updatedUnplacedBeds = unplacedBeds.filter(b => b.id != bed.id)
        const hasBed = placedBeds.some(b => b.id === bed.id)
        const updatedPlacedBeds = hasBed
            ? placedBeds.map(b => (b.id === bed.id ? bed : b))
            : [...placedBeds, bed]
        this.setState({
            placedBeds: updatedPlacedBeds,
            unplacedBeds: updatedUnplacedBeds,
        })
    }

    render() {
        const { unplacedBeds, placedBeds } = this.state
        return (
            <div>
                <h1>Planner Space</h1>
                <NewGardenModal addGarden={this.addGarden} />
                <Grid padded>
                    <Grid.Column width={10}>
                        <GardenSite
                            handleDrop={this.handleDrop}
                            placedBeds={placedBeds}
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {unplacedBeds.map(b => (
                            <GardenBed key={b.id} bed={b} />
                        ))}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
