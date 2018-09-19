// @flow
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import type { Bed } from '../../data/Garden'

type Props = {
    dropTargetConnector: any,
    handleDrop: Bed => void,
    placedBeds: Array<Bed>,
}

class GardenSite extends Component<Props> {
    render() {
        const { dropTargetConnector, placedBeds } = this.props
        const { siteContainer } = styles
        return dropTargetConnector(
            <div style={siteContainer}>
                <h1>GardenSite</h1>
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
    drop: (props, monitor) => {
        const item = monitor.getItem()
        const { handleDrop, placedBeds } = props
        console.log({ item })
        const isBedPlaced = placedBeds.some(bed => bed.id === item.id)
        !isBedPlaced && handleDrop(item)
        return item
    },
    hover: (props, monitor) => {},
}

const collect = (connect, monitor) => ({
    dropTargetConnector: connect.dropTarget(),
})

export default DropTarget(DnDTypes.BED_GARDEN, dropTarget, collect)(GardenSite)
