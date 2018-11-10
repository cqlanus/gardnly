// @flow
import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import FormModal from './FormModal'
import NewGardenForm from './NewGardenForm'
import NewGardenBedForm from './NewGardenBedForm'
import GardenSite from './GardenSite'
import GardenBedSidebar from './GardenBedSidebar'
import Strings from '../../resources/Strings'
import type { Garden } from '../../data/garden'
import type { Bed } from '../../data/bed'

type State = {
    gardens: Array<Garden>,
    placedBeds: Array<Bed>,
    unplacedBeds: Array<Bed>,
    visibleSidebar: boolean,
    selectedBed: ?string,
}

const beds = [
    { name: 'bed 1', id: '1', hasDropped: false, width: 8, length: 4 },
    { name: 'bed 2', id: '2', hasDropped: false, width: 8, length: 4 },
    { name: 'bed 3', id: '3', hasDropped: false, width: 8, length: 4 },
]

export default class PlannerSpace extends Component<*, State> {
    state = {
        gardens: [],
        placedBeds: [],
        unplacedBeds: beds,
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

    addGarden = (garden: Garden) => {
        this.setState(prevState => ({
            gardens: [...prevState.gardens, garden],
        }))
    }

    addBed = (bed: Bed) => {
        bed = { ...bed, id: bed.name }
        this.setState(prev => ({
            unplacedBeds: [...prev.unplacedBeds, bed],
        }))
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

    renderNewGardenModal = () => (
        <FormModal
            handleSubmit={this.addGarden}
            formTitle={Strings.createNewGarden}
            buttonTitle={Strings.createGarden}
            form={onSubmit => <NewGardenForm onSubmit={onSubmit} />}
        />
    )

    renderNewGardenBedModal = () => (
        <FormModal
            handleSubmit={this.addBed}
            formTitle={Strings.createNewBed}
            buttonTitle={Strings.createBed}
            form={onSubmit => <NewGardenBedForm onSubmit={onSubmit} />}
        />
    )

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
        return (
            <div>
                <h1>Planner Space</h1>
                {this.renderNewGardenModal()}
                {this.renderNewGardenBedModal()}
                <Button onClick={this.toggleSidebar}>{buttonText}</Button>
                <Grid>
                    <Grid.Column>
                        <GardenSite
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
