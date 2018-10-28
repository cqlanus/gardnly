// @flow
import type { Garden } from '../data/garden'
import type { Bed, CropPosition } from '../data/bed'
import { API, graphqlOperation } from 'aws-amplify'
import { toastr } from 'react-redux-toastr'
import { merge, now } from '../utils/common'
import { getGarden as gardenGet } from '../graphql/queries'
import {
    createGarden,
    deleteGarden as gardenDelete,
    updateGarden,
} from '../graphql/mutations'
import { Types as BedTypes } from './bed'

type Action = {
    type: string,
    garden: Garden,
    beds: Array<Bed>,
    crop: any,
    position: CropPosition,
}

type State = {
    currentGarden: ?Garden,
    loading: boolean,
}
const Types = {
    GET_GARDEN_COMPLETE: 'GET_GARDEN_COMPLETE',
    GET_GARDEN_FAILED: 'GET_GARDEN_FAILED',
    ADD_GARDEN_COMPLETE: 'ADD_GARDEN_COMPLETE',
    ADD_GARDEN_FAILED: 'ADD_GARDEN_FAILED',
    GARDEN_LOADING_START: 'GARDEN_LOADING_START',
    DELETE_GARDEN_COMPLETE: 'DELETE_GARDEN_COMPLETE',
    DELETE_GARDEN_FAILED: 'DELETE_GARDEN_FAILED',
    UPDATE_GARDEN_COMPLETE: 'UPDATE_GARDEN_COMPLETE',
    UPDATE_GARDEN_FAILED: 'UPDATE_GARDEN_FAILED',
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

export const deleteGarden = (id: string, { history }: any) => async (
    dispatch: any,
) => {
    try {
        dispatch(gardenLoadingStart())
        const input = { id }
        await API.graphql(graphqlOperation(gardenDelete, { input }))
        dispatch(deleteGardenComplete())
        toastr.success('Success')
        history.push('/home')
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

const initialState = {
    currentGarden: null,
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

        case Types.GET_GARDEN_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        case Types.DELETE_GARDEN_COMPLETE: {
            return merge(state, {
                currentGarden: initialState.currentGarden,
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
