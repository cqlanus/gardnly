// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'

type Props = {
    dropTargetConnector: any => void,
    isOver: boolean,
}

class TESTING extends Component<Props> {
    render() {
        const { squareFoot, overStyle } = styles
        const { dropTargetConnector, isOver } = this.props
        const over = isOver ? overStyle : {}
        const sqFtStyle = { ...squareFoot, ...over }
        return dropTargetConnector(<div style={sqFtStyle} />)
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
        const item = monitor.getItem()
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

export default DropTarget(DnDTypes.CROP_BED, dropTarget, collect)(TESTING)
