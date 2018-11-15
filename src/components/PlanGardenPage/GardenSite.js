// @flow
import type { Bed } from '../../data/bed'
import type { Garden } from '../../data/garden'
import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import styled from 'styled-components'
import GardenBed from './GardenBed'
import DnDTypes from '../../resources/DnDTypes'
import { positionBed } from '../../utils/garden'
import { GRID_SQUARE } from '../../data/garden'
import { arrayify } from '../../utils/common'

const SiteContainer = styled.div`
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    max-width: ${({ width }) => `${width * GRID_SQUARE}px`};
`

const GridContainer = styled.div`
    position: relative;
    height: ${({ height }) => `${height * GRID_SQUARE}px`};
    width: ${({ width }) => `${width * GRID_SQUARE}px`};
`

const Row = styled.div`
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    float: left;
    position: absolute;
    height: ${() => `${GRID_SQUARE}px`};
    width: ${({ width }) => `${width * GRID_SQUARE}px`};
    margin-top: ${({ margin }) => `${margin * GRID_SQUARE}px`};
`

const Column = styled.div`
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    float: left;
    position: absolute;
    width: ${() => `${GRID_SQUARE}px`};
    height: ${({ height }) => `${height * GRID_SQUARE}px`};
    margin-left: ${({ margin }) => `${margin * GRID_SQUARE}px`};
`

type Props = {
    dropTargetConnector: any,
    handleDrop: Bed => void,
    placedBeds: Array<Bed>,
    selectedBed: string,
    selectBed: Bed => void,
    garden: Garden,
}

class GardenSite extends Component<Props> {
    renderGardenRows = () => {
        const { garden } = this.props
        const array = arrayify(garden.length)
        return array.map(idx => (
            <Row key={idx} margin={idx} width={garden.width} />
        ))
    }

    renderGardenColumns = () => {
        const { garden } = this.props
        const array = arrayify(garden.width)
        return array.map(idx => (
            <Column key={idx} height={garden.length} margin={idx} />
        ))
    }

    renderGardenGrid = () => {
        const { garden } = this.props
        return (
            <GridContainer width={garden.width} height={garden.length}>
                {this.renderGardenRows()}
                {this.renderGardenColumns()}
            </GridContainer>
        )
    }

    renderBeds = (beds: Array<Bed>) => {
        const { selectedBed, selectBed } = this.props
        return (
            <div>
                {beds.map(b => {
                    const isSelected = selectedBed && b.id === selectedBed
                    return (
                        <GardenBed
                            selectBed={selectBed}
                            key={b.id}
                            bed={b}
                            isSelected={isSelected}
                        />
                    )
                })}
            </div>
        )
    }

    render() {
        const { dropTargetConnector, placedBeds, garden } = this.props
        if (!garden) {
            return null
        }
        return dropTargetConnector(
            <div>
                <SiteContainer width={garden.width}>
                    {this.renderGardenGrid()}
                    {this.renderBeds(placedBeds)}
                </SiteContainer>
                ,
            </div>,
        )
    }
}

const dropTarget = {
    drop: (props, monitor, component) => {
        const { top: y, left: x } = positionBed(monitor, component, GRID_SQUARE)
        const item = monitor.getItem()
        const newItem = { ...item, x, y, hasDropped: true }
        props.handleDrop(newItem)
        return newItem
    },
    hover: (props, monitor) => {},
}

const collect = (connect, monitor) => ({
    dropTargetConnector: connect.dropTarget(),
})

export default DropTarget(DnDTypes.BED_GARDEN, dropTarget, collect)(GardenSite)
