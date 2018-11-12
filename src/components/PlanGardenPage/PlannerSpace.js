// @flow
import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import GardenSite from './GardenSite'
import GardenBedSidebar from './GardenBedSidebar'
import type { Garden } from '../../data/garden'
import type { Bed } from '../../data/bed'

type Props = {
    garden: any,
}

type State = {
    gardens: Array<Garden>,
    placedBeds: Array<Bed>,
    unplacedBeds: Array<Bed>,
    visibleSidebar: boolean,
    selectedBed: ?string,
}

export default class PlannerSpace extends Component<Props, State> {
    state = {
        gardens: [],
        placedBeds: [],
        unplacedBeds: this.props.garden.beds.items,
        visibleSidebar: true,
        selectedBed: null,
    }

    componentDidUpdate(lastProps: any, lastState: State) {
        const { unplacedBeds: lastBeds } = lastState
        const { unplacedBeds } = this.state
        if (lastBeds.length > 0 && unplacedBeds.length === 0) {
            this.setState({ visibleSidebar: false })
        }
    }

    handlePlaceBed = (bed: Bed, placeInGarden: boolean = true) => {
        const { unplacedBeds, placedBeds } = this.state

        let updatedPlaced
        let updatedUnplaced
        if (placeInGarden) {
            updatedUnplaced = unplacedBeds.filter(b => b.id !== bed.id)
            const bedInGarden = placedBeds.some(b => b.id === bed.id)
            updatedPlaced = bedInGarden
                ? placedBeds.map(b => (b.id === bed.id ? bed : b))
                : [...placedBeds, bed]
        } else {
            const bedInGarden = unplacedBeds.some(b => b.id === bed.id)
            updatedUnplaced = bedInGarden
                ? unplacedBeds
                : [...unplacedBeds, bed]
            updatedPlaced = placedBeds.filter(b => b.id !== bed.id)
        }

        this.setState({
            placedBeds: updatedPlaced,
            unplacedBeds: updatedUnplaced,
        })
    }

    selectBed = (bed: Bed) => {
        const { selectedBed } = this.state
        const updatedBed = selectedBed && selectedBed === bed.id ? null : bed.id
        this.setState({ selectedBed: updatedBed })
    }

    toggleSidebar = () =>
        this.setState(prev => ({ visibleSidebar: !prev.visibleSidebar }))

    render() {
        const {
            unplacedBeds,
            placedBeds,
            visibleSidebar,
            selectedBed,
        } = this.state
        const buttonText = visibleSidebar ? 'Hide Beds' : 'View Beds'
        const { garden } = this.props
        return (
            <div>
                <h1>Planner Space</h1>
                <Button onClick={this.toggleSidebar}>{buttonText}</Button>
                <Grid>
                    <Grid.Column>
                        <GardenSite
                            garden={garden}
                            selectBed={this.selectBed}
                            selectedBed={selectedBed}
                            handleDrop={this.handlePlaceBed}
                            placedBeds={placedBeds}
                        />
                    </Grid.Column>
                </Grid>

                <GardenBedSidebar
                    beds={unplacedBeds}
                    selectedBed={selectedBed}
                    handleDrop={this.handlePlaceBed}
                    visibleSidebar={visibleSidebar}
                />
            </div>
        )
    }
}
