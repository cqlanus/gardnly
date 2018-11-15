// @flow
import type { Bed } from './bed'

export type Crop = {
    id: string,
    commonName: string,
    image: string,
    numPerSqFt: number,
}

export type Planting = {
    id: string,
    created: string,
    crop: Crop,
    bed: Bed,
    row: number,
    column: number,
}
