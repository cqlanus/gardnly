// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import { GRID_SQUARE } from '../../data/Garden'
import type { Bed } from '../../data/Garden'

type Props = {
    bed: Bed,
    connectDragSource: any,
    hasDropped: boolean,
    length: string,
    width: string,
}

type State = {
    length: number,
    width: number,
}

class GardenBed extends Component<Props, State> {
    static defaultProps = {
        length: 4,
        width: 8,
    }

    state = {
        length: this.props.bed.length * GRID_SQUARE,
        width: this.props.bed.width * GRID_SQUARE,
    }

    rotateBed = () => {
        this.setState(prev => ({
            length: prev.width,
            width: prev.length,
        }))
    }

    render() {
        const { length, width } = this.state
        const { bed, connectDragSource } = this.props
        const { name, x: left, y: top, hasDropped } = bed
        const { bedContainer } = styles
        const position = hasDropped ? 'absolute' : 'relative'
        const bedStyle = {
            ...bedContainer,
            height: length,
            width,
            top,
            left,
            position,
        }
        return connectDragSource(
            <div style={bedStyle} onDoubleClick={this.rotateBed}>
                <span>{name}</span>
            </div>,
        )
    }
}

const styles = {
    bedContainer: {
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
