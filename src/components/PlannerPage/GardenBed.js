// @flow
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

type Props = {
    bed: { name: string, id: number },
    connectDragSource: any,
}

class GardenBed extends Component<Props> {
    render() {
        const { bedContainer } = styles
        const { bed, connectDragSource } = this.props
        const { name } = bed
        return connectDragSource(
            <div style={bedContainer}>
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
const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
})

export default DragSource('bedGarden', dragSource, collect)(GardenBed)
