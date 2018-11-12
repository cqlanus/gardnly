// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Menu, Button, Loader, Sidebar } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Bed from './Bed'
import CropSidebar from './CropSidebar'
import { getBed } from '../../redux/bed'
import { getCrops } from '../../redux/crop'
import { getGarden } from '../../redux/garden'
import {
    selectGarden,
    isBedLoading,
    selectBed,
    selectBeds,
    selectCrops,
} from '../../selectors'
import Strings from '../../resources/Strings'

const StyledSidebar = styled(Sidebar.Pushable)`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    margin: 20px;
    height: 100%;
`

type Props = {
    beds: Array<*>,
    selectedBed: any,
    match: any,
    getBed: any => void,
    getCrops: () => void,
    getGarden: string => void,
    crops: Array<*>,
    garden: any,
    loading: boolean,
}

type State = {
    plantsVisible: boolean,
    beds: ?Array<*>,
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
                <Menu tabular>{this.renderTabs(beds)}</Menu>
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

    render() {
        const { crops, loading, garden, beds } = this.props
        const { plantsVisible } = this.state
        const buttonText = plantsVisible ? Strings.hideCrops : Strings.showCrops

        if (!garden || !beds) {
            return null
        }

        return (
            <StyledSidebar>
                <Container>
                    <Loader active={loading} />
                    <h2>{garden.name}</h2>
                    <Button onClick={this.toggleCrops}>{buttonText}</Button>
                    <Sidebar.Pusher>
                        {this.renderTabBar()}
                        {this.renderBed()}
                    </Sidebar.Pusher>
                </Container>
                <CropSidebar visible={plantsVisible} crops={crops} />
            </StyledSidebar>
        )
    }
}

const mapState = state => {
    return {
        beds: selectBeds(state),
        selectedBed: selectBed(state),
        crops: selectCrops(state),
        garden: selectGarden(state),
        loading: isBedLoading(state),
    }
}

const mapDispatch = {
    getBed,
    getCrops,
    getGarden,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
