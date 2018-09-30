// @flow
import { createEmptyBed } from '../data/bed'
import { mapOverRows } from '../utils/bed'
import type { BedGrid, CropPosition, Bed } from '../data/bed'

export const Types = {
    CONSTRUCT_EMPTY_BED: 'CONSTRUCT_EMPTY_BED',
    PLACE_CROP_IN_BED: 'PLACE_CROP_IN_BED',
}

type Action = {
    type: string,
    bed: BedGrid,
    crop: any,
    position: CropPosition,
}

export const constructEmptyBed = (rows: number, columns: number) => {
    const bed = createEmptyBed(rows, columns)
    return {
        type: Types.CONSTRUCT_EMPTY_BED,
        bed,
    }
}

export const placeCropInBed = (crop: any, position: CropPosition, bed: Bed) => {
    return {
        type: Types.PLACE_CROP_IN_BED,
        crop,
        position,
        bed,
    }
}

type State = { grid: BedGrid }

const initialState = {
    grid: [],
}

const bedReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case Types.CONSTRUCT_EMPTY_BED: {
            return { ...state, grid: action.bed }
        }
        case Types.PLACE_CROP_IN_BED: {
            const { grid } = state
            const { crop, position } = action
            const { row, column } = position
            const newGrid = grid.map(mapOverRows(row, column, crop))
            return { ...state, grid: newGrid }
        }
        default:
            return state
    }
}

export default bedReducer
