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
    columns: number,
    rows: number,
}

const DEFAULT_COLUMNS = 12
const DEFAULT_ROWS = 12

class GardenSite extends Component<Props> {
    garden: any

    static defaultProps = {
        columns: DEFAULT_COLUMNS,
        rows: DEFAULT_ROWS,
    }

    createArray = (num: number) =>
        Array.apply(null, { length: num }).map(Number.call, Number)

    renderRow = (idx: number) => {
        const { columns } = this.props
        const array = this.createArray(columns)
        const { Column, Row } = Grid
        const { cell } = styles
        return (
            <Row key={idx} columns={columns}>
                {array.map(idx => (
                    <div key={idx} style={cell} />
                ))}
            </Row>
        )
    }

    renderAllRows = () => {
        const { rows } = this.props
        const array = this.createArray(rows)
        return array.map((_, idx) => this.renderRow(idx))
    }

    render() {
        const { dropTargetConnector, placedBeds } = this.props
        const { siteContainer } = styles
        return dropTargetConnector(
            <div style={siteContainer} ref={c => (this.garden = c)}>
                <Grid padded celled>
                    {this.renderAllRows()}
                    {placedBeds.map(b => (
                        <GardenBed key={b.id} bed={b} />
                    ))}
                </Grid>
            </div>,
        )
    }
}

const styles = {
    siteContainer: {
        border: '1px solid black',
    },
    cell: {
        height: '50px',
        width: '50px',
        border: '1px solid #dddddd70',
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
