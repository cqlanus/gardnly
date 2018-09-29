// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cuid from 'cuid'
import styled from 'styled-components'
import SquareFoot from './SquareFoot'
import { constructEmptyBed, placeCropInBed } from '../../redux/bed'

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const BedContainer = styled.div`
    display: inline-block;
    border-right: 0.5px solid #aaa;
    border-bottom: 0.5px solid #aaa;
`

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
        return <Row key={cuid()}>{row.map(this.renderSquareFoot(rowNum))}</Row>
    }

    render() {
        const { grid } = this.props
        return <BedContainer>{grid.map(this.renderBedRow)}</BedContainer>
    }
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
