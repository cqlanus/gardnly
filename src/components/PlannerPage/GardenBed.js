// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import type { Bed } from '../../data/Garden'

type Props = {
    bed: Bed,
    connectDragSource: any,
    hasDropped: boolean,
}

class GardenBed extends Component<Props> {
    render() {
        const { bedContainer } = styles
        const { bed, connectDragSource } = this.props
        const { name, x: left, y: top, hasDropped } = bed
        const position = hasDropped ? 'absolute' : 'relative'
        const style = Object.assign(
            {},
            bedContainer,
            { top },
            { left },
            { position },
        )
        return connectDragSource(
            <div style={style}>
                <span>{name}</span>
            </div>,
        )
    }
}

const styles = {
    bedContainer: {
        height: '50px',
        width: '100px',
        border: '1px solid black',
        marginBottom: '10px',
    },
}

const dragSource = {
    beginDrag: props => props.bed,
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
    }
}

export default DragSource(DnDTypes.BED_GARDEN, dragSource, collect)(GardenBed)
