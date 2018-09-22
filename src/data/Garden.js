// @flow

export type Garden = {
    name: string,
    length: number,
    width: number,
}

export type Bed = {
    name: string,
    id: string,
    x?: number,
    y?: number,
    length: number,
    width: number,
    hasDropped: boolean,
}

export const GRID_SQUARE = 30
