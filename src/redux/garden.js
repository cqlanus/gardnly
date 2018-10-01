// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition } from '../data/bed'
import { createEmptyBed, mockBeds } from '../data/bed'
import { mapOverRows } from '../utils/bed'

type Action = {
    type: string,
    garden: Garden,
    bed: Bed,
    crop: any,
    position: CropPosition,
}

type State = {
    currentGarden: ?Garden,
    beds: Array<Bed>,
}
const Types = {
    ADD_GARDEN_COMPLETE: 'ADD_GARDEN_COMPLETE',
    ADD_BED_COMPLETE: 'ADD_BED_COMPLETE',
    GARDEN_LOADING_START: 'GARDEN_LOADING_START',
    SELECT_BED: 'SELECT_BED',
    PLACE_CROP_IN_BED: 'PLACE_CROP_IN_BED',
    REMOVE_CROP_FROM_BED: 'REMOVE_CROP_FROM_BED',
    REPOSITION_CROP: 'REPOSITION_CROP',
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const gardenLoadingStart = () => ({ type: Types.GARDEN_LOADING_START })

const addGardenComplete = (garden: Garden) => {
    return {
        type: Types.ADD_GARDEN_COMPLETE,
        garden,
    }
}

export const addGarden = (garden: Garden) => async (dispatch: any) => {
    dispatch(gardenLoadingStart())
    await timeout(500)
    dispatch(addGardenComplete(garden))
}

const addBedComplete = (bed: Bed) => {
    return {
        type: Types.ADD_BED_COMPLETE,
        bed,
    }
}

export const addBed = (bed: Bed, quantity: number = 1) => async (
    dispatch: any,
) => {
    dispatch(gardenLoadingStart())
    const grid = createEmptyBed(bed.length, bed.width)
    await timeout(500)
    for (let i = 0; i < quantity; i++) {
        dispatch(addBedComplete({ ...bed, grid }))
    }
}

export const selectBed = (bed: Bed) => {
    return {
        type: Types.SELECT_BED,
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

export const removeCropFromBed = (position: CropPosition, bed: Bed) => (
    dispatch: any,
) => {
    dispatch(placeCropInBed(undefined, position, bed))
}

export const repositionCropInBed = (
    crop: any,
    oldPosition: CropPosition,
    newPosition: CropPosition,
    bed: Bed,
) => (dispatch: any, getState: any) => {
    dispatch(removeCropFromBed(oldPosition, bed))
    const newBed = getState().garden.selectedBed
    dispatch(placeCropInBed(crop, newPosition, newBed))
}

const initialState = {
    currentGarden: null,
    beds: mockBeds,
    selectedBed: mockBeds[0],
    loading: false,
}

const gardenReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case Types.GARDEN_LOADING_START: {
            return { ...state, loading: true }
        }
        case Types.ADD_GARDEN_COMPLETE: {
            return { ...state, currentGarden: action.garden, loading: false }
        }
        case Types.ADD_BED_COMPLETE: {
            return {
                ...state,
                beds: [...state.beds, action.bed],
                loading: false,
            }
        }
        case Types.SELECT_BED: {
            const { bed } = action
            return { ...state, selectedBed: bed }
        }
        case Types.PLACE_CROP_IN_BED: {
            const { beds } = state
            const { crop, position, bed } = action
            const { row, column } = position
            const { grid } = bed
            const newGrid = grid.map(mapOverRows(row, column, crop))
            const newBed = { ...bed, grid: newGrid }
            const updatedBeds = beds.map(b => (b.id === newBed.id ? newBed : b))
            return { ...state, beds: updatedBeds, selectedBed: newBed }
        }
        default: {
            return state
        }
    }
}

export default gardenReducer
