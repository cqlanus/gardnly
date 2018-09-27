// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import DnDTypes from '../../resources/DnDTypes'

type Props = {
    height: string,
    width: string,
    cropImg: mixed,
    cropName: string,
    connectDragSource: any => void,
}

class Crop extends Component<Props> {
    static defaultProps = {
        height: '75px',
        width: '75px',
    }

    render() {
        const { image } = styles
        const { cropImg, connectDragSource } = this.props
        return connectDragSource(
            <div style={image}>
                <img src={cropImg} alt="" />
            </div>,
        )
    }
}

const styles = {
    image: {
        height: '75px',
        width: '75px',
    },
}

const dragSource = {
    beginDrag: props => ({ cropImg: props.cropImg }),
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}

export default DragSource(DnDTypes.CROP_BED, dragSource, collect)(Crop)
