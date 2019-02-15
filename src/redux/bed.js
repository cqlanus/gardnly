// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition, BedUpdate } from '../data/bed'
import type { Planting } from '../data/crop'
import { Types as GardenTypes } from './garden'
import { createBedFactory } from '../data/bed'
import { merge, arrayify, now } from '../utils/common'
import { Types as PlantingTypes } from './planting'
import { toastr } from 'react-redux-toastr'
import api from '../api/index'

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
        const { currentGarden } = getState().garden
        dispatch(bedLoadingStart())
        if (!currentGarden) {
            throw Error('No garden selected')
        }
        const bedsArray = arrayify(quantity, bed)
        const bedPromises = bedsArray.map((b, i) => {
            return api.bedService.create(bed, currentGarden.id, i)
        })

        const beds = await Promise.all(bedPromises)
        
        const garden = await api.gardenService.get(currentGarden.id)
        dispatch(addBedComplete(beds, garden))
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
        const { currentGarden } = getState().garden
        dispatch(bedLoadingStart())
        await api.bedService.delete(bed.id)
        const garden = await api.gardenService.get(currentGarden.id)
        dispatch(removeBedComplete(garden))
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
        const newBed = await api.plantingService.create(crop, position, bed)
        dispatch(placeCropInBedComplete(newBed))
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
        const updatedBed = await api.bedService.update(bed)
        const updatedBeds = beds.map(
            b => (b.id === bed.id ?updatedBed : b),
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
        const newBed = await api.plantingService.delete(plantingId, bed)
        dispatch(removeCropFromBedComplete(newBed))
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
        const newBed = await api.plantingService.position(plantingId, newPosition, bed)
        dispatch(repositionCropInBedComplete(newBed))
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
        const newBed = await api.plantingService.update(input, bed)
        dispatch(updateCropInBedComplete(newBed))
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
            selectedBed
        } = getState().bed
        const {
            currentGarden
        } = getState().garden
        const newBed = await api.bedService.addUpdate(update, selectedBed, currentGarden)
        dispatch(makeBedUpdateComplete(newBed))
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
