// @flow

export const createEmptyBed = (rows: number, columns: number) => {
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

export type Bed = {
    name: string,
    id: string,
    x?: number,
    y?: number,
    length: number,
    width: number,
    exposure?: string,
    hasDropped: boolean,
}

export type BedColumn = ?{}

export type BedRow = Array<BedColumn>

export type BedGrid = Array<BedRow>

export type CropPosition = {
    row: number,
    column: number,
}
