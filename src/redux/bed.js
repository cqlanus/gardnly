// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition, BedUpdate } from '../data/bed'
import type { Planting } from '../data/crop'
import { Types as GardenTypes } from './garden'
import { API, graphqlOperation } from 'aws-amplify'
import { createBedFactory } from '../data/bed'
import { merge, arrayify, now } from '../utils/common'
import { getGarden as gardenGet } from '../customgql/queries'
import { createBed, deleteBed, updateBed } from '../graphql/mutations'
import {
    createPlanting,
    deletePlanting,
    updatePlanting,
    createBedUpdate,
} from '../customgql/mutations'
import { Types as PlantingTypes } from './planting'
import { toastr } from 'react-redux-toastr'

type Action = {
    type: string,
    garden: Garden,
    beds: Array<Bed>,
    bed: Bed,
    crop: any,
    position: CropPosition,
    planting: Planting,
}

export type State = {
    beds: Array<Bed>,
    selectedBed: ?Bed,
    loading: boolean,
}

export const Types = {
    ADD_BED_COMPLETE: 'ADD_BED_COMPLETE',
    ADD_BED_FAILED: 'ADD_BED_FAILED',
    BED_LOADING_START: 'BED_LOADING_START',
    BED_FAILED: 'BED_FAILED',
    SELECT_BED: 'SELECT_BED',
    PLACE_CROP_IN_BED_COMPLETE: 'PLACE_CROP_IN_BED_COMPLETE',
    PLACE_BED_IN_GARDEN_COMPLETE: 'PLACE_BED_IN_GARDEN_COMPLETE',
    REMOVE_CROP_FROM_BED_COMPLETE: 'REMOVE_CROP_FROM_BED_COMPLETE',
    REPOSITION_CROP_COMPLETE: 'REPOSITION_CROP_COMPLETE',
    UPDATE_CROP_COMPLETE: 'UPDATE_CROP_COMPLETE',
    DELETE_BED_COMPLETE: 'DELETE_BED_COMPLETE',
    GET_BEDS_FOR_GARDEN_COMPLETE: 'GET_BEDS_FOR_GARDEN_COMPLETE',
    CREATE_BED_UPDATE: 'CREATE_BED_UPDATE',
}

const updateBeds = ({ beds }: State, { bed }: Action) => {
    return beds.map(b => (b.id === bed.id ? bed : b))
}

const bedFailed = error => {
    return {
        type: Types.BED_FAILED,
        error,
    }
}

const bedLoadingStart = () => ({ type: Types.BED_LOADING_START })

const addBedComplete = (beds: Array<Bed>, garden: Garden) => {
    return {
        type: Types.ADD_BED_COMPLETE,
        beds,
        garden,
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
        dispatch(bedFailed(error))
    }
}

const removeBedComplete = (garden: Garden) => {
    return {
        type: Types.DELETE_BED_COMPLETE,
        garden,
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
        dispatch(bedFailed(error))
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
        dispatch(bedFailed(error))
    }
}

const placeBedInGardenComplete = beds => {
    return {
        type: Types.PLACE_BED_IN_GARDEN_COMPLETE,
        beds,
    }
}

export const placeBedInGarden = (bed: Bed) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        dispatch(bedLoadingStart())
        const { beds } = getState().bed
        const { id, x, y, hasDropped, invert } = bed
        const input = { id, x, y, hasDropped, invert }
        const { data } = await API.graphql(
            graphqlOperation(updateBed, { input }),
        )
        const updatedBeds = beds.map(
            b => (b.id === bed.id ? data.updateBed : b),
        )
        dispatch(placeBedInGardenComplete(updatedBeds))
    } catch (error) {
        dispatch(bedFailed(error))
    }
}

const removeCropFromBedComplete = bed => {
    return {
        type: Types.REMOVE_CROP_FROM_BED_COMPLETE,
        bed,
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
        dispatch(bedFailed(error))
    }
}

const repositionCropInBedComplete = bed => {
    return {
        type: Types.REPOSITION_CROP_COMPLETE,
        bed,
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
        dispatch(bedFailed(error))
    }
}

const updateCropInBedComplete = bed => {
    return {
        type: Types.UPDATE_CROP_COMPLETE,
        bed,
    }
}

export const updateCropInBed = (input: any) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        dispatch(bedLoadingStart())
        const bed = getState().bed.selectedBed
        const limit = bed.length * bed.width
        const { data } = await API.graphql(
            graphqlOperation(updatePlanting, { input, limit }),
        )
        let { bed: newBed } = data.updatePlanting
        newBed = { ...newBed, name: bed.name }
        dispatch(updateCropInBedComplete(createBedFactory(newBed)))
        toastr.success('Success', 'Planting updated')
    } catch (error) {
        dispatch(bedFailed(error))
    }
}

const makeBedUpdateComplete = bed => {
    return { 
        type: Types.CREATE_BED_UPDATE, 
        bed 
    }
}

export const makeBedUpdate = (update: BedUpdate) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        dispatch(bedLoadingStart())
        const {
            selectedBed: { id: bedUpdateBedId, name },
        } = getState().bed
        const {
            currentGarden: { id: bedUpdateGardenId },
        } = getState().garden
        const input = { ...update, bedUpdateBedId, bedUpdateGardenId }
        const { data } = await API.graphql(
            graphqlOperation(createBedUpdate, { input })
        )
        let { bed: newBed } = data.createBedUpdate
        newBed = { ...newBed, name }
        dispatch(makeBedUpdateComplete(createBedFactory(newBed)))
    } catch (error) {
        dispatch(bedFailed(error))
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

        case Types.BED_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.ADD_BED_COMPLETE: {
            const beds = state.beds.concat(action.beds)
            return merge(state, {
                beds,
                selectedBed: beds[0],
                loading: false,
            })
        }

        case Types.DELETE_BED_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden,
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

        case GardenTypes.GET_GARDEN_COMPLETE: {
            const {
                garden: { beds },
            } = action
            if (beds && beds.items) {
                const gardenBeds = beds.items.map(createBedFactory)
                return merge(state, {
                    beds: gardenBeds,
                    selectedBed: gardenBeds[0],
                    loading: false,
                })
            } else {
                return state
            }
        }

        case Types.REMOVE_CROP_FROM_BED_COMPLETE: {
            const beds = updateBeds(state, action)
            return merge(state, {
                beds,
                selectedBed: action.bed,
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

        case Types.UPDATE_CROP_COMPLETE: {
            const beds = updateBeds(state, action)
            return merge(state, {
                beds,
                selectedBed: action.bed,
                loading: false,
            })
        }

        case Types.PLACE_BED_IN_GARDEN_COMPLETE: {
            return merge(state, {
                loading: false,
                beds: action.beds,
            })
        }

        case Types.CREATE_BED_UPDATE: {
            const beds = updateBeds(state, action)
            return merge(state, {
                loading: false,
                beds,
                selectedBed: action.bed
            })
        }

        case PlantingTypes.UPDATE_PLANTING: {
            return state
        }

        default: {
            return state
        }
    }
}

export default bedReducer
