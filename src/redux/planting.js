// @flow
import type { Planting } from '../data/crop'
import { merge } from '../utils/common'

type Action = {
    type: string,
    plantingId: string,
}

export type State = {
    plantingId: ?string,
    loading: boolean,
}

export const Types = {
    TOGGLE_PLANTING: 'TOGGLE_PLANTING',
    UPDATE_PLANTING: 'UPDATE_PLANTING',
}

export const togglePlanting = (plantingId: string) => {
    return {
        type: Types.TOGGLE_PLANTING,
        plantingId,
    }
}

// const updatePlantingComplete = planting => {
//     return {
//         planting,
//     }
// }

// const updatePlantingFailed = error => {
//     return {
//         error,
//     }
// }

export const updatePlanting = (planting: Planting) => {
    return {
        type: Types.UPDATE_PLANTING,
        planting,
    }
}

const initialState = {
    plantingId: null,
    loading: false,
}

const plantingReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case Types.TOGGLE_PLANTING: {
            const isSelected = action.plantingId === state.plantingId
            return merge(state, {
                plantingId: isSelected ? null : action.plantingId,
            })
        }
        default:
            return state
    }
}

export default plantingReducer
