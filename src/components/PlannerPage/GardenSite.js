// @flow
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

type Props = {
    DropTargetConnector: any,
}

class GardenSite extends Component<Props> {
    render() {
        const { DropTargetConnector } = this.props
        const { siteContainer } = styles
        return DropTargetConnector(
            <div style={siteContainer}>
                <h1>GardenSite</h1>
            </div>,
        )
    }
}

const styles = {
    siteContainer: {
        height: '300px',
        border: '1px solid black',
    },
}

const dropTarget = {
    drop: (props, monitor) => {
        const result = monitor.getItem()
        console.log({ result })
        return result
    },
    hover: (props, monitor) => {},
}

const collect = (connect, monitor) => ({
    DropTargetConnector: connect.dropTarget(),
})

export default DropTarget('bedGarden', dropTarget, collect)(GardenSite)
