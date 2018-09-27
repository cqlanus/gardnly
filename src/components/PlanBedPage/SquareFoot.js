// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import Crop from './Crop'

type Props = {
    dropTargetConnector: any => void,
    isOver: boolean,
    crop: any,
    row: number,
    column: number,
    placeCrop: (any, { row: number, columns: number }) => void,
}

class Bed extends Component<Props> {
    renderSquare = () => {
        const { squareFoot, overStyle } = styles
        const { isOver } = this.props
        const over = isOver ? overStyle : {}
        const sqFtStyle = { ...squareFoot, ...over }
        return <div style={sqFtStyle} />
    }

    renderCrop = () => {
        const { crop } = this.props
        const image = crop ? crop.cropImg : null
        return (
            <div>
                <Crop cropImg={image} />
            </div>
        )
    }

    render() {
        const { dropTargetConnector, crop } = this.props
        const renderFunc = crop ? this.renderCrop : this.renderSquare
        return dropTargetConnector(renderFunc())
    }
}

const styles = {
    squareFoot: {
        height: '75px',
        width: '75px',
        borderTop: '0.5px solid #aaa',
        borderLeft: '0.5px solid #aaa',
    },
    overStyle: {
        backgroundColor: '#FC0',
    },
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
