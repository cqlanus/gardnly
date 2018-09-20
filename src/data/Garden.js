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
    hasDropped: boolean,
}
