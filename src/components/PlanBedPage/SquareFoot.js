// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import Crop from './Crop'
import { createArrayFromNumber } from '../../utils/common'
import { defineCropHeightWidth, defineCropGridStyles } from '../../utils/bed'

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
        const { squareFoot, overStyle } = styles
        const { isOver, dropTargetConnector } = this.props
        const over = isOver ? overStyle : {}
        const sqFtStyle = { ...squareFoot, ...over }
        return dropTargetConnector(<div style={sqFtStyle} />)
    }

    renderCrop = () => {
        const { squareFoot } = styles
        const { crop } = this.props
        const { cropImg, numPerSqFt } = crop || {}
        const array = createArrayFromNumber(numPerSqFt)
        const { width, height } = defineCropHeightWidth(numPerSqFt, GRID_SQUARE)
        const gridColumnAndRows = defineCropGridStyles(numPerSqFt)
        console.log({ numPerSqFt })
        console.log(width, height)
        console.log({ gridColumnAndRows })
        const gridStyle = { ...squareFoot, ...gridColumnAndRows }
        return (
            <div style={gridStyle}>
                {array.map(key => (
                    <Crop
                        key={key}
                        height={height}
                        width={width}
                        cropImg={cropImg}
                        shouldDrag={false}
                    />
                ))}
            </div>
        )
    }

    render() {
        const { crop } = this.props
        return crop ? this.renderCrop() : this.renderSquare()
    }
}

const styles = {
    squareFoot: {
        height: '75px',
        width: '75px',
        borderTop: '0.5px solid #aaa',
        borderLeft: '0.5px solid #aaa',
        display: 'grid',
    },
    overStyle: {
        backgroundColor: '#FC0',
    },
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const { placeCrop, row, column } = props
        const item = monitor.getItem()
        console.log({ item })
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
