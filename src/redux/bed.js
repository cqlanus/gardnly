// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition } from '../data/bed'
import { API, graphqlOperation } from 'aws-amplify'
import { createBedFactory } from '../data/bed'
import { merge, arrayify, now } from '../utils/common'
import { getGarden as gardenGet } from '../graphql/queries'
import { getGardenBeds } from '../customgql/queries'
import { createBed, deleteBed } from '../graphql/mutations'
import {
    createPlanting,
    deletePlanting,
    updatePlanting,
} from '../customgql/mutations'

type Action = {
    type: string,
    garden: Garden,
    beds: Array<Bed>,
    bed: Bed,
    crop: any,
    position: CropPosition,
}

export type State = {
    beds: Array<Bed>,
    selectedBed: Bed,
    loading: boolean,
}

export const Types = {
    ADD_BED_COMPLETE: 'ADD_BED_COMPLETE',
    ADD_BED_FAILED: 'ADD_BED_FAILED',
    BED_LOADING_START: 'BED_LOADING_START',
    SELECT_BED: 'SELECT_BED',
    PLACE_CROP_IN_BED_COMPLETE: 'PLACE_CROP_IN_BED_COMPLETE',
    PLACE_CROP_IN_BED_FAILED: 'PLACE_CROP_IN_BED_FAILED',
    REMOVE_CROP_FROM_BED_COMPLETE: 'REMOVE_CROP_FROM_BED_COMPLETE',
    REMOVE_CROP_FROM_BED_FAILED: 'REMOVE_CROP_FROM_BED_FAILED',
    REPOSITION_CROP_COMPLETE: 'REPOSITION_CROP_COMPLETE',
    REPOSITION_CROP_FAILED: 'REPOSITION_CROP_FAILED',
    DELETE_BED_COMPLETE: 'DELETE_BED_COMPLETE',
    DELETE_BED_FAILED: 'DELETE_BED_FAILED',
    GET_BEDS_FOR_GARDEN_COMPLETE: 'GET_BEDS_FOR_GARDEN_COMPLETE',
    GET_BEDS_FOR_GARDEN_FAILED: 'GET_BEDS_FOR_GARDEN_FAILED',
}

const updateBeds = ({ beds }: State, { bed }: Action) => {
    return beds.map(b => (b.id === bed.id ? bed : b))
}

const bedLoadingStart = () => ({ type: Types.BED_LOADING_START })

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
        dispatch(bedLoadingStart())
        if (!garden) {
            throw Error('No garden selected')
        }
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
        dispatch(bedLoadingStart())
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

const getBedsForGardenComplete = (beds: Array<Bed>) => {
    return {
        type: Types.GET_BEDS_FOR_GARDEN_COMPLETE,
        beds,
    }
}

const getBedsForGardenFailed = error => {
    return {
        type: Types.GET_BEDS_FOR_GARDEN_FAILED,
        error,
    }
}

export const getBedsForGarden = (gardenId: string, { history }: any) => async (
    dispatch: any,
) => {
    try {
        dispatch(bedLoadingStart())
        const { data } = await API.graphql(
            graphqlOperation(getGardenBeds, { id: gardenId }),
        )
        const beds = data.getGarden.beds.items.map(createBedFactory)
        const hasBeds = beds.length > 0
        dispatch(getBedsForGardenComplete(beds))
        hasBeds && history.push('/home/plan_bed')
    } catch (error) {
        dispatch(getBedsForGardenFailed(error))
    }
}

export const getBed = (bed: Bed) => {
    return {
        type: Types.SELECT_BED,
        bed,
    }
}

const placeCropInBedComplete = bed => {
    return {
        type: Types.PLACE_CROP_IN_BED_COMPLETE,
        bed,
    }
}

