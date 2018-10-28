// @flow
import { API, graphqlOperation } from 'aws-amplify'
import { merge } from '../utils/common'
import { listCrops } from '../graphql/queries'

type Action = {
    type: string,
    crops: Array<*>,
}

type State = {
    crops: Array<*>,
    loading: boolean,
}

const Types = {
    CROP_LOADING_START: 'CROP_LOADING_START',
    GET_CROPS_COMPLETE: 'GET_CROPS_COMPLETE',
    GET_CROPS_FAILED: 'GET_CROPS_FAILED',
}

const cropLoadingStart = () => {
    return {
        type: Types.CROP_LOADING_START,
    }
}

const getCropsComplete = crops => {
    return {
        type: Types.GET_CROPS_COMPLETE,
        crops,
    }
}

const getCropsFailed = error => {
    return {
        type: Types.GET_CROPS_FAILED,
        error,
    }
}

const byKey = key => (a, b) => {
    const aVal = a[key].toUpperCase()
    const bVal = b[key].toUpperCase()
    const greater = aVal > bVal
    const less = aVal < bVal
    return greater ? 1 : less ? -1 : 0
}

const byName = byKey('commonName')

export const getCrops = () => async (dispatch: any) => {
    try {
        dispatch(cropLoadingStart())
        const { data } = await API.graphql(
            graphqlOperation(listCrops, { limit: 50 }),
        )
        const crops = data.listCrops.items.sort(byName)
        dispatch(getCropsComplete(crops))
    } catch (error) {
        dispatch(getCropsFailed(error))
    }
}

const initialState = {
    crops: [],
    loading: false,
}

const cropReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.CROP_LOADING_START: {
            return merge(state, {
                loading: true,
            })
        }

        case Types.GET_CROPS_COMPLETE: {
            return merge(state, {
                loading: false,
                crops: action.crops,
            })
        }

        case Types.GET_CROPS_FAILED: {
            return merge(state, {
                loading: false,
            })
        }

        default:
            return state
    }
}

export default cropReducer
