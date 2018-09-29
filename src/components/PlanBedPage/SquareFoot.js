// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'
import DnDTypes from '../../resources/DnDTypes'
import Crop from './Crop'
import { createArrayFromNumber, getProps } from '../../utils/common'
import { defineCropHeightWidth, defineCropGridStyles } from '../../utils/bed'

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
    placeCrop: (any, { row: number, columns: number }) => void,
}

const GRID_SQUARE = 75

class Bed extends Component<Props> {
    renderSquare = () => {
        const { isOver, dropTargetConnector } = this.props
        return dropTargetConnector(
            <div>
                <Square isOver={isOver} />
            </div>,
        )
    }

    renderCrop = () => {
        const { crop } = this.props
        const { cropImg, numPerSqFt } = crop || {}
        const array = createArrayFromNumber(numPerSqFt)
        const { width, height } = defineCropHeightWidth(numPerSqFt, GRID_SQUARE)
        const { columns, rows } = defineCropGridStyles(numPerSqFt)
        return (
            <Square columns={columns} rows={rows}>
                {array.map(key => (
                    <Crop
                        key={key}
                        height={height}
                        width={width}
                        cropImg={cropImg}
                        shouldDrag={false}
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
        const { placeCrop, row, column } = props
        const item = monitor.getItem()
        if (item && item.cropImg) {
            placeCrop(item, { row, column })
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

export default DropTarget(DnDTypes.CROP_BED, dropTarget, collect)(Bed)
