// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import { positionBed } from '../../utils/Garden'
import type { Bed } from '../../data/Garden'
import { createArrayFromNumber } from '../../utils/common'

type Props = {
    dropTargetConnector: any,
    handleDrop: Bed => void,
    placedBeds: Array<Bed>,
    columns: number,
    rows: number,
}

const DEFAULT_COLUMNS = 15
const DEFAULT_ROWS = 12
const GRID_SQUARE = 30

class GardenSite extends Component<Props> {
    garden: any

    static defaultProps = {
        columns: DEFAULT_COLUMNS,
        rows: DEFAULT_ROWS,
    }

    renderRow = (idx: number) => {
        const { square, gridRow } = styles
        const { columns } = this.props
        const marginTop = idx * GRID_SQUARE
        const width = columns * GRID_SQUARE
        const rowStyle = Object.assign(
            {},
            square,
            gridRow,
            { marginTop },
            { width },
        )

        return <div key={idx} style={rowStyle} />
    }

    renderGardenRows = () => {
        const { rows } = this.props
        const array = createArrayFromNumber(rows)
        return array.map((_, idx) => this.renderRow(idx))
    }

    renderColumn = (idx: number) => {
        const { square, gridColumn } = styles
        const { rows } = this.props
        const marginLeft = idx * GRID_SQUARE
        const height = rows * GRID_SQUARE
        const rowStyle = Object.assign(
            {},
            square,
            gridColumn,
            { marginLeft },
            { height },
        )

        return <div key={idx} style={rowStyle} />
    }

    renderGardenColumns = () => {
        const { columns } = this.props
        const array = createArrayFromNumber(columns)
        return array.map((_, idx) => this.renderColumn(idx))
    }

    renderGardenGrid = () => {
        const { gridContainer } = styles
        const { columns, rows } = this.props
        const width = columns * GRID_SQUARE
        const height = rows * GRID_SQUARE
        const gridStyle = { ...gridContainer, height, width }
        return (
            <div style={gridStyle}>
                {this.renderGardenRows()}
                {this.renderGardenColumns()}
            </div>
        )
    }

    render() {
        const { dropTargetConnector, placedBeds, columns } = this.props
        const { siteContainer } = styles
        const maxWidth = columns * GRID_SQUARE
        const siteStyle = { ...siteContainer, maxWidth }
        return dropTargetConnector(
            <div style={siteStyle} ref={c => (this.garden = c)}>
                {this.renderGardenGrid()}
                {placedBeds.map(b => (
                    <GardenBed key={b.id} bed={b} />
                ))}
            </div>,
        )
    }
}

const styles = {
    siteContainer: {
        borderTop: '1px solid #ccc',
        borderLeft: '1px solid #ccc',
    },
    gridContainer: {
        position: 'relative',
    },
    gridRow: {
        position: 'absolute',
        height: GRID_SQUARE,
    },
    gridColumn: {
        position: 'absolute',
        width: GRID_SQUARE,
    },
    square: {
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        float: 'left',
        position: 'relative',
    },
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const { top: y, left: x } = positionBed(monitor, component, GRID_SQUARE)
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
