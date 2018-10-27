// @flow
import * as R from 'ramda'

export type BedColumn = ?{}

export type BedRow = Array<BedColumn>

export type BedGrid = Array<BedRow>

export type CropPosition = {
    row: number,
    column: number,
}

export type Bed = {
    name: string,
    id: string,
    x?: number,
    y?: number,
    length: number,
    width: number,
    exposure?: string,
    hasDropped: boolean,
    grid: BedGrid,
    plantings: Array<*>,
}

export const createEmptyBed = (rows: number, columns: number): BedGrid => {
    let array = []
    for (let i = 0; i < rows; i++) {
        let subArray = []
        for (let j = 0; j < columns; j++) {
            subArray.push(undefined)
        }
        array.push(subArray)
    }
    return array
}

export const mockBeds = [
    {
        name: 'Bed 1',
        id: '1',
        hasDropped: false,
        width: 8,
        length: 4,
        grid: createEmptyBed(4, 8),
    },
    {
        name: 'Bed 2',
        id: '2',
        hasDropped: false,
        width: 12,
        length: 4,
        grid: createEmptyBed(4, 12),
    },
    {
        name: 'Bed 3',
        id: '3',
        hasDropped: false,
        width: 10,
        length: 6,
        grid: createEmptyBed(6, 10),
    },
]

const createEmptyGrid = bed => () => {
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

const fillGridWithPlants = R.curry((plantings: Array<*>, grid: BedGrid) => {
    plantings.forEach(plant => {
        grid[plant.row][plant.column] = plant
    })
    return grid
})

export const createGridFromBed = (bed: Bed) =>
    R.compose(
        fillGridWithPlants(bed.plantings.items),
        createEmptyGrid(bed),
    )

export const createBedFactory = (networkBed: Bed, idx: number) => {
    const grid = createGridFromBed(networkBed)
    return {
        ...networkBed,
        grid: grid(),
        name: String(idx),
        hasDropped: false,
    }
}
