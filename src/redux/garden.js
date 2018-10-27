// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition } from '../data/bed'
import { API, graphqlOperation } from 'aws-amplify'
import { toastr } from 'react-redux-toastr'
import { mockBeds } from '../data/bed'
import { merge, arrayify, now } from '../utils/common'
import { mapOverRows } from '../utils/bed'
import { getGarden as gardenGet } from '../graphql/queries'
import {
    createGarden,
    createBed,
    deleteBed,
    deleteGarden as gardenDelete,
    updateGarden,
} from '../graphql/mutations'

type Action = {
    type: string,
    garden: Garden,
    beds: Array<Bed>,
    crop: any,
    position: CropPosition,
}

type State = {
    currentGarden: ?Garden,
    beds: Array<Bed>,
    loading: boolean,
}
const Types = {
    GET_GARDEN_COMPLETE: 'GET_GARDEN_COMPLETE',
    GET_GARDEN_FAILED: 'GET_GARDEN_FAILED',
    ADD_GARDEN_COMPLETE: 'ADD_GARDEN_COMPLETE',
    ADD_GARDEN_FAILED: 'ADD_GARDEN_FAILED',
    ADD_BED_COMPLETE: 'ADD_BED_COMPLETE',
    ADD_BED_FAILED: 'ADD_BED_FAILED',
    GARDEN_LOADING_START: 'GARDEN_LOADING_START',
    SELECT_BED: 'SELECT_BED',
    PLACE_CROP_IN_BED: 'PLACE_CROP_IN_BED',
    REMOVE_CROP_FROM_BED: 'REMOVE_CROP_FROM_BED',
    REPOSITION_CROP: 'REPOSITION_CROP',
    DELETE_GARDEN_COMPLETE: 'DELETE_GARDEN_COMPLETE',
    DELETE_GARDEN_FAILED: 'DELETE_GARDEN_FAILED',
    UPDATE_GARDEN_COMPLETE: 'UPDATE_GARDEN_COMPLETE',
    UPDATE_GARDEN_FAILED: 'UPDATE_GARDEN_FAILED',
    DELETE_BED_COMPLETE: 'DELETE_BED_COMPLETE',
    DELETE_BED_FAILED: 'DELETE_BED_FAILED',
}

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

const getGardenComplete = garden => {
    return {
        type: Types.GET_GARDEN_COMPLETE,
        garden,
    }
}

const getGardenFailed = error => {
    return {
        type: Types.GET_GARDEN_FAILED,
        error,
    }
}

