// @flow
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Grid, Menu } from 'semantic-ui-react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import Crop from './Crop'
import Bed from './Bed'
import CropSidebar from '../CropSidebar/CropSidebar'
import { selectBed } from '../../redux/garden'
import { mockCrops } from '../../data/crop'

const CropContainer = styled.div`
    display: flex;
`

type Props = {
    beds: Array<*>,
    selectedBed: *,
    selectBed: any => void,
}

class PlanBedPage extends Component<Props> {
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

    renderCrops = () => {
        return (
            <CropContainer>
                {mockCrops.map(crop => (
                    <Crop
                        key={crop.id}
                        cropName={crop.name}
                        cropImg={crop.cropImg}
                        numPerSqFt={crop.numPerSqFt}
                    />
                ))}
            </CropContainer>
        )
    }

    render() {
        const { selectedBed } = this.props
        return (
            <div>
                <Grid padded>
                    <Grid.Column stretched width={2}>
                        {this.renderTabBar()}
                    </Grid.Column>
                    <Grid.Column>
                        <Bed bed={selectedBed} />
                    </Grid.Column>
                    <CropSidebar crops={mockCrops} />
                </Grid>
            </div>
        )
    }
}

const mapState = state => {
    const { beds, selectedBed } = state.garden
    return {
        beds,
        selectedBed,
    }
}

const mapDispatch = {
    selectBed,
}

export default compose(
    connect(
        mapState,
        mapDispatch,
    ),
    DragDropContext(HTML5Backend),
)(PlanBedPage)
