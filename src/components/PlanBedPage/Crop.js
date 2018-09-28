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
    shouldDrag: boolean,
    numPerSqFt: number,
}

class Crop extends Component<Props> {
    static defaultProps = {
        height: '75px',
        width: '75px',
        numPerSqFt: 1,
        shouldDrag: true,
    }

    renderCrop = () => {
        const { image } = styles
        const { cropImg, numPerSqFt, height, width } = this.props
        const imgStyle = { ...image, height, width }
        return (
            <div style={imgStyle}>
                <img src={cropImg} alt="" />
            </div>
        )
    }

    render() {
        const { shouldDrag, connectDragSource } = this.props
        return shouldDrag
            ? connectDragSource(this.renderCrop())
            : this.renderCrop()
    }
}

const styles = {
    image: {
        height: '75px',
        width: '75px',
    },
}

const dragSource = {
    beginDrag: props => ({
        cropImg: props.cropImg,
        numPerSqFt: props.numPerSqFt,
    }),
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}

export default DragSource(DnDTypes.CROP_BED, dragSource, collect)(Crop)
