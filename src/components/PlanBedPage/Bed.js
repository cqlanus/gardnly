// @flow
import type { Bed as BedType, CropPosition } from '../../data/bed'
import type { Planting } from '../../data/crop'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cuid from 'cuid'
import styled from 'styled-components'
import SquareFoot from './SquareFoot'
import {
    placeCropInBed,
    repositionCropInBed,
    removeCropFromBed,
} from '../../redux/bed'
import { selectGrid } from '../../selectors'

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const BedContainer = styled.div`
    display: inline-block;
    border-right: 0.5px solid #aaa;
    border-bottom: 0.5px solid #aaa;
`
const Main = styled.div`
    flex: 1;
`

type Props = {
    length: number,
    width: number,
    grid: Array<Array<Planting>>,
    placeCropInBed: (Planting, CropPosition, BedType) => void,
    repositionCropInBed: (string, CropPosition, CropPosition, BedType) => void,
    removeCropFromBed: (CropPosition, BedType) => void,
    bed: BedType,
}

type State = {
    neighbors: Array<CropPosition>,
}

class Bed extends Component<Props, State> {
    static defaultProps = {
        width: 8,
        length: 4,
    }

    state = {
        neighbors: [],
    }

    handleHover = neighbors => this.setState({ neighbors })

    renderSquareFoot = (rowNumber: number) => (
        crop: ?any,
        colNumber: number,
    ) => {
        const {
            placeCropInBed,
            bed,
            repositionCropInBed,
            removeCropFromBed,
        } = this.props
        return (
            <SquareFoot
                placeCrop={placeCropInBed}
                repositionCrop={repositionCropInBed}
                removeCrop={removeCropFromBed}
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
        const { bed } = this.props
        const { grid } = bed || {}
        return (
            <Main>
                <BedContainer>
                    {grid && grid.map(this.renderBedRow)}
                </BedContainer>
            </Main>
        )
    }
}

const mapState = state => {
    return {
        grid: selectGrid(state),
    }
}

const mapDispatch = {
    placeCropInBed,
    repositionCropInBed,
    removeCropFromBed,
}

export default connect(
    mapState,
    mapDispatch,
)(Bed)
