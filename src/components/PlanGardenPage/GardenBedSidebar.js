// @flow
import React, { Component } from 'react'
import { Grid, Sidebar } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import type { Bed } from '../../data/bed'

const BedContainer = styled(Grid)`
    display: flex;
    flex-direction: row;
    background-color: #00000030;
    min-height: 100px;
`

type Props = {
    visibleSidebar: boolean,
    beds: Array<Bed>,
    dropTargetConnector: any,
    selectedBed: Bed,
}

class GardenBedSidebar extends Component<Props> {
    render() {
        const { visibleSidebar, beds, dropTargetConnector } = this.props
        return dropTargetConnector(
            <div>
                <Sidebar
                    animation="overlay"
                    direction={'bottom'}
                    visible={visibleSidebar}>
                    <BedContainer>
                        {beds.map(b => (
                            <Grid.Column key={b.id}>
                                <GardenBed bed={b} />
                            </Grid.Column>
                        ))}
                    </BedContainer>
                </Sidebar>
            </div>,
        )
    }
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const item = monitor.getItem()
        const newItem = { ...item, x: 0, y: 0, hasDropped: false }
        props.handleDrop(newItem)
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
