// @flow
import type { Bed, CropPosition } from '../../data/bed'
import type { Planting } from '../../data/crop'
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

const Square = styled.div`
    height: 75px;
    width: 75px;
    opacity: ${props => (props.selected ? '0.5' : '1.0')};
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
    handleSelect: string => void,
    isOver: boolean,
    selected: boolean,
    crop: Planting,
    row: number,
    column: number,
    placeCrop: (Planting, CropPosition, Bed) => void,
    repositionCrop: (string, CropPosition, Bed) => void,
    removeCrop: (string, Bed) => void,
    handleHover: (Array<CropPosition>) => void,
    neighbors: Array<CropPosition>,
    bed: Bed,
}

const GRID_SQUARE = 75

class SquareFoot extends Component<Props> {
    handleSelect = crop => () => {
        const { handleSelect } = this.props
        crop && handleSelect(crop.id)
    }

    handleRemove = crop => () => {
        const { removeCrop, bed } = this.props
        removeCrop(crop.id, bed)
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
        const { crop, row, column, selected } = this.props
        const { numPerSqFt } = crop.crop || {}
        const array = arrayify(numPerSqFt)
        const { width, height } = defineCropHeightWidth(numPerSqFt, GRID_SQUARE)
        const { columns, rows } = defineCropGridStyles(numPerSqFt)
        const squarePosition = { row, column }
        return (
            <Square
                columns={columns}
                rows={rows}
                onClick={this.handleSelect(crop)}
                selected={selected}
                onDoubleClick={this.handleRemove(crop)}>
                {array.map(key => (
                    <Crop
                        key={key}
                        height={height}
                        width={width}
                        crop={crop.crop}
                        placed={true}
                        plantingId={crop.id}
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
            placeCrop(item, { row, column }, bed)
        } else if (item.placed) {
            const { plantingId } = item
            plantingId && repositionCrop(plantingId, { row, column }, bed)
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
