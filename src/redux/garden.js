// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition } from '../data/bed'
import { toastr } from 'react-redux-toastr'
import { merge } from '../utils/common'
import { Types as BedTypes } from './bed'
import api from '../api/index'

type Action = {
    type: string,
    garden: Garden,
    gardens: Array<Garden>,
    beds: Array<Bed>,
    crop: any,
    position: CropPosition,
    id: string,
}

export type State = {
    gardens: Array<Garden>,
    currentGarden: ?Garden,
    loading: boolean,
}

export const Types = {
    GET_GARDEN_COMPLETE: 'GET_GARDEN_COMPLETE',
    GET_USER_GARDENS_COMPLETE: 'GET_USER_GARDENS_COMPLETE',
    ADD_GARDEN_COMPLETE: 'ADD_GARDEN_COMPLETE',
    GARDEN_LOADING_START: 'GARDEN_LOADING_START',
    GARDEN_FAILED: 'GARDEN_FAILED',
    DELETE_GARDEN_COMPLETE: 'DELETE_GARDEN_COMPLETE',
    UPDATE_GARDEN_COMPLETE: 'UPDATE_GARDEN_COMPLETE',
}

const gardenLoadingStart = () => ({ type: Types.GARDEN_LOADING_START })

const gardenFailed = error => {
    return {
        type: Types.GARDEN_FAILED,
        error,
    }
}

export const getGardenComplete = (garden: Garden) => {
    return {
        type: Types.GET_GARDEN_COMPLETE,
        garden,
    }
}

export const getGarden = (id: string) => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const garden = await api.gardenService.get(id)
        dispatch(getGardenComplete(garden))
    } catch (error) {
        dispatch(gardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const getGardensComplete = gardens => {
    return {
        type: Types.GET_USER_GARDENS_COMPLETE,
        gardens,
    }
}

export const getGardens = () => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const gardens = await api.gardenService.getAll()
        dispatch(getGardensComplete(gardens))
    } catch (error) {
        dispatch(gardenFailed(error))
    }
}

const addGardenComplete = (garden: Garden) => {
    return {
        type: Types.ADD_GARDEN_COMPLETE,
        garden,
    }
}

export const addGarden = (garden: Garden, { history, match }: any) => async (
    dispatch: any,
    getState: any,
) => {
    try {
        dispatch(gardenLoadingStart())
        const { gardens, ...user } = getState().auth.profile
        const createdGarden = await api.gardenService.create(garden, user.id)
        dispatch(addGardenComplete(createdGarden))
        history.push(`/home`)
    } catch (error) {
        dispatch(gardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const deleteGardenComplete = id => {
    return {
        type: Types.DELETE_GARDEN_COMPLETE,
        id,
    }
}

export const deleteGarden = (id: string, { history }: any) => async (
    dispatch: any,
) => {
    try {
        dispatch(gardenLoadingStart())
        await api.gardenService.delete(id)
        dispatch(deleteGardenComplete(id))
        toastr.success('Success')
        history.push('/home')
    } catch (error) {
        dispatch(gardenFailed(error))
        toastr.error('Error', error.message)
    }
}

const editGardenComplete = garden => {
    return {
        type: Types.UPDATE_GARDEN_COMPLETE,
        garden,
    }
}

export const editGarden = (
    garden: Garden,
    id: string,
    { history }: any,
) => async (dispatch: any) => {
    try {
        dispatch(gardenLoadingStart())
        const updatedGarden = await api.gardenService.update(id, garden)
        dispatch(editGardenComplete(updatedGarden))
        history.push('/home')
    } catch (error) {
        dispatch(gardenFailed(error))
    }
}

const initialState = {
    gardens: [],
    currentGarden: null,
    loading: false,
}

const gardenReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.GARDEN_LOADING_START: {
            return merge(state, { loading: true })
        }
        case Types.ADD_GARDEN_COMPLETE: {
            const { garden } = action
            const gardens = [...state.gardens, garden]
            return merge(state, {
                currentGarden: garden,
                gardens,
                loading: false,
            })
        }

        case BedTypes.ADD_BED_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden || state.currentGarden,
                loading: false,
            })
        }

        case BedTypes.DELETE_BED_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden || state.currentGarden,
                loading: false,
            })
        }

        case Types.GET_GARDEN_COMPLETE: {
            return merge(state, {
                loading: false,
                currentGarden: action.garden,
            })
        }

        case Types.GET_USER_GARDENS_COMPLETE: {
            return merge(state, {
                loading: false,
                gardens: action.gardens,
                currentGarden: action.gardens[0],
            })
        }

        case Types.DELETE_GARDEN_COMPLETE: {
            const gardens = state.gardens.filter(g => g.id !== action.id)
            return merge(state, {
                currentGarden: initialState.currentGarden,
                gardens,
                loading: false,
            })
        }

        case Types.UPDATE_GARDEN_COMPLETE: {
            return merge(state, {
                currentGarden: action.garden,
                loading: false,
            })
        }

        default: {
            return state
        }
    }
}

export default gardenReducer
