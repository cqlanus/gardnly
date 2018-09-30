// @flow

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
