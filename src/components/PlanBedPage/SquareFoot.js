// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'
import DnDTypes from '../../resources/DnDTypes'
import Crop from './Crop'
import { createArrayFromNumber, getProps } from '../../utils/common'
import { defineCropHeightWidth, defineCropGridStyles } from '../../utils/bed'
import type { Bed, CropPosition } from '../../data/bed'

const Square = styled.div`
    height: 75px;
    width: 75px;
    border-top: 0.5px solid #aaa;
    border-left: 0.5px solid #aaa;
    display: grid;
    grid-template-columns: ${getProps('columns')};
    grid-template-rows: ${getProps('rows')};
    background-color: ${props => (props.isOver ? '#FC0' : 'none')};
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

    renderCrop = () => {
        const { crop, row, column } = this.props
        const { cropImg, numPerSqFt } = crop || {}
        const array = createArrayFromNumber(numPerSqFt)
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
                        cropImg={cropImg}
                        placed={true}
                        numPerSqFt={numPerSqFt}
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
        if (item && item.cropImg && !item.placed) {
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
