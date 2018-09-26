// @flow
import React, { Component } from 'react'
import cuid from 'cuid'
import { createArrayFromNumber } from '../../utils/common'
import SquareFoot from './SquareFoot'

type Props = {
    length: number,
    width: number,
}

export default class Bed extends Component<Props> {
    static defaultProps = {
        width: 8,
        length: 4,
    }

    renderSquareFoot = (num: number) => {
        return <SquareFoot key={cuid()} />
    }

    renderBedRow = (num: number) => {
        const { row } = styles
        const { width } = this.props
        const array = createArrayFromNumber(width)
        return (
            <div key={num} style={row}>
                {array.map(this.renderSquareFoot)}
            </div>
        )
    }

    render() {
        const { bed } = styles
        const { length } = this.props
        const array = createArrayFromNumber(length)
        return <div style={bed}>{array.map(this.renderBedRow)}</div>
    }
}

const styles = {
    bed: {
        display: 'inline-block',
        borderRight: '0.5px solid #aaa',
        borderBottom: '0.5px solid #aaa',
    },
    cell: {
        height: '75px',
        width: '75px',
        borderTop: '0.5px solid #aaa',
        borderLeft: '0.5px solid #aaa',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
}
