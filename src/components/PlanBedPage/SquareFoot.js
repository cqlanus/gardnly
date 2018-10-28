// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'
import DnDTypes from '../../resources/DnDTypes'
import Crop from './Crop'
import { arrayify, getProps } from '../../utils/common'
import {
    defineCropHeightWidth,
    defineCropGridStyles,
    getNeighbors,
} from '../../utils/bed'
import type { Bed, CropPosition } from '../../data/bed'

const Square = styled.div`
    height: 75px;
    width: 75px;
    border-top: 0.5px solid #aaa;
    border-left: 0.5px solid #aaa;
    display: grid;
    grid-template-columns: ${getProps('columns')};
    grid-template-rows: ${getProps('rows')};
    background-color: ${({ isOver }) => (isOver ? '#FC0' : 'none')};
    &:hover {
        cursor: ${props => (props.crop ? 'grab' : 'default')};
    }
`

type Props = {
    dropTargetConnector: any => void,
    isOver: boolean,
    crop: any,
    row: number,
    column: number,
    placeCrop: (any, CropPosition, bed: Bed) => void,
    repositionCrop: (any, CropPosition, CropPosition, bed: Bed) => void,
    removeCrop: (CropPosition, bed: Bed) => void,
    handleHover: (Array<CropPosition>) => void,
    neighbors: Array<CropPosition>,
    bed: Bed,
}

const GRID_SQUARE = 75

class SquareFoot extends Component<Props> {
    handleRemove = () => {
        const { row, column, removeCrop, bed } = this.props
        removeCrop({ row, column }, bed)
    }

    renderSquare = () => {
        const { isOver, dropTargetConnector } = this.props
        return dropTargetConnector(
            <div>
                <Square isOver={isOver} />
            </div>,
        )
    }

    handleHover = () => {
        const { handleHover, row, column } = this.props
        const neighbors = getNeighbors({ row, column })
        handleHover(neighbors)
    }

    renderCrop = () => {
        const { crop, row, column } = this.props
        const { numPerSqFt } = crop.crop || {}
        const array = arrayify(numPerSqFt)
        const { width, height } = defineCropHeightWidth(numPerSqFt, GRID_SQUARE)
        const { columns, rows } = defineCropGridStyles(numPerSqFt)
        const squarePosition = { row, column }
        return (
            <Square
                columns={columns}
                rows={rows}
                onDoubleClick={this.handleRemove}>
                {array.map(key => (
                    <Crop
                        key={key}
                        height={height}
                        width={width}
                        crop={crop.crop}
                        placed={true}
                        position={squarePosition}
                    />
                ))}
            </Square>
        )
    }

    render() {
        const { crop } = this.props
        return crop ? this.renderCrop() : this.renderSquare()
    }
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const { placeCrop, repositionCrop, row, column, bed } = props
        const item = monitor.getItem()
        if (item && item.image && !item.placed) {
            console.log({ item })
            placeCrop(item, { row, column }, bed)
        } else if (item.placed) {
            repositionCrop(item, item.position, { row, column }, bed)
        }
        return item
    },
    hover: (props, monitor) => {
        return monitor.isOver()
    },
}

const collect = (connect, monitor) => ({
    dropTargetConnector: connect.dropTarget(),
    isOver: monitor.isOver(),
})

export default DropTarget(DnDTypes.CROP_BED, dropTarget, collect)(SquareFoot)