export const getGarden = (id: string) => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const { data } = await API.graphql(graphqlOperation(gardenGet, { id }))
        dispatch(getGardenComplete(data.getGarden))
    } catch (error) {
        dispatch(getGardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const gardenLoadingStart = () => ({ type: Types.GARDEN_LOADING_START })

const addGardenComplete = (garden: Garden) => {
    return {
        type: Types.ADD_GARDEN_COMPLETE,
        garden,
    }
}

const addGardenFailed = error => {
    return {
        type: Types.ADD_GARDEN_FAILED,
        error,
    }
}

export const addGarden = (garden: Garden, { history, match }: any) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        dispatch(gardenLoadingStart())
        const { gardens, ...user } = getState().auth.profile
        const input = { ...garden, gardenUserId: user.id, created: now() }
        const { data } = await API.graphql(
            graphqlOperation(createGarden, { input }),
        )
        dispatch(addGardenComplete(data.createGarden))
        history.push(`/home`)
    } catch (error) {
        dispatch(addGardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const deleteGardenComplete = () => {
    return {
        type: Types.DELETE_GARDEN_COMPLETE,
    }
}

const deleteGardenFailed = error => {
    return {
        type: Types.DELETE_GARDEN_FAILED,
        error,
    }
}

export const deleteGarden = (id: string) => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const input = { id }
        await API.graphql(graphqlOperation(gardenDelete, { input }))
        dispatch(deleteGardenComplete())
        toastr.success('Success')
    } catch (error) {
        dispatch(deleteGardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const editGardenComplete = garden => {
    return {
        type: Types.UPDATE_GARDEN_COMPLETE,
        garden,
    }
}

const editGardenFailed = error => {
    return {
        type: Types.UPDATE_GARDEN_FAILED,
        error,
    }
}

export const editGarden = (
    garden: Garden,
    id: string,
    { history }: any,
) => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const input = { id, ...garden }
        const { data } = await API.graphql(
            graphqlOperation(updateGarden, { input }),
        )
        dispatch(editGardenComplete(data.updateGarden))
        history.push('/home')
    } catch (error) {
        dispatch(editGardenFailed(error))
    }
}

const addBedComplete = (beds: Array<Bed>, garden: Garden) => {
    return {
        type: Types.ADD_BED_COMPLETE,
        beds,
        garden,
    }
}

const addBedFailed = error => {
    return {
        type: Types.ADD_BED_FAILED,
        error,
    }
}

export const addBed = (bed: Bed, quantity: number = 1) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        const { currentGarden: garden } = getState().garden
        dispatch(gardenLoadingStart())
        if (!garden) {
            throw Error('No garden selected')
        }
        // const grid = createEmptyBed(bed.length, bed.width)
        const bedsArray = arrayify(quantity, bed)
        const created = now()
        const bedPromises = bedsArray.map((b, i) => {
            const input = {
                ...bed,
                name: `Test bed ${i}`,
                created,
                bedGardenId: garden.id,
            }
            return API.graphql(graphqlOperation(createBed, { input }))
        })

        const bedsData = await Promise.all(bedPromises)
        const beds = bedsData.map(({ data: { createBed } }) => createBed)
        console.log({ beds })

        const {
            data: { getGarden },
        } = await API.graphql(graphqlOperation(gardenGet, { id: garden.id }))

        dispatch(addBedComplete(beds, getGarden))
    } catch (error) {
        dispatch(addBedFailed(error))
    }
}

const removeBedComplete = (garden: Garden) => {
    return {
        type: Types.DELETE_BED_COMPLETE,
        garden,
    }
}

const removeBedFailed = error => {
    return {
        type: Types.DELETE_BED_FAILED,
        error,
    }
}

export const removeBed = (bed: Bed) => async (dispatch: any, getState: any) => {
    try {
        const { currentGarden: garden } = getState().garden
        dispatch(gardenLoadingStart())
        const input = { id: bed.id }
        await API.graphql(graphqlOperation(deleteBed, { input }))
        const {
            data: { getGarden },
        } = await API.graphql(graphqlOperation(gardenGet, { id: garden.id }))
        dispatch(removeBedComplete(getGarden))
    } catch (error) {
        dispatch(removeBedFailed(error))
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

const gardenReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.GARDEN_LOADING_START: {
            return merge(state, { loading: true })
        }
        case Types.ADD_GARDEN_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden,
                loading: false,
            })
        }

        case Types.ADD_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.ADD_BED_COMPLETE: {
            const beds = state.beds.concat(action.beds)
            return merge(state, {
                beds,
                selectedBed: beds[0],
                currentGarden: action.garden || state.currentGarden,
                loading: false,
            })
        }

        case Types.ADD_BED_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.DELETE_BED_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden,
                loading: false,
            })
        }

        case Types.DELETE_BED_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.SELECT_BED: {
            const { bed } = action
            return merge(state, { selectedBed: bed })
        }
        case Types.PLACE_CROP_IN_BED: {
            const { beds } = state
            const { crop, position, bed } = action
            const { row, column } = position
            const { grid } = bed
            const newGrid = grid.map(mapOverRows(row, column, crop))
            const newBed = { ...bed, grid: newGrid }
            const updatedBeds = beds.map(b => (b.id === newBed.id ? newBed : b))
            return merge(state, { beds: updatedBeds, selectedBed: newBed })
        }

        case Types.GET_GARDEN_COMPLETE: {
            return merge(state, {
                loading: false,
                currentGarden: action.garden,
            })
        }

        case Types.GET_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.DELETE_GARDEN_COMPLETE: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.DELETE_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.UPDATE_GARDEN_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden,
                loading: false,
            })
        }

        case Types.UPDATE_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        default: {
            return state
        }
    }
}

export default gardenReducer
