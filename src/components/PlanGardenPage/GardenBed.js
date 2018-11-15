// @flow
import type { Bed } from '../../data/bed'
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import { GRID_SQUARE } from '../../data/garden'
import { getInitialBedDimensions } from '../../utils/bed'

type Props = {
    bed: Bed,
    isSelected: boolean,
    selectBed: Bed => void,
    updateBed: Bed => void,
    connectDragSource: any,
    connectDragPreview: any,
    hasDropped: boolean,
    length: string,
    width: string,
}

type State = {
    isHighlight: boolean,
}

class GardenBed extends Component<Props, State> {
    static defaultProps = {
        length: 8,
        width: 4,
    }

    state = {
        isHighlight: false,
    }

    rotateBed = () => {
        const { bed } = this.props
        const invert = !bed.invert
        this.props.updateBed({ ...bed, invert })
    }

    handleSelectBed = () => {
        const { bed, selectBed } = this.props
        selectBed && selectBed(bed)
    }

    highlightOn = () => this.setState({ isHighlight: true })

    highlightOff = () => this.setState({ isHighlight: false })

    renderBackgroundColor = () => {
        const { isHighlight } = this.state
        const { isSelected } = this.props
        return isSelected ? '#FC5' : isHighlight ? '#ccc' : '#fff'
    }

    render() {
        const { isHighlight } = this.state
        const { bed, connectDragSource, connectDragPreview } = this.props
        const { length, width } = getInitialBedDimensions(GRID_SQUARE, bed)
        const { name, x: left, y: top, hasDropped } = bed
        const { bedContainer } = styles
        const position = hasDropped ? 'absolute' : 'static'
        const backgroundColor = this.renderBackgroundColor()
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
            <div
                style={bedStyle}
                onClick={this.handleSelectBed}
                onDoubleClick={this.rotateBed}>
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