const placeCropInBedFailed = error => {
    return {
        type: Types.PLACE_CROP_IN_BED_FAILED,
        error,
    }
}
const createCropInput = (crop, position, bed) => {
    const { row, column } = position
    const { id: plantingCropId } = crop
    const { id: plantingBedId } = bed
    return {
        row,
        column,
        plantingBedId,
        plantingCropId,
        created: now(),
    }
}
export const placeCropInBed = (
    crop: any,
    position: CropPosition,
    bed: Bed,
) => async (dispatch: any) => {
    try {
        dispatch(bedLoadingStart())
        const input = createCropInput(crop, position, bed)
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(createPlanting, { input, limit }),
        )
        let { bed: newBed } = data.createPlanting
        newBed = { ...newBed, name: bed.name }
        dispatch(placeCropInBedComplete(createBedFactory(newBed)))
    } catch (error) {
        dispatch(placeCropInBedFailed(error))
    }
}

const removeCropFromBedComplete = bed => {
    return {
        type: Types.REMOVE_CROP_FROM_BED_COMPLETE,
        bed,
    }
}

const removeCropFromBedFailed = error => {
    return {
        type: Types.REMOVE_CROP_FROM_BED_FAILED,
        error,
    }
}

export const removeCropFromBed = (plantingId: string, bed: Bed) => async (
    dispatch: any,
) => {
    try {
        dispatch(bedLoadingStart())
        const input = { id: plantingId }
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(deletePlanting, { input, limit }),
        )
        let { bed: newBed } = data.deletePlanting
        newBed = { ...newBed, name: bed.name }
        dispatch(removeCropFromBedComplete(createBedFactory(newBed)))
    } catch (error) {
        dispatch(removeCropFromBedFailed(error))
    }
}

const repositionCropInBedComplete = bed => {
    return {
        type: Types.REPOSITION_CROP_COMPLETE,
        bed,
    }
}

const repositionCropInBedFailed = error => {
    return {
        type: Types.REPOSITION_CROP_FAILED,
        error,
    }
}

export const repositionCropInBed = (
    plantingId: string,
    newPosition: CropPosition,
    bed: Bed,
) => async (dispatch: any) => {
    try {
        dispatch(bedLoadingStart())
        const { row, column } = newPosition
        const input = { id: plantingId, row, column }
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(updatePlanting, { input, limit }),
        )
        let { bed: newBed } = data.updatePlanting
        newBed = { ...newBed, name: bed.name }
        dispatch(repositionCropInBedComplete(createBedFactory(newBed)))
    } catch (error) {
        dispatch(repositionCropInBedFailed(error))
    }
}

const initialState = {
    beds: [],
    selectedBed: null,
    loading: false,
}

const bedReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.BED_LOADING_START: {
            return merge(state, { loading: true })
        }

        case Types.ADD_BED_COMPLETE: {
            const beds = state.beds.concat(action.beds)
            return merge(state, {
                beds,
                selectedBed: beds[0],
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

        case Types.PLACE_CROP_IN_BED_COMPLETE: {
            const { bed } = action
            const beds = updateBeds(state, action)
            return merge(state, {
                beds,
                selectedBed: bed,
                loading: false,
            })
        }

        case Types.PLACE_CROP_IN_BED_FAILED: {
            return merge(state, { loading: false })
        }

        case Types.GET_BEDS_FOR_GARDEN_COMPLETE: {
            return merge(state, {
                beds: action.beds,
                selectedBed: action.beds[0],
                loading: false,
            })
        }

        case Types.GET_BEDS_FOR_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.REMOVE_CROP_FROM_BED_COMPLETE: {
            const beds = updateBeds(state, action)
            return merge(state, {
                beds,
                selectedBed: action.bed,
                loading: false,
            })
        }

        case Types.REMOVE_CROP_FROM_BED_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.REPOSITION_CROP_COMPLETE: {
            const beds = updateBeds(state, action)
            return merge(state, {
                beds,
                selectedBed: action.bed,
                loading: false,
            })
        }

        case Types.REPOSITION_CROP_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        default: {
            return state
        }
    }
}

export default bedReducer
