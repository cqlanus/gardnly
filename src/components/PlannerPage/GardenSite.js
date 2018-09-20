// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import { positionBed } from '../../utils/Garden'
import type { Bed } from '../../data/Garden'

type Props = {
    dropTargetConnector: any,
    handleDrop: Bed => void,
    placedBeds: Array<Bed>,
}

class GardenSite extends Component<Props> {
    garden: any
    render() {
        const { dropTargetConnector, placedBeds } = this.props
        const { siteContainer } = styles
        return dropTargetConnector(
            <div style={siteContainer} ref={c => (this.garden = c)}>
                <Grid padded>
                    <Grid.Column width={16}>
                        {placedBeds.map(b => (
                            <GardenBed key={b.id} bed={b} />
                        ))}
                    </Grid.Column>
                </Grid>
            </div>,
        )
    }
}

const styles = {
    siteContainer: {
        height: '300px',
        border: '1px solid black',
    },
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const { top: y, left: x } = positionBed(monitor, component)
        const item = monitor.getItem()
        const newItem = { ...item, x, y, hasDropped: true }
        props.handleDrop(newItem)
        return newItem
    },
    hover: (props, monitor) => {},
}

const collect = (connect, monitor) => ({
    dropTargetConnector: connect.dropTarget(),
})

export default DropTarget(DnDTypes.BED_GARDEN, dropTarget, collect)(GardenSite)
