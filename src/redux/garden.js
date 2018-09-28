// @flow
import type { Garden, Bed } from '../data/Garden'

type Action = { type: string, garden: Garden, bed: Bed }

type State = {
    currentGarden: ?Garden,
    beds: Array<Bed>,
}
const Types = {
    ADD_GARDEN_COMPLETE: 'ADD_GARDEN_COMPLETE',
    ADD_BED_COMPLETE: 'ADD_BED_COMPLETE',
    GARDEN_LOADING_START: 'GARDEN_LOADING_START',
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

export const addBed = (bed: Bed) => async (dispatch: any) => {
    dispatch(gardenLoadingStart())
    await timeout(500)
    dispatch(addBedComplete(bed))
}

const initialState = {
    currentGarden: null,
    beds: [],
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
        default: {
            return state
        }
    }
}

export default gardenReducer
