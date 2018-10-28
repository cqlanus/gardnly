// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Grid, Menu, Button } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Bed from './Bed'
import CropSidebar from '../CropSidebar/CropSidebar'
import { selectBed } from '../../redux/bed'
import { getCrops } from '../../redux/crop'

type Props = {
    beds: Array<*>,
    selectedBed: any,
    history: any,
    selectBed: any => void,
    getCrops: () => void,
    crops: Array<*>,
}

type State = {
    plantsVisible: boolean,
}

class PlanBedPage extends Component<Props, State> {
    state = {
        plantsVisible: false,
    }

    componentDidMount() {
        const { history, selectedBed, getCrops } = this.props
        getCrops()
        !selectedBed && history.push('/home')
    }

    toggleCrops = () => {
        this.setState(p => ({ plantsVisible: !p.plantsVisible }))
    }

    handleTabClick = (bed: Bed) => () => {
        const { selectBed } = this.props
        selectBed(bed)
    }

    renderTabs = () => {
        const { beds, selectedBed } = this.props

        return beds.map(bed => {
            const isActive = selectedBed.id === bed.id
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
        return (
            <Menu fluid tabular vertical>
                {this.renderTabs()}
            </Menu>
        )
    }

    render() {
        const { selectedBed, crops } = this.props
        const { plantsVisible } = this.state
        const buttonText = plantsVisible ? 'Hide Crops' : 'Show Crops'
        return (
            <div>
                <Grid padded>
                    <Grid.Column stretched width={2}>
                        {this.renderTabBar()}
                    </Grid.Column>
                    <Grid.Column>
                        <Bed bed={selectedBed} />
                    </Grid.Column>
                    <CropSidebar visible={plantsVisible} crops={crops} />
                </Grid>
                <Button onClick={this.toggleCrops}>{buttonText}</Button>
            </div>
        )
    }
}

const mapState = state => {
    const { beds, selectedBed } = state.bed
    const { crops } = state.crop
    return {
        beds,
        selectedBed,
        crops,
    }
}

const mapDispatch = {
    selectBed,
    getCrops,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
