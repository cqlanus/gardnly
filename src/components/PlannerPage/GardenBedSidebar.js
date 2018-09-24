// @flow
import React, { Component } from 'react'
import { Grid, Sidebar } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import type { Bed } from '../../data/Garden'

type Props = {
    visibleSidebar: boolean,
    beds: Array<Bed>,
    dropTargetConnector: any,
    selectedBed: Bed,
}

class GardenBedSidebar extends Component<Props> {
    render() {
        const { bedContainer } = styles
        const { visibleSidebar, beds, dropTargetConnector } = this.props
        return dropTargetConnector(
            <div>
                <Sidebar
                    animation="overlay"
                    direction={'bottom'}
                    visible={visibleSidebar}>
                    <Grid padded style={bedContainer}>
                        {beds.map(b => (
                            <Grid.Column key={b.id}>
                                <GardenBed bed={b} />
                            </Grid.Column>
                        ))}
                        <Grid.Column floated="right">
                            <h1>test</h1>
                        </Grid.Column>
                    </Grid>
                </Sidebar>
            </div>,
        )
    }
}

const styles = {
    bedContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#00000030',
        minHeight: '100px',
    },
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const item = monitor.getItem()
        const newItem = { ...item, x: 0, y: 0, hasDropped: false }
        props.handleDrop(newItem, false)
        return newItem
    },
    hover: (props, monitor) => {},
}

const collect = (connect, monitor) => ({
    dropTargetConnector: connect.dropTarget(),
})

export default DropTarget(DnDTypes.BED_GARDEN, dropTarget, collect)(
    GardenBedSidebar,
)
