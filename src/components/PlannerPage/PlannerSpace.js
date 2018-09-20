// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import FormModal from './FormModal'
import NewGardenForm from './NewGardenForm'
import NewGardenBedForm from './NewGardenBedForm'
import GardenSite from './GardenSite'
import GardenBed from './GardenBed'
import Strings from '../../resources/Strings'
import type { Garden, Bed } from '../../data/Garden'

type State = {
    gardens: Array<Garden>,
    placedBeds: Array<Bed>,
    unplacedBeds: Array<Bed>,
}

const beds = [
    { name: 'bed 1', id: '1', hasDropped: false },
    { name: 'bed 2', id: '2', hasDropped: false },
    { name: 'bed 3', id: '3', hasDropped: false },
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

    addBed = (bed: Bed) => {
        bed = { ...bed, id: bed.name }
        this.setState(prev => ({
            unplacedBeds: [...prev.unplacedBeds, bed],
        }))
    }

    handleDrop = (bed: Bed) => {
        const { unplacedBeds, placedBeds } = this.state
        const updatedUnplacedBeds = unplacedBeds.filter(b => b.id !== bed.id)
        const hasBed = placedBeds.some(b => b.id === bed.id)
        const updatedPlacedBeds = hasBed
            ? placedBeds.map(b => (b.id === bed.id ? bed : b))
            : [...placedBeds, bed]
        this.setState({
            placedBeds: updatedPlacedBeds,
            unplacedBeds: updatedUnplacedBeds,
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

    render() {
        const { unplacedBeds, placedBeds } = this.state
        return (
            <div>
                <h1>Planner Space</h1>
                {this.renderNewGardenModal()}
                {this.renderNewGardenBedModal()}
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
