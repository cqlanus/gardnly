// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button, Loader } from 'semantic-ui-react'
import GardenSite from './GardenSite'
import GardenBedSidebar from './GardenBedSidebar'
import type { Bed } from '../../data/bed'
import { placeBedInGarden } from '../../redux/bed'
import {
    selectPlacedBeds,
    selectUnplacedBeds,
    isBedLoading,
    isGardenLoading,
} from '../../selectors'

type Props = {
    garden: any,
    placeBedInGarden: Bed => void,
    placedBeds: Array<Bed>,
    unplacedBeds: Array<Bed>,
    loading: boolean,
}

type State = {
    visibleSidebar: boolean,
    selectedBed: ?string,
}

class PlannerSpace extends Component<Props, State> {
    state = {
        visibleSidebar: true,
        selectedBed: null,
    }

    componentDidUpdate(lastProps: any) {
        const { unplacedBeds: lastBeds } = lastProps
        const { unplacedBeds } = this.props
        if (lastBeds.length > 0 && unplacedBeds.length === 0) {
            this.setState({ visibleSidebar: false })
        }
    }

    handlePlaceBed = (bed: Bed) => {
        const { placeBedInGarden } = this.props
        placeBedInGarden(bed)
    }

    selectBed = (bed: Bed) => {
        const { selectedBed } = this.state
        const updatedBed = selectedBed && selectedBed === bed.id ? null : bed.id
        this.setState({ selectedBed: updatedBed })
    }

    toggleSidebar = () =>
        this.setState(prev => ({ visibleSidebar: !prev.visibleSidebar }))

    render() {
        const { visibleSidebar, selectedBed } = this.state
        const { unplacedBeds, placedBeds, garden, loading } = this.props
        const buttonText = visibleSidebar ? 'Hide Beds' : 'View Beds'
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
                <Loader active={loading} />
            </div>
        )
    }
}

const mapState = state => {
    const bedLoading = isBedLoading(state)
    const gardenLoading = isGardenLoading(state)
    return {
        placedBeds: selectPlacedBeds(state),
        unplacedBeds: selectUnplacedBeds(state),
        loading: bedLoading || gardenLoading,
    }
}

const mapDispatch = {
    placeBedInGarden,
}

export default connect(
    mapState,
    mapDispatch,
)(PlannerSpace)
