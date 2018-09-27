// @flow
import { createEmptyBed } from '../data/bed'
const Types = {
    CONSTRUCT_EMPTY_BED: 'CONSTRUCT_EMPTY_BED',
    PLACE_CROP_IN_BED: 'PLACE_CROP_IN_BED',
}

type Action = {
    type: string,
    bed: Array<Array<any>>,
    crop: any,
    position: { row: number, column: number },
}

export const constructEmptyBed = (rows: number, columns: number) => {
    const bed = createEmptyBed(rows, columns)
    return {
        type: Types.CONSTRUCT_EMPTY_BED,
        bed,
    }
}

export const placeCropInBed = (
    crop: any,
    position: { row: number, column: number },
) => {
    return {
        type: Types.PLACE_CROP_IN_BED,
        crop,
        position,
    }
}

type State = { grid: Array<Array<any>> }

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

const mapOverRows = (row, column, crop) => (r, idx) => {
    return row === idx ? r.map(mapOverColumns(column, crop)) : r
}
const mapOverColumns = (column, crop) => (c, idx) => {
    return column === idx ? crop : c
}

export default bedReducer
