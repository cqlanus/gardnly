// @flow
import type { Bed as BedType } from '../../data/bed'
import type { Garden } from '../../data/garden'
import type { Crop, Planting } from '../../data/crop'
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Menu, Button, Loader, Sidebar } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Bed from './Bed'
import CropSidebar from './CropSidebar'
import PlantingCard from './PlantingCard'
import BedCard from './BedCard'
import { getBed, updateCropInBed } from '../../redux/bed'
import { getCrops } from '../../redux/crop'
import { getGarden } from '../../redux/garden'
import {
    isBedLoading,
    selectCrops,
    selectPlanting,
    getCurrentGarden,
    getCurrentBed,
    getCurrentBeds
} from '../../selectors'
import Strings from '../../resources/Strings'

const StyledSidebar = styled(Sidebar.Pushable)`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    height: 100%;
    display: flex;
`

const GardenContainer = styled.div`
    margin-left: 20px;
`

type Props = {
    beds: Array<BedType>,
    selectedBed: BedType,
    match: any,
    getBed: any => void,
    getCrops: () => void,
    getGarden: string => void,
    crops: Array<Crop>,
    garden: Garden,
    loading: boolean,
    planting: Planting,
}

type State = {
    plantsVisible: boolean,
    beds: ?Array<BedType>,
}

class PlanBedPage extends Component<Props, State> {
    state = {
        plantsVisible: false,
        beds: null,
    }

    componentDidMount() {
        const { getCrops, getGarden, match } = this.props
        const {
            params: { gardenId },
        } = match
        gardenId && getGarden(gardenId)
        getCrops()
    }

    toggleCrops = () => {
        this.setState(p => ({ plantsVisible: !p.plantsVisible }))
    }

    handleTabClick = (bed: Bed) => () => {
        const { getBed } = this.props
        getBed(bed)
    }

    renderTabs = beds => {
        const { selectedBed } = this.props
        return beds.map((bed, idx) => {
            const isActive = selectedBed && selectedBed.id === bed.id
            return (
                <Menu.Item
                    key={bed.id}
                    name={bed.name}
                    active={isActive}
                    onClick={this.handleTabClick(bed)}
                />
            )
        })
    }

    renderTabBar = () => {
        const { beds } = this.props
        if (!beds) {
            return null
        }
        return (
            <div>
                <h3>{'Beds'}</h3>
                <Menu secondary pointing>
                    {this.renderTabs(beds)}
                </Menu>
            </div>
        )
    }

    renderBed = () => {
        const { selectedBed: bed } = this.props
        if (!bed) {
            return <div>{Strings.pleaseSelectBed}</div>
        } else {
            return <Bed bed={bed} />
        }
    }

    renderBedCard = () => {
        const { selectedBed: bed } = this.props
        if (!bed) {
            return null
        }
        return <BedCard bed={bed} />
    }

    renderGardenMenu = () => {
        return (
            <Menu vertical secondary pointing>
                <Menu.Item active name={'Plant Beds'} onClick={() => {}} />
                <Menu.Item name={'Position Beds'} onClick={() => {}} />
                <Menu.Item name={'Activity'} onClick={() => {}} />
            </Menu>
        )
    }

    render() {
        const {
            crops,
            loading,
            garden,
            beds,
            planting,
            updateCropInBed,
        } = this.props
        const { plantsVisible } = this.state
        const buttonText = plantsVisible ? Strings.hideCrops : Strings.showCrops

        if (!garden || !beds) {
            return null
        }

        return (
            <StyledSidebar>
                <Container>
                    {this.renderGardenMenu()}
                    <GardenContainer>
                        <h2>{garden.name}</h2>
                        <Button onClick={this.toggleCrops}>{buttonText}</Button>
                        <Sidebar.Pusher>
                            {this.renderTabBar()}
                            <PlantingCard
                                planting={planting}
                                updatePlanting={updateCropInBed}
                            />
                            {this.renderBed()}
                            {this.renderBedCard()}
                        </Sidebar.Pusher>
                    </GardenContainer>
                    <Loader active={loading} />
                </Container>
                <CropSidebar visible={plantsVisible} crops={crops} />
            </StyledSidebar>
        )
    }
}

const mapState = state => {
    // const beds = getCurrentBeds(state)
    // console.log({beds})
    return {
        beds: getCurrentBeds(state),
        selectedBed: getCurrentBed(state),
        crops: selectCrops(state),
        garden: getCurrentGarden(state),
        loading: isBedLoading(state),
        planting: selectPlanting(state),
    }
}

const mapDispatch = {
    getBed,
    getCrops,
    getGarden,
    updateCropInBed,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
