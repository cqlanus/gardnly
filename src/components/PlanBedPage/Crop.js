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
    crop: any,
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
        const { height, width, crop } = this.props
        if (!crop) {
            return null
        }
        return (
            <ImageContainer height={height} width={width}>
                <img src={crop.image} alt="" height={height} width={width} />
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
        ...props.crop,
        plantingId: props.plantingId,
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
