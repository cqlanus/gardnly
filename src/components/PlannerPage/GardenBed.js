// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import { GRID_SQUARE } from '../../data/Garden'
import type { Bed } from '../../data/Garden'

type Props = {
    bed: Bed,
    connectDragSource: any,
    connectDragPreview: any,
    hasDropped: boolean,
    length: string,
    width: string,
}

type State = {
    length: number,
    width: number,
    isHighlight: boolean,
}

class GardenBed extends Component<Props, State> {
    static defaultProps = {
        length: 8,
        width: 4,
    }

    state = {
        length: this.props.bed.length * GRID_SQUARE,
        width: this.props.bed.width * GRID_SQUARE,
        isHighlight: false,
    }

    rotateBed = () => {
        this.setState(prev => ({
            length: prev.width,
            width: prev.length,
        }))
    }

    highlightOn = () => this.setState({ isHighlight: true })

    highlightOff = () => this.setState({ isHighlight: false })

    render() {
        const { length, width, isHighlight } = this.state
        const { bed, connectDragSource, connectDragPreview } = this.props
        const { name, x: left, y: top, hasDropped } = bed
        const { bedContainer } = styles
        const position = hasDropped ? 'absolute' : 'static'
        const backgroundColor = isHighlight ? '#ccc' : '#fff'
        const cursor = isHighlight && 'move'
        const bedStyle = {
            ...bedContainer,
            height: length,
            width,
            top,
            left,
            position,
            backgroundColor,
            cursor,
        }
        return connectDragPreview(
            <div style={bedStyle} onDoubleClick={this.rotateBed}>
                {connectDragSource(
                    <span
                        onMouseEnter={this.highlightOn}
                        onMouseOut={this.highlightOff}>
                        {name}
                    </span>,
                )}
            </div>,
        )
    }
}

const styles = {
    bedContainer: {
        border: '1px solid black',
        marginRight: '10px',
    },
}

const dragSource = {
    beginDrag: props => props.bed,
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}

export default DragSource(DnDTypes.BED_GARDEN, dragSource, collect)(GardenBed)
