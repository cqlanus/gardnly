// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import styled from 'styled-components'
import DnDTypes from '../../resources/DnDTypes'

const getProps = (name, base) => p => p[name] || base

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
    shouldDrag: boolean,
    numPerSqFt: number,
}

class Crop extends Component<Props> {
    static defaultProps = {
        numPerSqFt: 1,
        shouldDrag: true,
    }

    renderCrop = () => {
        const { cropImg, height, width } = this.props
        return (
            <ImageContainer height={height} width={width}>
                <img src={cropImg} alt="" />
            </ImageContainer>
        )
    }

    render() {
        const { shouldDrag, connectDragSource } = this.props
        return shouldDrag
            ? connectDragSource(<div>{this.renderCrop()}</div>)
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
