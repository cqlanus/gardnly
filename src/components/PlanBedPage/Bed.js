// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cuid from 'cuid'
import SquareFoot from './SquareFoot'
import { constructEmptyBed, placeCropInBed } from '../../redux/bed'

type Props = {
    length: number,
    width: number,
    constructEmptyBed: (number, number) => void,
    grid: Array<Array<any>>,
    placeCropInBed: (any, { row: number, columns: number }) => void,
}

class Bed extends Component<Props> {
    static defaultProps = {
        width: 8,
        length: 4,
    }

    componentDidMount() {
        const { constructEmptyBed, length, width } = this.props
        constructEmptyBed(length, width)
    }

    renderSquareFoot = (rowNumber: number) => (
        crop: ?any,
        colNumber: number,
    ) => {
        const { placeCropInBed } = this.props
        return (
            <SquareFoot
                placeCrop={placeCropInBed}
                crop={crop}
                row={rowNumber}
                column={colNumber}
                key={cuid()}
            />
        )
    }

    renderBedRow = (row: Array<any>, rowNum: number) => {
        const { rowStyle } = styles
        return (
            <div key={cuid()} style={rowStyle}>
                {row.map(this.renderSquareFoot(rowNum))}
            </div>
        )
    }

    render() {
        const { bed } = styles
        const { grid } = this.props
        return <div style={bed}>{grid.map(this.renderBedRow)}</div>
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
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
    },
}

const mapState = state => {
    return {
        grid: state.bed.grid,
    }
}

const mapDispatch = {
    constructEmptyBed,
    placeCropInBed,
}

export default connect(
    mapState,
    mapDispatch,
)(Bed)
