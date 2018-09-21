// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'
import type { Bed } from '../../data/Garden'

type Props = {
    bed: Bed,
    connectDragSource: any,
    hasDropped: boolean,
    height: string,
    width: string,
}

type State = {
    height: string,
    width: string,
}

class GardenBed extends Component<Props, State> {
    static defaultProps = {
        height: '50px',
        width: '100px',
    }

    state = {
        height: this.props.height,
        width: this.props.width,
    }

    rotateBed = () => {
        this.setState(prev => ({
            height: prev.width,
            width: prev.height,
        }))
    }

    render() {
        const { height, width } = this.state
        const { bed, connectDragSource } = this.props
        const { name, x: left, y: top, hasDropped } = bed
        const { bedContainer } = styles
        const position = hasDropped ? 'absolute' : 'relative'
        const bedStyle = { ...bedContainer, height, width, top, left, position }
        return connectDragSource(
            <div style={bedStyle} onDoubleClick={this.rotateBed}>
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
