// @flow

export type Garden = {
    name: string,
    length: number,
    width: number,
}

export type Bed = {
    name: string,
    id: number,
    x?: number,
    y?: number,
    hasDropped: boolean,
}
