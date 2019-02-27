// @flow
import * as R from 'ramda'
import type { Planting } from './crop'

export type BedColumn = ?Planting

export type BedRow = Array<BedColumn>

export type BedGrid = Array<BedRow>

export type CropPosition = {
    row: number,
    column: number,
}

type UpdateType = 'WATER' | 'FERTILIZE' | 'WEED' | 'HARVEST'

export type BedUpdate = {
    created: string,
    type: UpdateType,
}

export type Bed = {
    name: string,
    id: string,
    x?: number,
    y?: number,
    invert: boolean,
    length: number,
    width: number,
    exposure?: string,
    hasDropped: boolean,
    grid: BedGrid,
    created: string,
    plantings: { items: Array<Planting> },
    updates: { items: Array<BedUpdate> },
}

const createEmptyGrid = (bed: Bed) => (): BedGrid => {
    const { length: rows, width: columns } = bed
    let grid = []
    for (let i = 0; i < rows; i++) {
        let subArray = []
        for (let j = 0; j < columns; j++) {
            subArray.push(undefined)
        }
        grid.push(subArray)
    }
    return grid
}

const fillGridWithPlants = R.curry(
    (plantings: Array<Planting>, grid: BedGrid): BedGrid => {
        plantings.forEach(plant => {
            grid[plant.row][plant.column] = plant
        })
        return grid
    },
)

export const createGridFromBed = (bed: Bed) =>
    R.compose(
        fillGridWithPlants(bed.plantings),
        createEmptyGrid(bed),
    )

export const createBedFactory = (networkBed: Bed, name?: number): Bed => {
    const grid = createGridFromBed(networkBed)
    const nameExists = name !== undefined
    return {
        ...networkBed,
        grid: grid(),
        name: nameExists ? String(name + 1) : networkBed.name,
    }
}