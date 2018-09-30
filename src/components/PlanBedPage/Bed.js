// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cuid from 'cuid'
import styled from 'styled-components'
import SquareFoot from './SquareFoot'
import { constructEmptyBed, placeCropInBed } from '../../redux/bed'
import type { Bed as BedType } from '../../data/bed'

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
    bed: BedType,
}

class Bed extends Component<Props> {
    static defaultProps = {
        width: 8,
        length: 4,
    }

    renderSquareFoot = (rowNumber: number) => (
        crop: ?any,
        colNumber: number,
    ) => {
        const { placeCropInBed, bed } = this.props
        return (
            <SquareFoot
                placeCrop={placeCropInBed}
                crop={crop}
                row={rowNumber}
                column={colNumber}
                bed={bed}
                key={cuid()}
            />
        )
    }

    renderBedRow = (row: Array<any>, rowNum: number) => {
        return <Row key={cuid()}>{row.map(this.renderSquareFoot(rowNum))}</Row>
    }

    render() {
        const { grid } = this.props.bed || {}
        return (
            <BedContainer>{grid && grid.map(this.renderBedRow)}</BedContainer>
        )
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
