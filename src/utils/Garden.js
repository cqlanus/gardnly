// @flow
import ReactDOM from 'react-dom'

export const snapToGrid = (x: number, y: number, grid: number = 20) => {
    const snappedX = Math.round(x / grid) * grid
    const snappedY = Math.round(y / grid) * grid
    return { top: snappedY, left: snappedX }
}

export const positionBed = (monitor: any, component: any) => {
    const node = ReactDOM.findDOMNode(component)
    const rect = node.getBoundingClientRect()
    const { top, left } = rect
    const { x, y } = monitor.getSourceClientOffset()
    const endX = x - left
    const endY = y - top
    return snapToGrid(endX, endY)
    // return { top: endY, left: endX }
}
