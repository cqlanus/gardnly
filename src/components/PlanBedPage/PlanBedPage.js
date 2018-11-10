// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Menu, Button, Loader, Sidebar } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Bed from './Bed'
import CropSidebar from '../CropSidebar/CropSidebar'
import { getBed } from '../../redux/bed'
import { getCrops } from '../../redux/crop'
import {
    selectGarden,
    isBedLoading,
    selectBed,
    selectBeds,
    selectCrops,
} from '../../selectors'

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
    history: any,
    getBed: any => void,
    getCrops: () => void,
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

    _onCreateSub = null

    componentDidMount() {
        const { history, garden, getCrops } = this.props
        getCrops()
        !garden && history.push('/home')
    }

    componentWillUnmount() {
        this._onCreateSub && this._onCreateSub.unsubscribe()
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
            return <div>{'Please select a bed'}</div>
        } else {
            return <Bed bed={bed} />
        }
    }

    render() {
        const { crops, loading, garden } = this.props
        const { plantsVisible } = this.state
        const buttonText = plantsVisible ? 'Hide Crops' : 'Show Crops'

        if (!garden) {
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
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
