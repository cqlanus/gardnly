// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import styled from 'styled-components'
import DnDTypes from '../../resources/DnDTypes'
import { getProps } from '../../utils/common'
import type { CropPosition } from '../../data/bed'

const ImageContainer = styled.div`
    height: ${getProps('height', '75px')};
    width: ${getProps('width', '75px')};
`

type Props = {
    height: string,
    width: string,
    cropImg: mixed,
    cropName: string,
    connectDragSource: any => void,
    placed: boolean,
    numPerSqFt: number,
    position: CropPosition,
}

class Crop extends Component<Props> {
    static defaultProps = {
        numPerSqFt: 1,
        placed: false,
    }

    renderCrop = () => {
        const { cropImg, height, width } = this.props
        return (
            <ImageContainer height={height} width={width}>
                <img src={cropImg} alt="" height={height} width={width} />
            </ImageContainer>
        )
    }

    render() {
        const { connectDragSource } = this.props
        return connectDragSource(<div>{this.renderCrop()}</div>)
    }
}

const dragSource = {
    beginDrag: props => ({
        cropImg: props.cropImg,
        numPerSqFt: props.numPerSqFt,
        placed: props.placed,
        position: props.position,
    }),
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    }
}

export default DragSource(DnDTypes.CROP_BED, dragSource, collect)(Crop)
